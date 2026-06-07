"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Instagram, Mail, Users, Heart, Target, ArrowRight } from "lucide-react"

export default function TeamPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const teamMembers = [
    {
      name: "Amrah Aliyu",
      role: "Team Lead",
      image: "/images/amrah.jpg",
      bio: "Visionary leader and advocate for gender equality with extensive experience in women empowerment.",
      social: { linkedin: "#", twitter: "#", instagram: "#", email: "amrah@safwgs.org" },
    },
    {
      name: "Maryam Dalhatu",
      role: "Program Manager",
      image: "/images/maryam.jpg",
      imagePosition: "center 10%",
      bio: "Specialized in curriculum development, program management, and community engagement.",
      social: { linkedin: "#", twitter: "#", instagram: "#", email: "maryam@safwgs.org" },
    },
    {
      name: "Adama Lamee Yusuf",
      role: "Creative Director",
      image: "/images/lamee.jpg",
      bio: "Creative strategist focused on innovative storytelling and community engagement.",
      social: { linkedin: "#", twitter: "#", instagram: "#", email: "adama@safwgs.org" },
    },
    {
      name: "Muhammad Alfa Muhammad",
      role: "Project Officer",
      image: "/images/muhammadalfa.jpg",
      bio: "Project management expert dedicated to delivering impactful programs.",
      social: { linkedin: "#", twitter: "#", instagram: "#", email: "muhammad@safwgs.org" },
    },
    {
      name: "Asmau Abdullahi",
      role: "Logistics Officer",
      image: "/images/asmauabdullahi.jpg",
      bio: "Operations specialist ensuring smooth execution of all SAFWGS initiatives.",
      social: { linkedin: "#", twitter: "#", instagram: "#", email: "asmau@safwgs.org" },
    },
    {
      name: "Aliyu Nurudeen",
      role: "IT and Systems Officer",
      image: "/images/WhatsAppImage2025-07-20at19.18.16_9753c522-TsrnL9TbQ6fJi--2V5MIVQ.jpg",
      bio: "Technology expert supporting SAFWGS's digital transformation and infrastructure.",
      social: { linkedin: "#", twitter: "#", instagram: "#", email: "aliyu@safwgs.org" },
    },
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
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6 text-white">
            <Users size={18} />
            <span className="text-sm font-semibold">Our People</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Meet Our Team</h1>
          <p className="text-xl opacity-90">Dedicated professionals committed to advancing gender equality.</p>
        </div>
      </section>

      {/* Team Intro - Standardized Side by Side */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Heart className="text-primary" size={18} />
                  <span className="text-sm font-semibold text-primary">Our Passion</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground">Passionate Experts Dedicated to Change</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team brings together a diverse range of expertise in education, technology, policy advocacy, and community
                  engagement. What unites us is a shared commitment to building a world where every woman and girl can thrive.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From grassroots organizers to digital transformation experts, we are working together to create impactful
                  solutions that transform lives across Niger State and beyond.
                </p>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
                <div className="grid grid-cols-2 gap-4 relative">
                  <img src="/images/saf6.jpg" className="rounded-xl shadow-lg h-48 w-full object-cover" />
                  <img src="/images/saf7.jpg" className="rounded-xl shadow-lg h-48 w-full object-cover mt-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full text-secondary mb-6">
              <Target size={18} />
              <span className="text-sm font-semibold">Leadership</span>
            </div>
            <h2 className="text-4xl font-bold">The Faces Behind SAFWGS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`overflow-hidden bg-background border-2 border-border hover:border-primary hover:shadow-2xl transition-all duration-500 h-full flex flex-col group hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: (member as any).imagePosition || 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 gap-4">
                    <a href={`mailto:${member.social.email}`} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all"><Mail size={18} /></a>
                    <a href={member.social.linkedin} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all"><Linkedin size={18} /></a>
                    <a href={member.social.twitter} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all"><Twitter size={18} /></a>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-primary font-bold text-sm mb-4 uppercase tracking-widest">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
