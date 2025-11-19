import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, CreditCard, Building, Smartphone, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Donate = () => {
  const { toast } = useToast();
  const [donationType, setDonationType] = useState("once");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank You!",
      description: "Your donation makes a real difference in survivors' lives.",
    });
  };

  const amounts = ["50", "100", "250", "500", "1000"];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-navy-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-gold-600/20 border-2 border-gold-600 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-gold-600" fill="currentColor" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Make a Difference Today</h1>
          <div className="w-20 h-1 bg-gold-600 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your donation helps us provide life-changing support to childhood cancer survivors
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">Your Impact</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-gold-600 p-6 text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">R500</div>
              <p className="text-gray-600">Provides one month of tutoring for a survivor</p>
            </Card>
            <Card className="border-2 border-gold-600 p-6 text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">R1,000</div>
              <p className="text-gray-600">Covers therapy sessions for a family</p>
            </Card>
            <Card className="border-2 border-gold-600 p-6 text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">R5,000</div>
              <p className="text-gray-600">Supports medical follow-up care for three months</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-beige-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-navy-600 p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Donation Type */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Donation Type</Label>
                  <RadioGroup value={donationType} onValueChange={setDonationType} className="grid grid-cols-2 gap-4">
                    <div>
                      <RadioGroupItem value="once" id="once" className="peer sr-only" />
                      <Label
                        htmlFor="once"
                        className="flex items-center justify-center rounded-lg border-2 border-navy-600 bg-white p-4 hover:bg-navy-primary/5 peer-data-[state=checked]:border-gold-600 peer-data-[state=checked]:bg-gold-600/10 cursor-pointer transition-all"
                      >
                        <span className="font-semibold">One-Time</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="monthly" id="monthly" className="peer sr-only" />
                      <Label
                        htmlFor="monthly"
                        className="flex items-center justify-center rounded-lg border-2 border-navy-600 bg-white p-4 hover:bg-navy-primary/5 peer-data-[state=checked]:border-gold-600 peer-data-[state=checked]:bg-gold-600/10 cursor-pointer transition-all"
                      >
                        <span className="font-semibold">Monthly</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Amount Selection */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Select Amount (ZAR)</Label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {amounts.map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant={selectedAmount === amount ? "default" : "outline"}
                        className={selectedAmount === amount ? "bg-gold-600 hover:bg-gold-400 text-navy-primary" : "border-navy-600"}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                      >
                        R{amount}
                      </Button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount("");
                    }}
                  />
                </div>

                {/* Donor Information */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold mb-4 block">Your Information</Label>
                  
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
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+27 12 345 6789"
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Payment Method</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button type="button" variant="outline" className="h-20 flex flex-col gap-2">
                      <CreditCard className="w-6 h-6" />
                      <span className="text-xs">Card</span>
                    </Button>
                    <Button type="button" variant="outline" className="h-20 flex flex-col gap-2">
                      <Building className="w-6 h-6" />
                      <span className="text-xs">EFT</span>
                    </Button>
                    <Button type="button" variant="outline" className="h-20 flex flex-col gap-2">
                      <Smartphone className="w-6 h-6" />
                      <span className="text-xs">PayFast</span>
                    </Button>
                    <Button type="button" variant="outline" className="h-20 flex flex-col gap-2">
                      <CreditCard className="w-6 h-6" />
                      <span className="text-xs">PayPal</span>
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gold-600 hover:bg-gold-400 text-navy-primary text-lg h-14"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Complete Donation
                </Button>

                <div className="bg-beige-200 border-l-4 border-gold-600 p-4 mt-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700">
                      <p className="font-semibold mb-1">Secure & Tax Deductible</p>
                      <p>Your donation is secure and tax deductible. You'll receive a Section 18A certificate for tax purposes.</p>
                    </div>
                  </div>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Where Funds Go */}
      <section className="py-20 bg-navy-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Where Your Donation Goes</h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-navy-600 border-gold-800 p-8">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">Program Services</span>
                    <span className="text-gold-600 font-bold">75%</span>
                  </div>
                  <div className="w-full bg-navy-primary rounded-full h-3">
                    <div className="bg-gold-600 h-3 rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">Fundraising</span>
                    <span className="text-gold-600 font-bold">15%</span>
                  </div>
                  <div className="w-full bg-navy-primary rounded-full h-3">
                    <div className="bg-gold-600 h-3 rounded-full" style={{ width: '15%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">Administration</span>
                    <span className="text-gold-600 font-bold">10%</span>
                  </div>
                  <div className="w-full bg-navy-primary rounded-full h-3">
                    <div className="bg-gold-600 h-3 rounded-full" style={{ width: '10%' }} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
