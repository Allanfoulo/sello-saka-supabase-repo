import { Heart, Target, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-navy-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Our Foundation</h1>
          <div className="w-20 h-1 bg-gold-600 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dedicated to restoring hope and building brighter futures for childhood cancer survivors
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy-primary mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                The Sello Saka Foundation was born from a deeply personal journey. Our co-founder, Thabo Sello,
                survived early childhood cancer but faced years of challenges that extended far beyond his medical
                treatment. The late effects—cognitive difficulties, social isolation, and ongoing health
                complications—revealed a significant gap in support systems for survivors.
              </p>
              <p className="text-gray-600 mb-6">
                Recognizing that surviving cancer is just the beginning of a much longer journey, Thabo partnered
                with healthcare professionals, educators, and fellow survivors to establish a foundation that addresses
                the holistic, long-term needs of childhood cancer survivors.
              </p>
              <p className="text-gray-600">
                Today, the Sello Saka Foundation stands as a beacon of hope, providing comprehensive medical,
                psychological, educational, and social support to ensure that every survivor not only survives but thrives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-navy-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-navy-600 border-gold-800 p-10">
              <div className="w-16 h-16 rounded-full bg-gold-600/20 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                A world where every survivor of early childhood cancer thrives, realizing their full potential
                free from the lasting constraints of their diagnosis and treatment journey.
              </p>
            </Card>

            <Card className="bg-navy-600 border-gold-800 p-10">
              <div className="w-16 h-16 rounded-full bg-gold-600/20 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To provide holistic, sustained support—medical, psychological, educational, and social—to
                children and families navigating the long-term effects of early childhood cancer, ensuring
                dignity and a pathway to success.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy-primary mb-4 text-center">Our Core Values</h2>
          <div className="w-20 h-1 bg-gold-600 mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-navy-600 p-8 hover:border-gold-600 transition-colors">
              <div className="w-16 h-16 rounded-full bg-gold-600/10 flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy-primary mb-4 text-center">Compassion</h3>
              <p className="text-gray-600 text-center">
                Centering empathy and kindness in every interaction, service, and policy. We lead with our
                hearts and treat every survivor and family member with the care they deserve.
              </p>
            </Card>

            <Card className="border-2 border-navy-600 p-8 hover:border-gold-600 transition-colors">
              <div className="w-16 h-16 rounded-full bg-gold-600/10 flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy-primary mb-4 text-center">Dignity</h3>
              <p className="text-gray-600 text-center">
                Upholding the inherent worth and self-respect of every survivor and family we serve. We
                empower individuals to make their own choices and maintain their autonomy.
              </p>
            </Card>

            <Card className="border-2 border-navy-600 p-8 hover:border-gold-600 transition-colors">
              <div className="w-16 h-16 rounded-full bg-gold-600/10 flex items-center justify-center mb-6 mx-auto">
                <Award className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy-primary mb-4 text-center">Integrity</h3>
              <p className="text-gray-600 text-center">
                Operating with unwavering honesty, transparency, and accountability in all our endeavors.
                We are stewards of trust and handle every responsibility with utmost care.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-navy-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-gold-600 mb-2">350+</div>
              <div className="text-gray-400">Survivors Supported</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold-600 mb-2">1,200+</div>
              <div className="text-gray-400">Therapy Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold-600 mb-2">85%</div>
              <div className="text-gray-400">Academic Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold-600 mb-2">4</div>
              <div className="text-gray-400">Core Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Constitution Alignment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy-primary mb-8 text-center">
              Constitutional Alignment
            </h2>
            <Card className="border-2 border-navy-600 p-8">
              <p className="text-gray-600 mb-6">
                The Sello Saka Foundation operates in full alignment with the South African Constitution,
                particularly Section 27, which enshrines the right to healthcare services, and Section 28,
                which protects children's rights to basic healthcare and social services.
              </p>
              <p className="text-gray-600">
                Our work embodies the constitutional promise that every child deserves the opportunity to
                reach their full potential, regardless of the challenges they have faced. We are committed
                to upholding these rights and ensuring that childhood cancer survivors receive the
                comprehensive support they need to thrive.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
