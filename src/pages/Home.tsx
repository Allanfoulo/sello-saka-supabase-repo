import { Link } from "react-router-dom";
import { Heart, Stethoscope, Brain, GraduationCap, Users, ChevronDown, Sparkles, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";
import logo from "@/assets/brand/svg/logo no background bigger.svg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

import ActiveTeams from "@/components/ActiveTeams";
import ActiveImpactStories from "@/components/ActiveImpactStories";
import { FadeIn } from "@/components/animations/FadeIn";
import { HoverCard } from "@/components/animations/HoverCard";

const Home = () => {


  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-navy-primary bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-navy-primary/80" />
        <div className="relative container mx-auto px-4 text-center">
          <FadeIn direction="down" duration={0.8}>
            <img src={logo} alt="Sello Saka Foundation" className="h-32 w-auto mx-auto mb-8" />
          </FadeIn>

          <FadeIn direction="up" delay={0.2} duration={0.8}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Empowering Childhood<br />Cancer Survivors.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.4} duration={0.8}>
            <p className="text-xl md:text-2xl text-gold-400 mb-8 max-w-3xl mx-auto">
              Restoring futures. Building resilience. Ensuring every survivor thrives.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.6} duration={0.8}>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
              The Sello Saka Foundation is dedicated to providing comprehensive,
              long-term support for survivors of early childhood cancer,
              addressing late effects and promoting holistic recovery.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.8} duration={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold-600 hover:bg-gold-400 text-navy-primary text-lg h-14 px-8 transition-transform hover:scale-105">
                <Link to="/donate">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-gold-600 bg-transparent text-gold-600 hover:bg-white hover:text-navy-primary text-lg h-14 px-8 transition-transform hover:scale-105"
              >
                <Link to="/apply">
                  Apply for Assistance
                </Link>
              </Button>
            </div>
          </FadeIn>

          <div className="mt-16 animate-bounce flex justify-center">
            <ChevronDown className="w-8 h-8 text-gold-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-navy-primary">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                About Our Foundation
                <div className="w-20 h-1 bg-gold-600 mx-auto mt-4" />
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn direction="right" delay={0.2} className="h-full">
              <HoverCard className="h-full">
                <Card className="bg-navy-600 border-gold-800 p-8 h-full">
                  <div className="w-12 h-12 rounded-lg bg-gold-600/20 flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-gold-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
                  <p className="text-gray-400 leading-relaxed">
                    A world where every survivor of early childhood cancer thrives, realizing
                    their full potential free from the lasting constraints of their diagnosis and
                    treatment journey.
                  </p>
                </Card>
              </HoverCard>
            </FadeIn>

            <FadeIn direction="left" delay={0.4} className="h-full">
              <HoverCard className="h-full">
                <Card className="bg-navy-600 border-gold-800 p-8 h-full">
                  <div className="w-12 h-12 rounded-lg bg-gold-600/20 flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-gold-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
                  <p className="text-gray-400 leading-relaxed">
                    To provide holistic, sustained support—medical, psychological,
                    educational, and social—to children and families navigating the long-term
                    effects of early childhood cancer, ensuring dignity and a pathway to
                    success.
                  </p>
                </Card>
              </HoverCard>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.6}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-8">Our Core Values</h3>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Compassion", desc: "Centering empathy and kindness in every interaction, service, and policy." },
              { icon: Users, title: "Dignity", desc: "Upholding the inherent worth and self-respect of every survivor and family we serve." },
              { icon: Sparkles, title: "Integrity", desc: "Operating with unwavering honesty, transparency, and accountability in all our endeavors." }
            ].map((item, index) => (
              <FadeIn key={item.title} direction="up" delay={0.2 * (index + 1)} className="h-full">
                <HoverCard className="h-full">
                  <Card className="bg-navy-600 border-gold-800 p-6 h-full">
                    <div className="w-12 h-12 rounded-lg bg-gold-600/20 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-gold-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                    <p className="text-gray-400 text-sm">
                      {item.desc}
                    </p>
                  </Card>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-navy-600">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Programs & Services
                <div className="w-20 h-1 bg-gold-600 mx-auto mt-4" />
              </h2>
              <p className="text-gray-400 text-lg">Comprehensive support across four pillars of care</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, title: "Medical Support", desc: "Assisting with long-term medical monitoring, treatment of secondary conditions, and accessibility to specialized care providers." },
              { icon: Brain, title: "Psychological Care", desc: "Providing ongoing access to therapy, counseling, and support groups to address trauma, anxiety, and learning difficulties associated with survivorship." },
              { icon: GraduationCap, title: "Educational Assistance", desc: "Offering tutoring, specialized learning materials, and advocacy within educational institutions to help survivors catch up and excel academically." },
              { icon: Users, title: "Social Integration", desc: "Creating community events, skill-building workshops, and mentorship opportunities to foster social confidence and independence." }
            ].map((item, index) => (
              <FadeIn key={item.title} direction="up" delay={0.1 * (index + 1)} className="h-full">
                <HoverCard className="h-full">
                  <Card className="bg-navy-primary border-gold-800 p-6 hover:border-gold-600 transition-colors h-full">
                    <div className="w-12 h-12 rounded-lg bg-gold-600/20 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-gold-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm">
                      {item.desc}
                    </p>
                  </Card>
                </HoverCard>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.6}>
            <div className="text-center mt-8">
              <Button asChild variant="outline" className="bg-transparent border-gold-600 text-gold-600 hover:bg-white hover:text-navy-primary transition-all hover:scale-105">
                <Link to="/programs">Learn More About Our Programs</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team Section */}
      <ActiveTeams />

      {/* Competition Section */}
      <section className="py-20 bg-navy-600">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <HoverCard scale={1.01}>
              <Card className="bg-navy-primary border-2 border-gold-600 p-8 md:p-12">
                <div className="inline-block px-4 py-2 bg-gold-600/20 border border-gold-600 rounded-full mb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold-600" />
                    <span className="text-gold-600 text-sm font-semibold">Exclusive Fundraising Event</span>
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Win Big, Support Lives
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                  Enter our exclusive giveaway and stand a chance to win amazing prizes while
                  supporting the Sello Saka Foundation's mission to empower childhood cancer
                  survivors.
                </p>
                <Button asChild size="lg" className="bg-gold-600 hover:bg-gold-400 text-navy-primary transition-transform hover:scale-105">
                  <Link to="/competition">View Competition Details</Link>
                </Button>
              </Card>
            </HoverCard>
          </FadeIn>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-navy-primary">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Impact Stories
                <div className="w-20 h-1 bg-gold-600 mx-auto mt-4" />
              </h2>
              <p className="text-gray-400 text-lg">Real stories of resilience, recovery, and hope</p>
            </div>
          </FadeIn>

          <ActiveImpactStories variant="grid" limit={3} />

          <FadeIn direction="up" delay={0.4}>
            <div className="text-center mt-8">
              <Button asChild variant="outline" className="bg-transparent border-gold-600 text-gold-600 hover:bg-white hover:text-navy-primary transition-all hover:scale-105">
                <Link to="/impact">Read More Stories</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
