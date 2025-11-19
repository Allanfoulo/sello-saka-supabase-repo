import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Upload, CheckCircle2, Trophy } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Competition = () => {
  const { toast } = useToast();
  const [countdown, setCountdown] = useState({
    days: 29,
    hours: 2,
    minutes: 46,
    seconds: 34
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Entry Submitted!",
      description: "Your competition entry has been received. Good luck!",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-navy-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-2 bg-gold-600/20 border border-gold-600 rounded-full mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold-600" />
              <span className="text-gold-600 font-semibold">Exclusive Fundraising Event</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Win Big, Support Lives
          </h1>
          <div className="w-20 h-1 bg-gold-600 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enter our exclusive giveaway and stand a chance to win amazing prizes while
            supporting the Sello Saka Foundation's mission to empower childhood cancer survivors.
          </p>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-16 bg-navy-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Time Remaining</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-navy-primary rounded-lg p-8 text-center border-2 border-gold-800">
              <div className="text-5xl md:text-6xl font-bold text-gold-600 mb-2">
                {String(countdown.days).padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Days</div>
            </div>
            <div className="bg-navy-primary rounded-lg p-8 text-center border-2 border-gold-800">
              <div className="text-5xl md:text-6xl font-bold text-gold-600 mb-2">
                {String(countdown.hours).padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Hours</div>
            </div>
            <div className="bg-navy-primary rounded-lg p-8 text-center border-2 border-gold-800">
              <div className="text-5xl md:text-6xl font-bold text-gold-600 mb-2">
                {String(countdown.minutes).padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Minutes</div>
            </div>
            <div className="bg-navy-primary rounded-lg p-8 text-center border-2 border-gold-800">
              <div className="text-5xl md:text-6xl font-bold text-gold-600 mb-2">
                {String(countdown.seconds).padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Seconds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy-primary mb-4 text-center">Amazing Prizes</h2>
          <div className="w-20 h-1 bg-gold-600 mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-gold-600 p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-gold-600 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-navy-primary" />
              </div>
              <h3 className="text-2xl font-bold text-navy-primary mb-3">1st Prize</h3>
              <p className="text-gray-600 text-lg mb-2">R50,000 Cash</p>
              <p className="text-sm text-gray-500">+ Premium Gift Hamper</p>
            </Card>

            <Card className="border-2 border-navy-600 p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-navy-600 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy-primary mb-3">2nd Prize</h3>
              <p className="text-gray-600 text-lg mb-2">R25,000 Cash</p>
              <p className="text-sm text-gray-500">+ Luxury Weekend Getaway</p>
            </Card>

            <Card className="border-2 border-navy-600 p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-navy-600 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy-primary mb-3">3rd Prize</h3>
              <p className="text-gray-600 text-lg mb-2">R10,000 Cash</p>
              <p className="text-sm text-gray-500">+ Shopping Voucher</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Enter */}
      <section className="py-20 bg-navy-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">How to Enter</h2>
          <div className="w-20 h-1 bg-gold-600 mx-auto mb-12" />

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-navy-primary">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Make a Donation</h3>
              <p className="text-gray-400 text-sm">
                Entry costs R100. Your contribution supports our programs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-navy-primary">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Upload Proof</h3>
              <p className="text-gray-400 text-sm">
                Submit your payment confirmation via the form below.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-navy-primary">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Get Your Ticket</h3>
              <p className="text-gray-400 text-sm">
                Receive your unique ticket number via email.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-navy-primary">4</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Wait for Results</h3>
              <p className="text-gray-400 text-sm">
                Winners announced after the countdown ends!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Entry Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-navy-primary mb-4 text-center">Enter Now</h2>
            <div className="w-20 h-1 bg-gold-600 mx-auto mb-8" />

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
                    <input type="file" id="proof" className="hidden" accept="image/*,.pdf" />
                  </div>
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
                >
                  Submit Entry
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-12 bg-navy-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Terms & Conditions</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Entry fee is R100 per ticket. Multiple entries allowed.</li>
              <li>• Competition closes when countdown reaches zero.</li>
              <li>• Winners will be contacted via email and phone within 48 hours.</li>
              <li>• Prizes are non-transferable and cannot be exchanged for cash.</li>
              <li>• All proceeds support the Sello Saka Foundation's programs.</li>
              <li>• By entering, you agree to our terms and privacy policy.</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Competition;
