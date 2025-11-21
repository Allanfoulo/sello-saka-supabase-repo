import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import ActiveCompetition from "@/components/ActiveCompetition";
import { Loader2 } from "lucide-react";

interface CompetitionData {
  id: string;
  title: string;
  description: string;
  prize: string;
  second_prize?: string | null;
  third_prize?: string | null;
  ticket_price: number;
  end_date: string;
}

const Competition = () => {
  const [activeCompetition, setActiveCompetition] = useState<CompetitionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActiveCompetition = async () => {
      try {
        const { data, error } = await supabase
          .from("competitions")
          .select("*")
          .eq("status", "active")
          .single();

        if (error) {
          console.error("Error fetching active competition:", error);
        } else {
          setActiveCompetition(data);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActiveCompetition();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {loading ? (
        <div className="flex justify-center items-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-gold-600" />
        </div>
      ) : activeCompetition ? (
        <ActiveCompetition competition={activeCompetition} />
      ) : (
        <div className="flex flex-col justify-center items-center min-h-[60vh] text-center px-4">
          <h2 className="text-3xl font-bold text-navy-primary mb-4">No Active Competitions</h2>
          <p className="text-gray-600 max-w-md">
            There are currently no active competitions. Please check back later or follow us on social media for updates.
          </p>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Competition;
