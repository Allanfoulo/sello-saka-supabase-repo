import { Link } from "react-router-dom";
import { Heart, Stethoscope, Brain, GraduationCap, Users, ChevronDown, Sparkles, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import impact1 from "@/assets/impact-1.jpg";
import impact2 from "@/assets/impact-2.jpg";
import impact3 from "@/assets/impact-3.jpg";
import { useEffect, useState } from "react";

const Home = () => {
  const [countdown, setCountdown] = useState({
    days: 29,
    hours: 2,
    minutes: 46,
    seconds: 34
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
          <div className="w-20 h-20 rounded-full bg-gold-600/20 border-2 border-gold-600 flex items-center justify-center mx-auto mb-8">
            <Heart className="w-10 h-10 text-gold-600" strokeWidth={1.5} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Empowering Childhood<br />Cancer Survivors.
          </h1>
          
          <p className="text-xl md:text-2xl text-gold-400 mb-8 max-w-3xl mx-auto">
            Restoring futures. Building resilience. Ensuring every survivor thrives.
          </p>
          
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
            The Sello Saka Foundation is dedicated to providing comprehensive,
            long-term support for survivors of early childhood cancer,
            addressing late effects and promoting holistic recovery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold-600 hover:bg-gold-400 text-navy-primary text-lg h-14 px-8">
              <Link to="/donate">
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-2 border-gold-600 text-white hover:bg-gold-600/10 text-lg h-14 px-8"
            >
              <Link to="/apply">
                Apply for Assistance
              </Link>
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gold-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-navy-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Our Foundation
              <div className="w-20 h-1 bg-gold-600 mx-auto mt-4" />
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-navy-600 border-gold-800 p-8">
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

            <Card className="bg-navy-600 border-gold-800 p-8">
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
          </div>

          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-8">Our Core Values</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-navy-600 border-gold-800 p-6">
              <div className="w-12 h-12 rounded-lg bg-gold-600/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-gold-600" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Compassion</h4>
              <p className="text-gray-400 text-sm">
                Centering empathy and kindness in every interaction, service, and policy.
              </p>
            </Card>

            <Card className="bg-navy-600 border-gold-800 p-6">
              <div className="w-12 h-12 rounded-lg bg-gold-600/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-gold-600" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Dignity</h4>
              <p className="text-gray-400 text-sm">
                Upholding the inherent worth and self-respect of every survivor and family we serve.
              </p>
            </Card>

            <Card className="bg-navy-600 border-gold-800 p-6">
              <div className="w-12 h-12 rounded-lg bg-gold-600/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-gold-600" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Integrity</h4>
              <p className="text-gray-400 text-sm">
                Operating with unwavering honesty, transparency, and accountability in all our endeavors.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-navy-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Programs & Services
              <div className="w-20 h-1 bg-gold-600 mx-auto mt-4" />
            </h2>
            <p className="text-gray-400 text-lg">Comprehensive support across four pillars of care</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-navy-primary border-gold-800 p-6 hover:border-gold-600 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gold-600/20 flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Medical Support</h3>
              <p className="text-gray-400 text-sm">
                Assisting with long-term medical monitoring, treatment of secondary
                conditions, and accessibility to specialized care providers.
              </p>
            </Card>

            <Card className="bg-navy-primary border-gold-800 p-6 hover:border-gold-600 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gold-600/20 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Psychological Care</h3>
              <p className="text-gray-400 text-sm">
                Providing ongoing access to therapy, counseling, and support
                groups to address trauma, anxiety, and learning difficulties associated
                with survivorship.
              </p>
            </Card>

            <Card className="bg-navy-primary border-gold-800 p-6 hover:border-gold-600 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gold-600/20 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Educational Assistance</h3>
              <p className="text-gray-400 text-sm">
                Offering tutoring, specialized learning materials, and advocacy
                within educational institutions to help survivors catch up and excel
                academically.
              </p>
            </Card>

            <Card className="bg-navy-primary border-gold-800 p-6 hover:border-gold-600 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gold-600/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Social Integration</h3>
              <p className="text-gray-400 text-sm">
                Creating community events, skill-building workshops, and mentorship
                opportunities to foster social confidence and independence.
              </p>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-gold-600 text-white hover:bg-gold-600/10">
              <Link to="/programs">Learn More About Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-navy-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Leadership Team
              <div className="w-20 h-1 bg-gold-600 mx-auto mt-4" />
            </h2>
            <p className="text-gray-400 text-lg">Dedicated professionals committed to transforming lives</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-navy-600 border-gold-800 overflow-hidden">
              <img src={team1} alt="Dr. Elara Nkala" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Dr. Elara Nkala</h3>
                <p className="text-gold-600 text-sm mb-3">Chief Executive Officer</p>
                <p className="text-gray-400 text-sm mb-4">
                  Dr. Nkala brings decades of experience in public health and non-profit strategy, leading the foundation's strategic growth and impact.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-gold-600 hover:text-gold-400">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gold-600 hover:text-gold-400">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card>

            <Card className="bg-navy-600 border-gold-800 overflow-hidden">
              <img src={team2} alt="Mr. Thabo Sello" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Mr. Thabo Sello</h3>
                <p className="text-gold-600 text-sm mb-3">Co-Founder and Director of Strategy</p>
                <p className="text-gray-400 text-sm mb-4">
                  A childhood cancer survivor himself, Thabo dedicated his life to ensuring comprehensive support systems exist for the next generation of survivors.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-gold-600 hover:text-gold-400">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gold-600 hover:text-gold-400">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card>

            <Card className="bg-navy-600 border-gold-800 overflow-hidden">
              <img src={team3} alt="Ms. Lerato Khumalo" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Ms. Lerato Khumalo</h3>
                <p className="text-gold-600 text-sm mb-3">Head of Survivor Services</p>
                <p className="text-gray-400 text-sm mb-4">
                  Lerato oversees all program delivery, ensuring every beneficiary receives personalized, high-quality assistance tailored to their needs.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-gold-600 hover:text-gold-400">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gold-600 hover:text-gold-400">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card>

            <Card className="bg-navy-600 border-gold-800 overflow-hidden">
              <img src={team4} alt="Mr. Jide Ogunleye" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Mr. Jide Ogunleye</h3>
                <p className="text-gold-600 text-sm mb-3">CFO and Treasurer</p>
                <p className="text-gray-400 text-sm mb-4">
                  Jide rigorously manages the foundation's finances and compliance, ensuring donor funds are utilized efficiently and transparently.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-gold-600 hover:text-gold-400">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gold-600 hover:text-gold-400">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Competition Section */}
      <section className="py-20 bg-navy-600">
        <div className="container mx-auto px-4">
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
            <Button asChild size="lg" className="bg-gold-600 hover:bg-gold-400 text-navy-primary">
              <Link to="/competition">View Competition Details</Link>
            </Button>
          </Card>

          <Card className="bg-navy-primary/50 border-gold-800 p-8 mt-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Time Remaining</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-navy-primary rounded-lg p-6 text-center border border-gold-800">
                <div className="text-4xl font-bold text-gold-600 mb-2">{String(countdown.days).padStart(2, '0')}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Days</div>
              </div>
              <div className="bg-navy-primary rounded-lg p-6 text-center border border-gold-800">
                <div className="text-4xl font-bold text-gold-600 mb-2">{String(countdown.hours).padStart(2, '0')}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Hours</div>
              </div>
              <div className="bg-navy-primary rounded-lg p-6 text-center border border-gold-800">
                <div className="text-4xl font-bold text-gold-600 mb-2">{String(countdown.minutes).padStart(2, '0')}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Minutes</div>
              </div>
              <div className="bg-navy-primary rounded-lg p-6 text-center border border-gold-800">
                <div className="text-4xl font-bold text-gold-600 mb-2">{String(countdown.seconds).padStart(2, '0')}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Seconds</div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-white mb-4">Don't miss out on this incredible opportunity!</p>
              <Button asChild variant="outline" className="border-gold-600 text-white hover:bg-gold-600/10">
                <Link to="/competition">Enter Now</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-navy-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Impact Stories
              <div className="w-20 h-1 bg-gold-600 mx-auto mt-4" />
            </h2>
            <p className="text-gray-400 text-lg">Real stories of resilience, recovery, and hope</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-navy-600 border-gold-800 overflow-hidden">
              <img src={impact1} alt="Impact Story 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">A Second Chance at Education</h3>
                <p className="text-gray-400 text-sm mb-4">
                  After treatment, 12-year-old Liyema struggled with cognitive late effects. Our Educational Assistance Program provided the breakthrough tutoring she needed.
                </p>
                <div className="bg-navy-primary border-l-4 border-gold-600 p-4 mb-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-gold-600 text-2xl">"</span>
                  </div>
                  <p className="text-gray-400 text-sm italic mb-2">
                    "The foundation didn't just help Liyema catch up; they restored her confidence. She loves school again, and that is a miracle."
                  </p>
                  <p className="text-gold-600 text-sm">— Liyema M.</p>
                </div>
              </div>
            </Card>

            <Card className="bg-navy-600 border-gold-800 overflow-hidden">
              <img src={impact2} alt="Impact Story 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Finding Confidence After the Fight</h3>
                <p className="text-gray-400 text-sm mb-4">
                  The social isolation after remission left Sipho struggling for Sipho. Through the Social Integration program, he found peers and mentors who understood his journey.
                </p>
                <div className="bg-navy-primary border-l-4 border-gold-600 p-4 mb-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-gold-600 text-2xl">"</span>
                  </div>
                  <p className="text-gray-400 text-sm italic mb-2">
                    "I felt like no one understood what I went through, until I met the Sello Saka team. Now I know I'm not fighting alone."
                  </p>
                  <p className="text-gold-600 text-sm">— Sipho D.</p>
                </div>
              </div>
            </Card>

            <Card className="bg-navy-600 border-gold-800 overflow-hidden">
              <img src={impact3} alt="Impact Story 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Navigating Long-Term Health</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Lebogang, a young adult survivor, receives continuous Medical Support for late-onset heart complications, ensuring she receives specialized cardiology care.
                </p>
                <div className="bg-navy-primary border-l-4 border-gold-600 p-4 mb-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-gold-600 text-2xl">"</span>
                  </div>
                  <p className="text-gray-400 text-sm italic mb-2">
                    "Their medical liaison service is invaluable. They help me manage complex care, letting me focus on living my life, not just managing my illness."
                  </p>
                  <p className="text-gold-600 text-sm">— Lebogang T.</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-gold-600 text-white hover:bg-gold-600/10">
              <Link to="/impact">Read More Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
