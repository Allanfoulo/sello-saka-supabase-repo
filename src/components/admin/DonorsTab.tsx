import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface Donor {
  id: string;
  name: string;
  email: string;
  amount: number;
  donation_type: string;
  status: string;
  created_at: string;
}

const DonorsTab = () => {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    const { data, error } = await supabase
      .from("donors")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch donors",
        variant: "destructive",
      });
      return;
    }

    setDonors(data || []);
    const total = data?.reduce((sum, donor) => sum + parseFloat(donor.amount.toString()), 0) || 0;
    setTotalAmount(total);
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-navy-primary flex justify-between items-center">
          <span>Donor Management</span>
          <div className="text-gold-600 text-2xl">
            Total Raised: R{totalAmount.toLocaleString()}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {donors.map((donor) => (
              <TableRow key={donor.id}>
                <TableCell>{donor.name}</TableCell>
                <TableCell>{donor.email}</TableCell>
                <TableCell className="text-gold-600 font-semibold">
                  R{parseFloat(donor.amount.toString()).toLocaleString()}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="border-navy-600">
                    {donor.donation_type}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      donor.status === "completed"
                        ? "bg-green-500"
                        : donor.status === "pending"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }
                  >
                    {donor.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {new Date(donor.created_at).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DonorsTab;
