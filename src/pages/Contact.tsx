import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-navy-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get In Touch</h1>
          <div className="w-20 h-1 bg-gold-600 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-2 border-navy-600 p-6">
                <div className="w-12 h-12 rounded-lg bg-gold-600/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-2">Email</h3>
                <a 
                  href="mailto:info@sellosaka.org" 
                  className="text-gold-600 hover:text-gold-400 transition-colors"
                >
                  info@sellosaka.org
                </a>
              </Card>

              <Card className="border-2 border-navy-600 p-6">
                <div className="w-12 h-12 rounded-lg bg-gold-600/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-2">Phone</h3>
                <a 
                  href="tel:+27123456789" 
                  className="text-gold-600 hover:text-gold-400 transition-colors"
                >
                  +27 12 345 6789
                </a>
              </Card>

              <Card className="border-2 border-navy-600 p-6">
                <div className="w-12 h-12 rounded-lg bg-gold-600/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-2">Location</h3>
                <p className="text-gray-600">
                  Johannesburg, South Africa
                </p>
              </Card>

              <Card className="border-2 border-navy-600 p-6">
                <div className="w-12 h-12 rounded-lg bg-gold-600/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-2">Hours</h3>
                <p className="text-gray-600 text-sm">Mon - Fri: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600 text-sm">Sat - Sun: Closed</p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-navy-600 p-8">
                <h2 className="text-3xl font-bold text-navy-primary mb-6">Send us a Message</h2>
                
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
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help?"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message here..."
                      required
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gold-600 hover:bg-gold-400 text-navy-primary text-lg h-14"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
