"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, Sparkles, TrendingUp, Target, Megaphone, Users, BookOpen } from "lucide-react"
import Link from "next/link"

export default function EducationPage() {
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
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
            <BookOpen className="text-accent" size={18} />
            <span className="text-sm font-semibold text-white">Our Program Pillars</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Education & Skills</h1>
          <p className="text-xl opacity-90">Investing in Knowledge. Equipping women and girls with tools for a digital future.</p>
        </div>
      </section>

      {/* Hero Section Style - Side by Side */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Lightbulb className="text-primary" size={18} />
                  <span className="text-sm font-semibold text-primary">Knowledge is Power</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground">Bridging the Digital & Skills Divide</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We equip women and girls with the knowledge, technical skills, and professional networks needed
                  to thrive in today's global economy. Our educational initiatives prioritize digital literacy
                  and vocational expertise.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through our award-winning bootcamps and workshops, we're not just teaching tech—we're
                  building sustainable careers and economic independence.
                </p>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
                <img src="/images/54801053243_367a78bf08_c.jpg" alt="Education" className="relative w-full h-auto rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-32">
            <div className={`order-2 md:order-1 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/54983191425_a679dd074b_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg" />
                <img src="/images/54983289547_6fc33843db_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg mt-8" />
                <img src="/images/54984019574_c32e1f929c_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg -mt-4" />
                <img src="/images/54801049149_23225d426e_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg mt-4" />
              </div>
            </div>
            <div className={`order-1 md:order-2 space-y-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <Sparkles className="text-secondary" size={18} />
                <span className="text-sm font-semibold text-secondary">Our methods</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground">Transformative Learning Experiences</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our curriculum is designed for impact. We combine rigorous technical training with mentorship
                and soft skills development to create well-rounded professionals.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  { title: "Girl Code Bootcamp", text: "Intensive training in web development, data, and digital marketing." },
                  { title: "Vocational Workshops", text: "Practical skills training for community-based economic empowerment." },
                  { title: "Mentorship Networks", text: "Connecting students with industry professionals for career guidance." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 p-4 bg-muted rounded-xl hover:shadow-md transition-all">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white shrink-0 font-bold text-xs">{i + 1}</div>
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
            <Link href="/our-work/civic-participation" className="group">
              <div className="p-8 bg-background border-2 border-border hover:border-primary rounded-2xl transition-all hover:shadow-xl hover:-translate-y-1 h-full">
                <Users className="text-secondary mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">Civic Participation</h3>
                <p className="text-muted-foreground">Building women leaders and fostering democratic engagement.</p>
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
