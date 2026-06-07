"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, Users, Briefcase, Award, ArrowRight, ExternalLink, Target, CheckCircle2, Mail, Sparkles } from "lucide-react"
import Link from "next/link"

export default function GetInvolvedPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const ways = [
    {
      icon: Heart,
      title: "Donate",
      description: "Your financial contribution directly supports our programs, scholarships, and initiatives. Every gift creates ripples of impact across communities.",
      color: "from-accent to-orange-600",
      action: "Donate Now",
      href: "/donate",
      isExternal: false,
      image: "/images/54801890910_ec608683d0_c.jpg"
    },
    {
      icon: Users,
      title: "Volunteer Your Time",
      description: "Share your skills and passion. Whether mentoring, facilitating workshops, or supporting logistics, your time is invaluable to our mission.",
      color: "from-primary to-primary/80",
      action: "Become a Volunteer",
      href: "https://forms.gle/Zx8sV6yx3J8JcnmPA",
      isExternal: true,
      image: "/images/54802001320_7c8a3732af_c.jpg"
    },
    {
      icon: Briefcase,
      title: "Partner With Us",
      description: "Organizations can partner with SAFWGS on community projects, CSR initiatives, or strategic policy advocacy to drive systemic change.",
      color: "from-secondary to-secondary/80",
      action: "Explore Partnerships",
      href: "mailto:info@safwgs.org",
      isEmail: true,
      image: "/images/54983291007_78deae8ace_k.jpg"
    },
    {
      icon: Award,
      title: "Mentor Young Women",
      description: "Guide young women through their professional and personal growth journey. Share your experience to help shape the leaders of tomorrow.",
      color: "from-primary to-secondary",
      action: "Email to Mentor",
      href: "mailto:info@safwgs.org",
      isEmail: true,
      image: "/images/54801049149_23225d426e_c.jpg"
    },
  ]

  const reasons = [
    { title: "Direct Impact", description: "Your support directly funds programs that empower women and girls." },
    { title: "Sustainable Change", description: "We focus on long-term solutions that address root causes of inequality." },
    { title: "Community-Driven", description: "Our work is rooted in the communities we serve. We listen and adapt." },
    { title: "Proven Results", description: "Measurable impact from tech graduates to policy influencers." },
    { title: "Global Reach", description: "Expanded impact across West Africa and connected globally." },
    { title: "Multiplier Effect", description: "Empowered women become mentors, creating a ripple effect." },
  ]

  return (
    <>
      <Navigation />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-secondary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6 text-white">
            <Heart size={18} />
            <span className="text-sm font-semibold">Join the Movement</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-white">Get Involved</h1>
          <p className="text-xl opacity-90 text-white/90">Together, we can transform futures.</p>
        </div>
      </section>

      {/* Intro Section - Side by Side Layout */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary">
                  <Target size={18} />
                  <span className="text-sm font-semibold">Be the Change</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground">Join Our Mission for Gender Equality</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  There are many ways to join the SAFWGS movement and support our mission. Whether through volunteering your time, making a donation, or partnering with us, every action counts.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Let's build a future where women and girls rise and thrive. Your involvement—no matter how small—creates
                  ripples of change that transform communities.
                </p>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
                <img
                  src="/images/saf1.jpg"
                  alt="Get Involved"
                  className="relative w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved - side-by-side modules */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full text-accent mb-6">
              <Sparkles size={18} />
              <span className="text-sm font-semibold">Ways to Contribute</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground">Choose How You Want to Help</h2>
          </div>

          <div className="space-y-32">
            {ways.map((way, index) => {
              const Icon = way.icon
              const isEven = index % 2 === 0
              return (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div className={`space-y-8 ${isEven ? 'order-1' : 'order-1 md:order-2'} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <div className="space-y-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${way.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                        <Icon size={32} />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground">{way.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{way.description}</p>

                      {way.isEmail ? (
                        <a href={way.href} className="inline-block">
                          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl font-bold group shadow-xl transition-all">
                            {way.action} <Mail className="ml-2 group-hover:scale-110 transition-transform" size={20} />
                          </Button>
                        </a>
                      ) : (
                        <Link href={way.href} target={way.isExternal ? "_blank" : undefined} rel={way.isExternal ? "noopener noreferrer" : undefined}>
                          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl font-bold group shadow-xl transition-all">
                            {way.action} {way.isExternal ? <ExternalLink className="ml-2" size={20} /> : <ArrowRight className="ml-2 group-hover/btn:translate-x-1" size={20} />}
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className={`${isEven ? 'order-2' : 'order-2 md:order-1'} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <div className="relative">
                      <div className={`absolute -inset-4 bg-gradient-to-r ${way.color} opacity-20 rounded-3xl blur-xl`}></div>
                      <img
                        src={way.image}
                        alt={way.title}
                        className="relative w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Support SAFWGS - Standardized side by side */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`order-2 md:order-1 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/54802001320_7c8a3732af_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg" />
                <img src="/images/54801292640_5c030da0df_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg mt-8" />
                <img src="/images/54983191425_a679dd074b_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg -mt-4" />
                <img src="/images/54801049149_23225d426e_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg mt-4" />
              </div>
            </div>
            <div className={`order-1 md:order-2 space-y-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full text-secondary">
                <CheckCircle2 size={18} />
                <span className="text-sm font-semibold">Why Support Us</span>
              </div>
              <h3 className="text-3xl font-bold text-foreground md:text-4xl">Why Your Support Matters</h3>
              <div className="space-y-4">
                {reasons.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-muted rounded-lg hover:shadow-md transition-all hover:-translate-y-1">
                    <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                    <div>
                      <span className="font-bold text-foreground">{item.title}: </span>
                      <span className="text-muted-foreground">{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
