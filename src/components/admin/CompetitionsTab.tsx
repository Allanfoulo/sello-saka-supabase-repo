import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Competition {
  id: string;
  title: string;
  prize: string;
  second_prize?: string;
  third_prize?: string;
  ticket_price: number;
  status: string;
  end_date: string;
}

interface CompetitionEntry {
  id: string;
  name: string;
  email: string;
  phone: string;
  ticket_number: string;
  proof_of_payment_url: string | null;
  status: string;
  created_at: string;
}

const CompetitionsTab = () => {
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    prize: "",
    second_prize: "",
    third_prize: "",
    ticket_price: "",
    max_tickets: "",
    start_date: "",
    end_date: "",
  });
  const [selectedCompetition, setSelectedCompetition] = useState<string | null>(null);
  const [entries, setEntries] = useState<CompetitionEntry[]>([]);
  const [showEntries, setShowEntries] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchCompetitions();
  }, []);

  const fetchCompetitions = async () => {
    const { data, error } = await supabase
      .from("competitions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch competitions",
        variant: "destructive",
      });
      return;
    }

    setCompetitions(data || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("competitions").insert({
      title: formData.title,
      description: formData.description,
      prize: formData.prize,
      second_prize: formData.second_prize,
      third_prize: formData.third_prize,
      ticket_price: parseFloat(formData.ticket_price),
      max_tickets: parseInt(formData.max_tickets),
      start_date: formData.start_date,
      end_date: formData.end_date,
      status: "active",
    });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to create competition",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Competition created successfully",
    });
    setShowForm(false);
    setFormData({
      title: "",
      description: "",
      prize: "",
      second_prize: "",
      third_prize: "",
      ticket_price: "",
      max_tickets: "",
      start_date: "",
      end_date: "",
    });
    fetchCompetitions();
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("competitions")
      .update({ status })
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update competition",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Competition status updated",
    });
    fetchCompetitions();
  };

  const viewEntries = async (competitionId: string) => {
    setSelectedCompetition(competitionId);
    const { data, error } = await supabase
      .from("competition_entries")
      .select("*")
      .eq("competition_id", competitionId)
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch entries",
        variant: "destructive",
      });
      return;
    }

    setEntries(data || []);
    setShowEntries(true);
  };

  const updateEntryStatus = async (entryId: string, status: string) => {
    const { error } = await supabase
      .from("competition_entries")
      .update({ status })
      .eq("id", entryId);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update entry status",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Entry status updated",
    });

    // Refresh entries
    if (selectedCompetition) {
      viewEntries(selectedCompetition);
    }
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-navy-primary flex justify-between items-center">
          <span>Competition Management</span>
          <Dialog open={showForm} onOpenChange={setShowForm}>
            <DialogTrigger asChild>
              <Button className="bg-gold-600 hover:bg-gold-400 text-navy-primary">
                Create Competition
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Competition</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label>Title</Label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label>1st Prize</Label>
                    <Input
                      value={formData.prize}
                      onChange={(e) => setFormData({ ...formData, prize: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label>2nd Prize</Label>
                    <Input
                      value={formData.second_prize}
                      onChange={(e) => setFormData({ ...formData, second_prize: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>3rd Prize</Label>
                    <Input
                      value={formData.third_prize}
                      onChange={(e) => setFormData({ ...formData, third_prize: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Ticket Price (R)</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={formData.ticket_price}
                      onChange={(e) => setFormData({ ...formData, ticket_price: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label>Max Tickets</Label>
                    <Input
                      type="number"
                      value={formData.max_tickets}
                      onChange={(e) => setFormData({ ...formData, max_tickets: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Start Date</Label>
                    <Input
                      type="datetime-local"
                      value={formData.start_date}
                      onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label>End Date</Label>
                    <Input
                      type="datetime-local"
                      value={formData.end_date}
                      onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-gold-600 hover:bg-gold-400 text-navy-primary">
                  Create Competition
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>1st Prize</TableHead>
                <TableHead>2nd Prize</TableHead>
                <TableHead>3rd Prize</TableHead>
                <TableHead>Ticket Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {competitions.map((comp) => (
                <TableRow key={comp.id}>
                  <TableCell>{comp.title}</TableCell>
                  <TableCell>{comp.prize}</TableCell>
                  <TableCell>{comp.second_prize || "-"}</TableCell>
                  <TableCell>{comp.third_prize || "-"}</TableCell>
                  <TableCell>R{comp.ticket_price}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        comp.status === "active"
                          ? "bg-green-500"
                          : comp.status === "ended"
                            ? "bg-red-500"
                            : "bg-gray-500"
                      }
                    >
                      {comp.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(comp.end_date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => updateStatus(comp.id, "active")}
                      >
                        Activate
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => updateStatus(comp.id, "ended")}
                      >
                        End
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => viewEntries(comp.id)}
                      >
                        View Entries
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      <Dialog open={showEntries} onOpenChange={setShowEntries}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Competition Entries</DialogTitle>
          </DialogHeader>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Ticket #</TableHead>
                  <TableHead>Proof</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entries.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell>{entry.name}</TableCell>
                    <TableCell>{entry.email}</TableCell>
                    <TableCell>{entry.ticket_number || "Pending"}</TableCell>
                    <TableCell>
                      {entry.proof_of_payment_url ? (
                        <a
                          href={entry.proof_of_payment_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          View Proof
                        </a>
                      ) : (
                        <span className="text-gray-400">No proof</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          entry.status === "approved"
                            ? "bg-green-500"
                            : entry.status === "rejected"
                              ? "bg-red-500"
                              : "bg-yellow-500"
                        }
                      >
                        {entry.status || "pending"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(entry.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => updateEntryStatus(entry.id, "approved")}
                        >
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => updateEntryStatus(entry.id, "rejected")}
                        >
                          Reject
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {entries.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-4 text-gray-500">
                      No entries found for this competition.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default CompetitionsTab;
