import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import impact1 from "@/assets/impact-1.jpg";
import impact2 from "@/assets/impact-2.jpg";
import impact3 from "@/assets/impact-3.jpg";

const Impact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-navy-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Impact Stories</h1>
          <div className="w-20 h-1 bg-gold-600 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real stories of resilience, recovery, and hope
          </p>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Story 1 */}
            <Card className="overflow-hidden border-2 border-navy-600">
              <div className="grid md:grid-cols-2">
                <img src={impact1} alt="Liyema's Story" className="w-full h-full object-cover" />
                <div className="p-8 md:p-12">
                  <div className="inline-block px-4 py-1 bg-gold-600/10 border border-gold-600 rounded-full mb-4">
                    <span className="text-gold-600 text-sm font-semibold">Educational Success</span>
                  </div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-4">
                    A Second Chance at Education
                  </h2>
                  <p className="text-gray-600 mb-6">
                    After treatment, 12-year-old Liyema struggled with cognitive late effects. Our
                    Educational Assistance Program provided the breakthrough tutoring she needed. Today,
                    she's not just keeping up with her peers—she's excelling.
                  </p>
                  <div className="bg-beige-200 border-l-4 border-gold-600 p-6">
                    <div className="flex gap-2 mb-3">
                      <Quote className="w-5 h-5 text-gold-600" />
                    </div>
                    <p className="text-gray-700 italic mb-3">
                      "The foundation didn't just help Liyema catch up; they restored her confidence.
                      She loves school again, and that is a miracle."
                    </p>
                    <p className="text-gold-600 font-semibold">— Liyema's Mother, Zola</p>
                  </div>
                  <div className="mt-6 p-4 bg-navy-primary/5 rounded-lg">
                    <p className="text-sm text-navy-primary">
                      <strong>Impact:</strong> Liyema received 18 months of specialized tutoring and
                      now ranks in the top 10% of her class.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Story 2 */}
            <Card className="overflow-hidden border-2 border-navy-600">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 order-2 md:order-1">
                  <div className="inline-block px-4 py-1 bg-gold-600/10 border border-gold-600 rounded-full mb-4">
                    <span className="text-gold-600 text-sm font-semibold">Social Integration</span>
                  </div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-4">
                    Finding Confidence After the Fight
                  </h2>
                  <p className="text-gray-600 mb-6">
                    The social isolation after remission left Sipho struggling. Through the Social
                    Integration program, he found peers and mentors who understood his journey. The
                    workshops and community events helped him rediscover his voice.
                  </p>
                  <div className="bg-beige-200 border-l-4 border-gold-600 p-6">
                    <div className="flex gap-2 mb-3">
                      <Quote className="w-5 h-5 text-gold-600" />
                    </div>
                    <p className="text-gray-700 italic mb-3">
                      "I felt like no one understood what I went through, until I met the Sello Saka team.
                      Now I know I'm not fighting alone."
                    </p>
                    <p className="text-gold-600 font-semibold">— Sipho D., Age 16</p>
                  </div>
                  <div className="mt-6 p-4 bg-navy-primary/5 rounded-lg">
                    <p className="text-sm text-navy-primary">
                      <strong>Impact:</strong> Sipho now mentors younger survivors and has become
                      a peer leader in his community.
                    </p>
                  </div>
                </div>
                <img src={impact2} alt="Sipho's Story" className="w-full h-full object-cover order-1 md:order-2" />
              </div>
            </Card>

            {/* Story 3 */}
            <Card className="overflow-hidden border-2 border-navy-600">
              <div className="grid md:grid-cols-2">
                <img src={impact3} alt="Lebogang's Story" className="w-full h-full object-cover" />
                <div className="p-8 md:p-12">
                  <div className="inline-block px-4 py-1 bg-gold-600/10 border border-gold-600 rounded-full mb-4">
                    <span className="text-gold-600 text-sm font-semibold">Medical Support</span>
                  </div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-4">
                    Navigating Long-Term Health
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Lebogang, a young adult survivor, receives continuous Medical Support for late-onset
                    heart complications. Our medical liaison team ensures she receives specialized
                    cardiology care and helps coordinate her complex treatment schedule.
                  </p>
                  <div className="bg-beige-200 border-l-4 border-gold-600 p-6">
                    <div className="flex gap-2 mb-3">
                      <Quote className="w-5 h-5 text-gold-600" />
                    </div>
                    <p className="text-gray-700 italic mb-3">
                      "Their medical liaison service is invaluable. They help me manage complex care,
                      letting me focus on living my life, not just managing my illness."
                    </p>
                    <p className="text-gold-600 font-semibold">— Lebogang T., Age 22</p>
                  </div>
                  <div className="mt-6 p-4 bg-navy-primary/5 rounded-lg">
                    <p className="text-sm text-navy-primary">
                      <strong>Impact:</strong> Lebogang maintains stable health with regular
                      monitoring and has returned to work full-time.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-navy-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">By the Numbers</h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="bg-navy-600 border-gold-800 p-8 text-center">
              <div className="text-5xl font-bold text-gold-600 mb-2">350+</div>
              <div className="text-gray-400">Survivors Supported</div>
            </Card>
            <Card className="bg-navy-600 border-gold-800 p-8 text-center">
              <div className="text-5xl font-bold text-gold-600 mb-2">95%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </Card>
            <Card className="bg-navy-600 border-gold-800 p-8 text-center">
              <div className="text-5xl font-bold text-gold-600 mb-2">1,200+</div>
              <div className="text-gray-400">Therapy Sessions</div>
            </Card>
            <Card className="bg-navy-600 border-gold-800 p-8 text-center">
              <div className="text-5xl font-bold text-gold-600 mb-2">85%</div>
              <div className="text-gray-400">Academic Improvement</div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
