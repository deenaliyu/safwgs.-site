"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Target, Heart, Users, Lightbulb, Calendar, Sparkles, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const programThrusts = [
    {
      icon: Lightbulb,
      title: "Education & Skills",
      description: "Equipping women and girls with digital skills, leadership training, and mentorship to succeed in the modern economy.",
      color: "from-primary to-primary/80"
    },
    {
      icon: Heart,
      title: "Health & Wellbeing",
      description: "Addressing physical health, mental wellness, and social support systems for holistic growth and sustainable living.",
      color: "from-secondary to-secondary/80"
    },
    {
      icon: Users,
      title: "Civic Participation",
      description: "Building capacity for women to participate meaningfully in democratic processes and policy decision-making.",
      color: "from-accent to-orange-600"
    },
  ]

  const milestones = [
    { date: "March 8, 2021", title: "SAFWGS Founded", description: "SAFWGS is founded to promote gender equality and empower women and girls in Niger State.", image: "/images/54801890910_ec608683d0_c.jpg" },
    { date: "March 22, 2022", title: "Girl Code Launches", description: "First Girl Code Bootcamp trains young women in coding and digital skills.", image: "/images/54983191425_a679dd074b_c.jpg" },
    { date: "July 20, 2024", title: "Kallabi Fellowship", description: "Develops a new generation of young women leaders and civic actors.", image: "/images/54801049149_23225d426e_c.jpg" },
    { date: "April 7, 2025", title: "Bootcamp Season 4", description: "Successfully completed, growing the community of girls in tech.", image: "/images/54983289547_6fc33843db_c.jpg" },
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
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
            <Target className="text-accent" size={18} />
            <span className="text-sm font-semibold text-white">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">About SAFWGS</h1>
          <p className="text-xl opacity-90">Our journey of empowerment, advocacy, and transformative change in the heart of Niger State.</p>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Target className="text-primary" size={18} />
                  <span className="text-sm font-semibold text-primary">Our Mission</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground">Equipping Every Girl With Opportunity</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Salma Attah Foundation for Women and Girls Support (SAFWGS) is a nonprofit organization driven by the
                  mission to uplift women and girls in Nigeria and beyond. We focus on equipping them with skills,
                  knowledge, and opportunities to actively participate in societal development.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded on a conviction that no one should be left behind, SAFWGS grew from grassroots roots
                  into a dynamic force for gender equity and social reform.
                </p>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
                <img src="/images/saf1.jpg" alt="SAFWGS Community" className="relative w-full h-auto rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-32">
            <div className={`order-2 md:order-1 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/54802001320_7c8a3732af_c.jpg" alt="Impact" className="w-full h-48 object-cover rounded-xl shadow-lg" />
                <img src="/images/54801292640_5c030da0df_c.jpg" alt="Training" className="w-full h-48 object-cover rounded-xl shadow-lg mt-8" />
                <img src="/images/54983191425_a679dd074b_c.jpg" alt="Bootcamp" className="w-full h-48 object-cover rounded-xl shadow-lg -mt-4" />
                <img src="/images/54801049149_23225d426e_c.jpg" alt="Leadership" className="w-full h-48 object-cover rounded-xl shadow-lg mt-4" />
              </div>
            </div>
            <div className={`order-1 md:order-2 space-y-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <Sparkles className="text-secondary" size={18} />
                <span className="text-sm font-semibold text-secondary">Our Approach</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground">Holistic Empowerment</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that gender equality and women's empowerment require a holistic approach addressing
                education, health, civic participation, and advocacy. Our work cuts across communities and lives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By combining technical skills with leadership training and civic participation, we create pathways for
                women and girls to thrive as independent leaders and change-makers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Thrust - Redesigned as Premium Side-by-Side */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary">
                  <TrendingUp size={18} />
                  <span className="text-sm font-semibold">Our Portfolio</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground">Our Program Thrust</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We deliver high-impact programs designed to break cycles of poverty and inequality. Our thrust focuses on
                  transformational education and systemic civic engagement.
                </p>
              </div>
              <div className="space-y-4">
                {programThrusts.map((thrust, index) => {
                  const Icon = thrust.icon
                  return (
                    <div key={index} className="flex items-center gap-6 p-6 bg-background rounded-2xl border-2 border-border hover:border-primary transition-all group shadow-sm hover:shadow-xl hover:-translate-y-1">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${thrust.color} flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{thrust.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">{thrust.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
                <img src="/images/54828597309_097b82ea3d_c.jpg" alt="Impact Portfolio" className="relative w-full h-auto rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey (Timeline) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 text-primary">
              <Calendar size={18} />
              <span className="text-sm font-semibold">Evolution</span>
            </div>
            <h2 className="text-4xl font-bold">Trace Our Journey</h2>
          </div>
          <div className="space-y-6 relative before:absolute before:left-6 md:before:left-1/2 before:top-4 before:bottom-4 before:w-1 before:bg-primary/10 before:hidden md:before:block">
            {milestones.map((m, i) => (
              <div key={i} className={`flex flex-col md:flex-row gap-8 p-6 bg-muted rounded-2xl border border-border hover:border-primary hover:shadow-xl transition-all duration-500 group relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="md:w-64 h-40 md:h-40 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={m.image} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2 text-primary">
                    <Calendar size={18} />
                    <p className="text-sm font-bold uppercase tracking-wider">{m.date}</p>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{m.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{m.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow-lg ring-4 ring-background">{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
