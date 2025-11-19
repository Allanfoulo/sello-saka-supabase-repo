import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, FileText, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    survivorName: "",
    dateOfBirth: "",
    guardianName: "",
    email: "",
    phone: "",
    address: "",
    diagnosisDetails: "",
    treatmentDetails: "",
    currentChallenges: "",
    programsInterested: [] as string[],
    consent: false
  });

  const programs = [
    "Medical Support",
    "Psychological Care",
    "Educational Assistance",
    "Social Integration"
  ];

  const handleProgramToggle = (program: string) => {
    setFormData(prev => ({
      ...prev,
      programsInterested: prev.programsInterested.includes(program)
        ? prev.programsInterested.filter(p => p !== program)
        : [...prev.programsInterested, program]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and contact you within 5 business days.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-navy-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-gold-600/20 border-2 border-gold-600 flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-gold-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Apply for Assistance</h1>
          <div className="w-20 h-1 bg-gold-600 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're here to support childhood cancer survivors on their journey to thriving
          </p>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">Eligibility Criteria</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-gold-600 p-6">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-primary mb-2">Cancer Survivors</h3>
                    <p className="text-gray-600 text-sm">
                      Diagnosed with cancer before age 18 and currently in remission or post-treatment
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-2 border-gold-600 p-6">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-primary mb-2">Age Range</h3>
                    <p className="text-gray-600 text-sm">
                      Currently between 5-25 years old
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-2 border-gold-600 p-6">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-primary mb-2">South African Residents</h3>
                    <p className="text-gray-600 text-sm">
                      Living in South Africa and able to access our services
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-2 border-gold-600 p-6">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-primary mb-2">Financial Need</h3>
                    <p className="text-gray-600 text-sm">
                      Demonstrable financial need for support services
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-beige-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-navy-600 p-8">
              <h2 className="text-3xl font-bold text-navy-primary mb-8">Application Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Survivor Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-navy-primary border-b-2 border-gold-600 pb-2">
                    Survivor Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="survivorName">Survivor's Full Name *</Label>
                      <Input
                        id="survivorName"
                        value={formData.survivorName}
                        onChange={(e) => setFormData({ ...formData, survivorName: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Guardian/Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-navy-primary border-b-2 border-gold-600 pb-2">
                    Guardian/Contact Information
                  </h3>
                  
                  <div>
                    <Label htmlFor="guardianName">Guardian's Full Name *</Label>
                    <Input
                      id="guardianName"
                      value={formData.guardianName}
                      onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Residential Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      required
                      rows={3}
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Medical History */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-navy-primary border-b-2 border-gold-600 pb-2">
                    Medical History
                  </h3>
                  
                  <div>
                    <Label htmlFor="diagnosisDetails">Cancer Diagnosis Details *</Label>
                    <Textarea
                      id="diagnosisDetails"
                      value={formData.diagnosisDetails}
                      onChange={(e) => setFormData({ ...formData, diagnosisDetails: e.target.value })}
                      placeholder="Type of cancer, age at diagnosis, etc."
                      required
                      rows={3}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="treatmentDetails">Treatment History *</Label>
                    <Textarea
                      id="treatmentDetails"
                      value={formData.treatmentDetails}
                      onChange={(e) => setFormData({ ...formData, treatmentDetails: e.target.value })}
                      placeholder="Treatments received, hospital, completion date, etc."
                      required
                      rows={3}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="currentChallenges">Current Challenges *</Label>
                    <Textarea
                      id="currentChallenges"
                      value={formData.currentChallenges}
                      onChange={(e) => setFormData({ ...formData, currentChallenges: e.target.value })}
                      placeholder="Describe the late effects or challenges you're currently facing..."
                      required
                      rows={4}
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Programs of Interest */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-navy-primary border-b-2 border-gold-600 pb-2">
                    Programs of Interest *
                  </h3>
                  
                  <div className="space-y-3">
                    {programs.map((program) => (
                      <div key={program} className="flex items-center gap-3">
                        <Checkbox
                          id={program}
                          checked={formData.programsInterested.includes(program)}
                          onCheckedChange={() => handleProgramToggle(program)}
                        />
                        <Label htmlFor={program} className="cursor-pointer">
                          {program}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consent */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                      required
                    />
                    <Label htmlFor="consent" className="cursor-pointer text-sm leading-relaxed">
                      I consent to the Sello Saka Foundation collecting and processing this information
                      for the purpose of providing support services. I understand that all information
                      will be kept confidential and used solely for program eligibility assessment and service delivery.
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gold-600 hover:bg-gold-400 text-navy-primary text-lg h-14"
                  disabled={!formData.consent || formData.programsInterested.length === 0}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>

                <div className="bg-beige-200 border-l-4 border-gold-600 p-4">
                  <p className="text-sm text-gray-700">
                    <strong>What happens next?</strong> Our team will review your application within 5 business days.
                    We may contact you for additional information or to schedule an initial consultation.
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;
