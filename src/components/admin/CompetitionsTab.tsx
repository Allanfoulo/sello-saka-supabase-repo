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
  ticket_price: number;
  status: string;
  end_date: string;
}

const CompetitionsTab = () => {
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    prize: "",
    ticket_price: "",
    max_tickets: "",
    start_date: "",
    end_date: "",
  });
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
                <div>
                  <Label>Prize</Label>
                  <Input
                    value={formData.prize}
                    onChange={(e) => setFormData({ ...formData, prize: e.target.value })}
                    required
                  />
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
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Prize</TableHead>
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
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CompetitionsTab;
