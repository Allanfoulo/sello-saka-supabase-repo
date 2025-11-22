import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Upload, CheckCircle2, Trophy } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { FadeIn } from "@/components/animations/FadeIn";
import { HoverCard } from "@/components/animations/HoverCard";

interface ActiveCompetitionProps {
    competition: {
        id: string;
        title: string;
        description: string;
        prize_first: string | null;
        prize_second: string | null;
        prize_third: string | null;
        entry_fee: number;
        end_date: string;
    };
}

const ActiveCompetition = ({ competition }: ActiveCompetitionProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(competition.end_date) - +new Date();
            let timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                };
            }

            return timeLeft;
        };

        setCountdown(calculateTimeLeft());

        const timer = setInterval(() => {
            setCountdown(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [competition.end_date]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            let proofUrl = null;

            if (file) {
                const fileExt = file.name.split('.').pop();
                const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.${fileExt}`;
                const filePath = `${fileName}`;

                const { error: uploadError, data } = await supabase.storage
                    .from('competition-proofs')
                    .upload(filePath, file);

                if (uploadError) {
                    console.error("File upload failed:", uploadError);
                    throw new Error("Failed to upload proof of payment");
                } else {
                    proofUrl = data?.path;
                }
            }

            const { error } = await supabase
                .from("competition_entries")
                .insert([{
                    competition_id: competition.id,
                    full_name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    proof_of_payment_url: proofUrl,
                    status: "pending"
                }]);

            if (error) throw error;

            toast.success("Entry Submitted!", {
                description: "Your competition entry has been received. Good luck!",
            });

            setFormData({ name: "", email: "", phone: "" });
            setFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        } catch (error: any) {
            toast.error("Error", {
                description: "Failed to submit entry. Please try again.",
            });
            console.error("Error submitting entry:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {/* Hero */}
            <section className="bg-navy-primary py-20">
                <div className="container mx-auto px-4 text-center">
                    <FadeIn direction="down">
                        <div className="inline-block px-4 py-2 bg-gold-600/20 border border-gold-600 rounded-full mb-6">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-gold-600" />
                                <span className="text-gold-600 font-semibold">Exclusive Fundraising Event</span>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn direction="down" delay={0.2}>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            {competition.title}
                        </h1>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.4}>
                        <div className="w-20 h-1 bg-gold-600 mx-auto mb-6" />
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            {competition.description}
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Countdown */}
            <section className="py-16 bg-navy-600">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Time Remaining</h2>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {[
                            { value: countdown.days, label: "Days" },
                            { value: countdown.hours, label: "Hours" },
                            { value: countdown.minutes, label: "Minutes" },
                            { value: countdown.seconds, label: "Seconds" }
                        ].map((item, index) => (
                            <FadeIn key={item.label} direction="up" delay={0.1 * (index + 1)}>
                                <div className="bg-navy-primary rounded-lg p-8 text-center border-2 border-gold-800">
                                    <div className="text-5xl md:text-6xl font-bold text-gold-600 mb-2">
                                        {String(item.value).padStart(2, '0')}
                                    </div>
                                    <div className="text-gray-400 text-sm uppercase tracking-wide">{item.label}</div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Prizes */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up">
                        <h2 className="text-4xl font-bold text-navy-primary mb-4 text-center">Amazing Prizes</h2>
                        <div className="w-20 h-1 bg-gold-600 mx-auto mb-12" />
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <FadeIn direction="up" delay={0.2}>
                            <HoverCard>
                                <Card className="border-2 border-gold-600 p-8 text-center hover:shadow-xl transition-shadow md:col-start-1 md:col-end-2 h-full">
                                    <div className="w-16 h-16 rounded-full bg-gold-600 flex items-center justify-center mx-auto mb-4">
                                        <Trophy className="w-8 h-8 text-navy-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy-primary mb-3">1st Prize</h3>
                                    <p className="text-gray-600 text-lg mb-2">{competition.prize_first}</p>
                                </Card>
                            </HoverCard>
                        </FadeIn>

                        {competition.prize_second && (
                            <FadeIn direction="up" delay={0.4}>
                                <HoverCard>
                                    <Card className="border-2 border-navy-600 p-8 text-center hover:shadow-xl transition-shadow h-full">
                                        <div className="w-16 h-16 rounded-full bg-navy-600 flex items-center justify-center mx-auto mb-4">
                                            <Trophy className="w-8 h-8 text-gold-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-navy-primary mb-3">2nd Prize</h3>
                                        <p className="text-gray-600 text-lg mb-2">{competition.prize_second}</p>
                                    </Card>
                                </HoverCard>
                            </FadeIn>
                        )}

                        {competition.prize_third && (
                            <FadeIn direction="up" delay={0.6}>
                                <HoverCard>
                                    <Card className="border-2 border-navy-600 p-8 text-center hover:shadow-xl transition-shadow h-full">
                                        <div className="w-16 h-16 rounded-full bg-navy-600 flex items-center justify-center mx-auto mb-4">
                                            <Trophy className="w-8 h-8 text-gold-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-navy-primary mb-3">3rd Prize</h3>
                                        <p className="text-gray-600 text-lg mb-2">{competition.prize_third}</p>
                                    </Card>
                                </HoverCard>
                            </FadeIn>
                        )}
                    </div>
                </div>
            </section>

            {/* How to Enter */}
            <section className="py-20 bg-navy-primary">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up">
                        <h2 className="text-4xl font-bold text-white mb-4 text-center">How to Enter</h2>
                        <div className="w-20 h-1 bg-gold-600 mx-auto mb-12" />
                    </FadeIn>

                    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            { step: 1, title: "Make a Donation", desc: `Entry costs R${competition.entry_fee}. Your contribution supports our programs.` },
                            { step: 2, title: "Upload Proof", desc: "Submit your payment confirmation via the form below." },
                            { step: 3, title: "Get Your Ticket", desc: "Receive your unique ticket number via email." },
                            { step: 4, title: "Wait for Results", desc: "Winners announced after the countdown ends!" }
                        ].map((item, index) => (
                            <FadeIn key={item.step} direction="up" delay={0.1 * (index + 1)}>
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-gold-600 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold text-navy-primary">{item.step}</span>
                                    </div>
                                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Entry Form */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <FadeIn direction="up">
                            <h2 className="text-4xl font-bold text-navy-primary mb-4 text-center">Enter Now</h2>
                            <div className="w-20 h-1 bg-gold-600 mx-auto mb-8" />
                        </FadeIn>

                        <FadeIn direction="up" delay={0.2}>
                            <Card className="border-2 border-navy-600 p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Your name"
                                            required
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="your@email.com"
                                            required
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="+27 12 345 6789"
                                            required
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="proof">Upload Proof of Payment</Label>
                                        <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gold-600 transition-colors cursor-pointer">
                                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                            <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                                            <p className="text-xs text-gray-500 mt-2">PNG, JPG or PDF (max. 5MB)</p>
                                            <input
                                                type="file"
                                                id="proof"
                                                className="hidden"
                                                accept="image/*,.pdf"
                                                ref={fileInputRef}
                                                onChange={handleFileChange}
                                            />
                                        </div>
                                        {file && (
                                            <p className="text-sm text-green-600 mt-2 flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4" />
                                                {file.name}
                                            </p>
                                        )}
                                    </div>

                                    <div className="bg-beige-200 border-l-4 border-gold-600 p-4">
                                        <div className="flex gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                                            <div className="text-sm text-gray-700">
                                                <p className="font-semibold mb-1">Payment Details:</p>
                                                <p>Bank: FNB | Account: Sello Saka Foundation</p>
                                                <p>Account Number: 62345678910</p>
                                                <p>Reference: COMP2025</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gold-600 hover:bg-gold-400 text-navy-primary text-lg h-14"
                                        disabled={loading}
                                    >
                                        {loading ? "Submitting..." : "Submit Entry"}
                                    </Button>
                                </form>
                            </Card>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ActiveCompetition;
