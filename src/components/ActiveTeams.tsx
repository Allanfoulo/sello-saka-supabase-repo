import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { HoverCard } from "@/components/animations/HoverCard";

interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image_url: string;
    linkedin_url: string | null;
    email: string | null;
}

const ActiveTeams = () => {
    const [teams, setTeams] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const { data, error } = await supabase
                    .from("teams")
                    .select("*")
                    .eq("status", "active")
                    .order("created_at", { ascending: true });

                if (error) {
                    console.error("Error fetching teams:", error);
                } else {
                    setTeams(data || []);
                }
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTeams();
    }, []);

    if (loading) {
        return <div className="text-center text-white">Loading team...</div>;
    }

    if (teams.length === 0) {
        return null; // Don't show section if no active teams
    }

    return (
        <section className="py-20 bg-navy-primary">
            <div className="container mx-auto px-4">
                <FadeIn direction="up">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Our Leadership Team
                            <div className="w-20 h-1 bg-gold-600 mx-auto mt-4" />
                        </h2>
                        <p className="text-gray-400 text-lg">Dedicated professionals committed to transforming lives</p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teams.map((member, index) => (
                        <FadeIn key={member.id} direction="up" delay={0.1 * (index + 1)}>
                            <HoverCard>
                                <Card className="bg-navy-600 border-gold-800 overflow-hidden h-full">
                                    <img src={member.image_url} alt={member.name} className="w-full h-64 object-contain bg-navy-700" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                        <p className="text-gold-600 text-sm mb-3">{member.role}</p>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-4">
                                            {member.bio}
                                        </p>
                                        <div className="flex gap-3">
                                            {member.linkedin_url && (
                                                <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-400">
                                                    <Linkedin className="w-5 h-5" />
                                                </a>
                                            )}
                                            {member.email && (
                                                <a href={`mailto:${member.email}`} className="text-gold-600 hover:text-gold-400">
                                                    <Mail className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </Card>
                            </HoverCard>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActiveTeams;
