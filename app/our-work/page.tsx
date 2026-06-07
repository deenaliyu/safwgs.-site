"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { ArrowRight, ExternalLink, Image as ImageIcon, Target, Lightbulb, Users, Sparkles, Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OurWorkPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const areas = [
    { slug: "advocacy", title: "Advocacy", subtitle: "Driving Change. Shaping Policy.", description: "We advocate for laws, policies, and social change that protect and empower women and girls.", image: "/images/54800663642_0705bc7722_c.jpg" },
    { slug: "civic-participation", title: "Civic Participation", subtitle: "Raising Voices. Building Leaders.", description: "We ensure women and girls can participate meaningfully in democratic processes.", image: "/images/54801209263_e0e33fd4b8_c.jpg" },
    { slug: "education", title: "Education", subtitle: "Investing in Knowledge.", description: "We equip women and girls with knowledge, skills, and networks to thrive.", image: "/images/54801053243_367a78bf08_c.jpg" },
  ]

  const impactFramework = [
    { title: "Community Dialogues", description: "Changing harmful narratives through community conversations.", images: ["/images/54801890910_ec608683d0_c.jpg", "/images/54802001320_7c8a3732af_c.jpg", "/images/54801292640_5c030da0df_c.jpg"], color: "from-primary to-primary/80" },
    { title: "Bootcamps & Training", description: "Equipping women with digital skills and leadership training.", images: ["/images/54983191425_a679dd074b_c.jpg", "/images/54983289547_6fc33843db_c.jpg", "/images/54984019574_c32e1f929c_c.jpg"], color: "from-secondary to-secondary/80" },
    { title: "Policy Advocacy", description: "Engaging lawmakers to reform laws and protect women's rights.", images: ["/images/54828210466_e1d99a895d_c.jpg", "/images/54828475723_9624c92410_c.jpg", "/images/54828597309_097b82ea3d_c.jpg"], color: "from-accent to-orange-600" },
    { title: "Youth Leadership", description: "Cultivating next-gen women leaders through mentorship.", images: ["/images/54801049149_23225d426e_c.jpg", "/images/54800702757_c39c020d9d_c.jpg", "/images/54801208558_f2c4e43f9c_c.jpg"], color: "from-primary to-secondary" },
  ]

  return (
    <>
      <Navigation />
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-secondary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
            <Target className="text-accent" size={18} />
            <span className="text-sm font-semibold">Creating Impact</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Work</h1>
          <p className="text-xl opacity-90">How SAFWGS drives impact across communities, policies, and lives</p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Lightbulb className="text-primary" size={18} />
                <span className="text-sm font-semibold text-primary">Our Approach</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground">Transforming Lives Through Integrated Action</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">SAFWGS's work cuts across communities, policies, and lives. We believe lasting change comes from addressing multiple dimensions simultaneously.</p>
              <p className="text-lg text-muted-foreground leading-relaxed">From digital skills bootcamps to leadership fellowships, our programs create pathways for women and girls to thrive.</p>
            </div>
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
                <img src="/images/saf1.jpg" alt="Work" className="relative w-full h-auto rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-32">
            <div className={`order-2 md:order-1 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/54801890910_ec608683d0_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg" />
                <img src="/images/54983191425_a679dd074b_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg mt-8" />
                <img src="/images/54828210466_e1d99a895d_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg -mt-4" />
                <img src="/images/54801049149_23225d426e_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg mt-4" />
              </div>
            </div>
            <div className={`order-1 md:order-2 space-y-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <Users className="text-secondary" size={18} />
                <span className="text-sm font-semibold text-secondary">Program Areas</span>
              </div>
              <h3 className="text-3xl font-bold text-foreground">Three Focus Pillars</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">Our work spans advocacy, civic participation, and education—interconnected pillars that together create sustainable change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Areas Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full text-accent mb-6">
            <Sparkles size={18} />
            <span className="text-sm font-semibold">Our Portfolio</span>
          </div>
          <h2 className="text-4xl font-bold">Standardized Program Thrust</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {areas.map((area, index) => (
            <Link key={index} href={`/our-work/${area.slug}`}>
              <Card className={`overflow-hidden bg-background border-2 hover:shadow-2xl hover:border-primary transition-all duration-500 h-full flex flex-col group hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="h-64 overflow-hidden relative">
                  <img src={area.image} alt={area.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{area.title}</h3>
                  <p className="text-primary font-bold text-xs mb-4 uppercase tracking-widest">{area.subtitle}</p>
                  <p className="text-muted-foreground mb-6 flex-grow">{area.description}</p>
                  <div className="pt-4 border-t border-border flex items-center text-primary font-bold group-hover:text-accent transition-colors">Explore Area <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} /></div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Impact Framework */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary mb-6">
              <Target size={18} />
              <span className="text-sm font-semibold">Evidence of Change</span>
            </div>
            <h2 className="text-4xl font-bold">Our Impact Framework</h2>
          </div>
          <div className="space-y-6">
            {impactFramework.map((item, index) => (
              <div key={index}>
                <div onClick={() => setSelectedProgram(selectedProgram === index ? null : index)} className={`bg-muted p-6 rounded-xl border-2 cursor-pointer transition-all duration-500 hover:shadow-xl ${selectedProgram === index ? 'border-primary shadow-lg' : 'border-border hover:border-primary/50'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-12 rounded-full bg-gradient-to-b ${item.color}`}></div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1 flex items-center gap-2">{item.title}<span className="inline-flex items-center gap-1 text-xs font-normal text-muted-foreground bg-background px-2 py-1 rounded-full"><ImageIcon size={12} />{item.images.length} photos</span></h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <ArrowRight className={`text-primary transition-transform duration-300 flex-shrink-0 ${selectedProgram === index ? 'rotate-90' : ''}`} size={24} />
                  </div>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden transition-all duration-500 ${selectedProgram === index ? 'max-h-[500px] opacity-100 mt-4 py-4' : 'max-h-0 opacity-0'}`}>
                  {item.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="relative group overflow-hidden rounded-xl shadow-lg">
                      <img src={image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"><span className="text-white text-sm font-medium">{item.title}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Standardized) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Heart className="mx-auto mb-8 text-accent animate-pulse" size={56} />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Support Our Ongoing Work</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved"><Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg py-7 px-8">Get Involved <ArrowRight className="ml-2" /></Button></Link>
            <Link href="/donate"><Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent font-bold text-lg py-7 px-8">Donate Now</Button></Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
