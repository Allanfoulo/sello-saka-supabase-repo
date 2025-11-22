import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import ActiveCompetition from "@/components/ActiveCompetition";
import { Loader2 } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

interface CompetitionData {
  id: string;
  title: string;
  description: string;
  prize_first: string | null;
  prize_second: string | null;
  prize_third: string | null;
  entry_fee: number;
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
          // Map the database fields to the component's expected format
          const mappedCompetition: CompetitionData = {
            id: data.id,
            title: data.title,
            description: data.description,
            prize_first: data.prize, // Map prize to prize_first
            prize_second: data.second_prize, // Map second_prize to prize_second
            prize_third: data.third_prize, // Map third_prize to prize_third
            entry_fee: data.ticket_price, // Map ticket_price to entry_fee
            end_date: data.end_date,
          };
          setActiveCompetition(mappedCompetition);
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
        <FadeIn direction="up" duration={0.8}>
          <ActiveCompetition competition={activeCompetition} />
        </FadeIn>
      ) : (
        <FadeIn direction="up" duration={0.8}>
          <div className="flex flex-col justify-center items-center min-h-[60vh] text-center px-4">
            <h2 className="text-3xl font-bold text-navy-primary mb-4">No Active Competitions</h2>
            <p className="text-gray-600 max-w-md">
              There are currently no active competitions. Please check back later or follow us on social media for updates.
            </p>
          </div>
        </FadeIn>
      )}

      <Footer />
    </div>
  );
};

export default Competition;
