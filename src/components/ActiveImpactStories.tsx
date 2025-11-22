import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { HoverCard } from "@/components/animations/HoverCard";

interface ImpactStory {
    id: string;
    title: string;
    content: string;
    image_url: string;
    category: string;
    quote: string;
    quote_author: string;
    impact_summary: string;
}

interface ActiveImpactStoriesProps {
    variant?: "list" | "grid";
    limit?: number;
}

const ActiveImpactStories = ({ variant = "list", limit }: ActiveImpactStoriesProps) => {
    const [stories, setStories] = useState<ImpactStory[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStories();
    }, []);

    const fetchStories = async () => {
        let query = supabase
            .from("impact_stories")
            .select("*")
            .eq("is_active", true)
            .order("created_at", { ascending: false });

        if (limit) {
            query = query.limit(limit);
        }

        const { data, error } = await query;

        if (error) {
            console.error("Error fetching stories:", error);
        } else {
            setStories(data || []);
        }
        setLoading(false);
    };

    if (loading) {
        return <div className="text-center py-20">Loading stories...</div>;
    }

    if (stories.length === 0) {
        return (
            <div className="text-center py-20 text-gray-500">
                <p>No impact stories available at the moment.</p>
            </div>
        );
    }

    if (variant === "grid") {
        return (
            <div className="grid md:grid-cols-3 gap-8">
                {stories.map((story, index) => (
                    <FadeIn key={story.id} direction="up" delay={0.1 * (index + 1)}>
                        <HoverCard>
                            <Card className="bg-navy-600 border-gold-800 overflow-hidden h-full">
                                <img
                                    src={story.image_url || "/placeholder.svg"}
                                    alt={story.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3">{story.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                        {story.content}
                                    </p>
                                    {story.quote && (
                                        <div className="bg-navy-primary border-l-4 border-gold-600 p-4 mb-4">
                                            <div className="flex items-start gap-2 mb-2">
                                                <span className="text-gold-600 text-2xl">"</span>
                                            </div>
                                            <p className="text-gray-400 text-sm italic mb-2">
                                                "{story.quote}"
                                            </p>
                                            {story.quote_author && (
                                                <p className="text-gold-600 text-sm">— {story.quote_author}</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </HoverCard>
                    </FadeIn>
                ))}
            </div>
        );
    }

    return (
        <div className="space-y-16">
            {stories.map((story, index) => (
                <FadeIn key={story.id} direction="up" delay={0.1}>
                    <HoverCard scale={1.01}>
                        <Card className="overflow-hidden border-2 border-navy-600">
                            <div className="grid md:grid-cols-2">
                                <div className={`${index % 2 === 1 ? "md:order-2" : ""} h-64 md:h-auto`}>
                                    <img
                                        src={story.image_url || "/placeholder.svg"}
                                        alt={story.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className={`p-8 md:p-12 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                                    {story.category && (
                                        <div className="inline-block px-4 py-1 bg-gold-600/10 border border-gold-600 rounded-full mb-4">
                                            <span className="text-gold-600 text-sm font-semibold">{story.category}</span>
                                        </div>
                                    )}
                                    <h2 className="text-3xl font-bold text-navy-primary mb-4">
                                        {story.title}
                                    </h2>
                                    <p className="text-gray-600 mb-6 whitespace-pre-wrap">
                                        {story.content}
                                    </p>

                                    {story.quote && (
                                        <div className="bg-beige-200 border-l-4 border-gold-600 p-6">
                                            <div className="flex gap-2 mb-3">
                                                <Quote className="w-5 h-5 text-gold-600" />
                                            </div>
                                            <p className="text-gray-700 italic mb-3">
                                                "{story.quote}"
                                            </p>
                                            {story.quote_author && (
                                                <p className="text-gold-600 font-semibold">— {story.quote_author}</p>
                                            )}
                                        </div>
                                    )}

                                    {story.impact_summary && (
                                        <div className="mt-6 p-4 bg-navy-primary/5 rounded-lg">
                                            <p className="text-sm text-navy-primary">
                                                <strong>Impact:</strong> {story.impact_summary}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Card>
                    </HoverCard>
                </FadeIn>
            ))}
        </div>
    );
};

export default ActiveImpactStories;
