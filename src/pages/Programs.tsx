import { Stethoscope, Brain, GraduationCap, Users, Heart, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { FadeIn } from "@/components/animations/FadeIn";
import { HoverCard } from "@/components/animations/HoverCard";

const Programs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-navy-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="down" duration={0.8}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Programs & Services</h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} duration={0.8}>
            <div className="w-20 h-1 bg-gold-600 mx-auto mb-6" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive support across four pillars of care
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Medical Support */}
          <FadeIn direction="up">
            <div className="max-w-6xl mx-auto mb-20">
              <HoverCard scale={1.01}>
                <Card className="border-2 border-navy-600 overflow-hidden h-full">
                  <div className="bg-navy-primary p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gold-600 flex items-center justify-center">
                        <Stethoscope className="w-8 h-8 text-navy-primary" />
                      </div>
                      <h2 className="text-4xl font-bold text-white">Medical Support</h2>
                    </div>
                    <p className="text-gray-400 text-lg">
                      Assisting with long-term medical monitoring, treatment of secondary conditions, and
                      accessibility to specialized care providers.
                    </p>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-navy-primary mb-6">What We Provide:</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Follow-Up Care Coordination</h4>
                          <p className="text-gray-600 text-sm">
                            Regular medical check-ups and monitoring for late effects such as cardiac issues,
                            endocrine disorders, and cognitive impairments.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Specialist Referrals</h4>
                          <p className="text-gray-600 text-sm">
                            Connecting survivors with oncologists, cardiologists, endocrinologists, and other
                            specialists as needed.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Financial Assistance</h4>
                          <p className="text-gray-600 text-sm">
                            Help covering medical expenses, prescriptions, and travel costs for medical appointments.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Health Education</h4>
                          <p className="text-gray-600 text-sm">
                            Workshops and resources to help families understand and manage long-term health challenges.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </HoverCard>
            </div>
          </FadeIn>

          {/* Psychological Care */}
          <FadeIn direction="up" delay={0.2}>
            <div className="max-w-6xl mx-auto mb-20">
              <HoverCard scale={1.01}>
                <Card className="border-2 border-navy-600 overflow-hidden h-full">
                  <div className="bg-navy-600 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gold-600 flex items-center justify-center">
                        <Brain className="w-8 h-8 text-navy-primary" />
                      </div>
                      <h2 className="text-4xl font-bold text-white">Psychological Care</h2>
                    </div>
                    <p className="text-gray-400 text-lg">
                      Providing ongoing access to therapy, counseling, and support groups to address trauma,
                      anxiety, and learning difficulties associated with survivorship.
                    </p>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-navy-primary mb-6">What We Provide:</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Individual Counseling</h4>
                          <p className="text-gray-600 text-sm">
                            One-on-one therapy sessions with licensed psychologists specializing in childhood
                            trauma and cancer survivorship.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Family Therapy</h4>
                          <p className="text-gray-600 text-sm">
                            Support for families to navigate the emotional challenges and strengthen family bonds.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Support Groups</h4>
                          <p className="text-gray-600 text-sm">
                            Peer-led groups where survivors can share experiences, build connections, and find community.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Crisis Intervention</h4>
                          <p className="text-gray-600 text-sm">
                            24/7 access to mental health professionals for urgent psychological support.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </HoverCard>
            </div>
          </FadeIn>

          {/* Educational Assistance */}
          <FadeIn direction="up" delay={0.4}>
            <div className="max-w-6xl mx-auto mb-20">
              <HoverCard scale={1.01}>
                <Card className="border-2 border-navy-600 overflow-hidden h-full">
                  <div className="bg-navy-primary p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gold-600 flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-navy-primary" />
                      </div>
                      <h2 className="text-4xl font-bold text-white">Educational Assistance</h2>
                    </div>
                    <p className="text-gray-400 text-lg">
                      Offering tutoring, specialized learning materials, and advocacy within educational
                      institutions to help survivors catch up and excel academically.
                    </p>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-navy-primary mb-6">What We Provide:</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Personalized Tutoring</h4>
                          <p className="text-gray-600 text-sm">
                            One-on-one academic support tailored to each survivor's learning needs and pace.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Learning Resources</h4>
                          <p className="text-gray-600 text-sm">
                            Access to books, technology, and specialized materials to support learning.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">School Advocacy</h4>
                          <p className="text-gray-600 text-sm">
                            Working with schools to ensure appropriate accommodations and support systems are in place.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Scholarship Opportunities</h4>
                          <p className="text-gray-600 text-sm">
                            Financial support for secondary and tertiary education expenses.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </HoverCard>
            </div>
          </FadeIn>

          {/* Social Integration */}
          <FadeIn direction="up" delay={0.6}>
            <div className="max-w-6xl mx-auto mb-20">
              <HoverCard scale={1.01}>
                <Card className="border-2 border-navy-600 overflow-hidden h-full">
                  <div className="bg-navy-600 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gold-600 flex items-center justify-center">
                        <Users className="w-8 h-8 text-navy-primary" />
                      </div>
                      <h2 className="text-4xl font-bold text-white">Social Integration</h2>
                    </div>
                    <p className="text-gray-400 text-lg">
                      Creating community events, skill-building workshops, and mentorship opportunities to
                      foster social confidence and independence.
                    </p>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-navy-primary mb-6">What We Provide:</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Community Events</h4>
                          <p className="text-gray-600 text-sm">
                            Regular gatherings, camps, and activities where survivors can connect and build friendships.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Skills Workshops</h4>
                          <p className="text-gray-600 text-sm">
                            Training in communication, leadership, job readiness, and other life skills.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Mentorship Program</h4>
                          <p className="text-gray-600 text-sm">
                            Pairing survivors with mentors who provide guidance, support, and encouragement.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Recreation Activities</h4>
                          <p className="text-gray-600 text-sm">
                            Sports, arts, and cultural programs that promote physical health and social engagement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </HoverCard>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-primary">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Support?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              If you or someone you know is a childhood cancer survivor in need of assistance,
              we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold-600 hover:bg-gold-400 text-navy-primary transition-transform hover:scale-105">
                <Link to="/apply">
                  <Heart className="w-5 h-5 mr-2" />
                  Apply for Assistance
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-gold-600 text-gold-600 hover:bg-white hover:text-navy-primary transition-transform hover:scale-105"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
