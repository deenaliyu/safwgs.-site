"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Sparkles, TrendingUp, Target, Megaphone, Lightbulb, Landmark } from "lucide-react"
import Link from "next/link"

export default function CivicParticipationPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <Navigation />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-secondary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6 text-white text-xs font-black uppercase tracking-widest">
            <Users size={14} />
            Our Program Pillars
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-balance text-white leading-tight">Civic <span className="text-accent underline decoration-white/20 underline-offset-8">Participation</span></h1>
          <p className="text-xl md:text-2xl font-medium text-white/90 max-w-2xl mx-auto leading-relaxed">Raising Voices. Building Leaders. Fostering democratic engagement for women.</p>

          {/* Secondary Semi-Nav */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shadow-2xl">
              <Link href="/our-work/civic-participation">
                <button className="px-8 py-3 rounded-xl text-sm font-black uppercase tracking-wider transition-all bg-white text-primary shadow-lg">
                  Overview
                </button>
              </Link>
              <Link href="/our-work/civic-participation/kallabi">
                <button className="px-8 py-3 rounded-xl text-sm font-black uppercase tracking-wider transition-all text-white hover:bg-white/10">
                  Kallabi Fellowship
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section Style - Side by Side */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Target className="text-primary" size={18} />
                  <span className="text-sm font-semibold text-primary">Democratic Empowerment</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground">Leading the Change from Within</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We ensure women and girls can participate meaningfully in democratic processes and community
                  governance. Our programs build the confidence and capacity needed to influence decisions that
                  impact their lives.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From town hall meetings to leadership fellowships, we create platforms for women's voices to
                  be heard and respected in political and social spheres.
                </p>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
                <img src="/images/54801209263_e0e33fd4b8_c.jpg" alt="Civic Engagement" className="relative w-full h-auto rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-32">
            <div className={`order-2 md:order-1 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/54802001320_7c8a3732af_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg" />
                <img src="/images/54801292640_5c030da0df_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg mt-8" />
                <img src="/images/54983289547_6fc33843db_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg -mt-4" />
                <img src="/images/54801049149_23225d426e_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg mt-4" />
              </div>
            </div>
            <div className={`order-1 md:order-2 space-y-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <Sparkles className="text-secondary" size={18} />
                <span className="text-sm font-semibold text-secondary">Our impact</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground">Strategic Leadership Development</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We focus on developing the next generation of civic actors through mentorship and practical
                governance training. Our flagship program, the <span className="text-primary font-bold">Kallabi Leadership Fellowship</span>, is at the forefront of this mission.
              </p>

              <div className="bg-primary/5 p-8 rounded-[2rem] border-2 border-primary/20 shadow-sm relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-primary mb-4">Kallabi Leadership Fellowship</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    The first structured, legislative-focused leadership program for young women in Niger State.
                    Direct internships, policy drafting, and simulated assemblies.
                  </p>
                  <Link href="/our-work/civic-participation/kallabi">
                    <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl group/btn">
                      View Fellowship Details <ArrowRight className="ml-2 group-hover/btn:translate-x-1" size={18} />
                    </Button>
                  </Link>
                </div>
                <Landmark className="absolute -bottom-6 -right-6 text-primary/10 w-32 h-32 group-hover:scale-110 transition-transform" />
              </div>

              <ul className="space-y-4 pt-4">
                {[
                  { title: "Voter Education", text: "Empowering women with information to exercise their voting rights." },
                  { title: "Community Governance", text: "Enabling participation in local decision-making committees." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 p-4 bg-muted rounded-xl hover:shadow-md transition-all">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0 font-bold text-xs">{i + 2}</div>
                    <div>
                      <p className="font-bold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pillars */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary mb-6">
              <TrendingUp size={18} />
              <span className="text-sm font-semibold">Related Pillars</span>
            </div>
            <h2 className="text-4xl font-bold">Explore Our Other Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/our-work/advocacy" className="group">
              <div className="p-8 bg-background border-2 border-border hover:border-primary rounded-2xl transition-all hover:shadow-xl hover:-translate-y-1 h-full">
                <Megaphone className="text-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Advocacy</h3>
                <p className="text-muted-foreground">Driving change through policy advocacy and amplifying voices.</p>
                <div className="mt-4 flex items-center text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">Learn More <ArrowRight className="ml-2" /></div>
              </div>
            </Link>
            <Link href="/our-work/education" className="group">
              <div className="p-8 bg-background border-2 border-border hover:border-primary rounded-2xl transition-all hover:shadow-xl hover:-translate-y-1 h-full">
                <Lightbulb className="text-secondary mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">Education</h3>
                <p className="text-muted-foreground">Equipping women with knowledge, skills, and networks.</p>
                <div className="mt-4 flex items-center text-secondary font-bold opacity-0 group-hover:opacity-100 transition-opacity">Learn More <ArrowRight className="ml-2" /></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
