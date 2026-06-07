"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Users, Briefcase, Globe, ArrowRight, Check, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function VolunteerPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const volunteerRoles = [
    {
      icon: Users,
      title: "Mentorship Volunteer",
      description: "Share your professional expertise with women seeking guidance and career development.",
      commitment: "4-6 hours/week",
      skills: "Professional experience, communication",
      impact: "Direct 1-on-1 impact",
      color: "from-primary to-primary/80"
    },
    {
      icon: Briefcase,
      title: "Workshop Facilitator",
      description: "Lead training sessions and workshops on your area of expertise for our community programs.",
      commitment: "2-4 hours/month",
      skills: "Subject matter expertise, teaching ability",
      impact: "Reach 20-50 participants",
      color: "from-secondary to-secondary/80"
    },
    {
      icon: Globe,
      title: "Community Ambassador",
      description: "Represent SAFWGS in your local area, organize events, and build community connections.",
      commitment: "5-8 hours/week",
      skills: "Leadership, networking, organization",
      impact: "Build local networks",
      color: "from-accent to-accent/80"
    },
    {
      icon: Heart,
      title: "Program Support Volunteer",
      description: "Assist with program administration, event logistics, and community support activities.",
      commitment: "3-5 hours/week",
      skills: "Organization, communication, flexibility",
      impact: "Enable program delivery",
      color: "from-pink-500 to-rose-600"
    },
  ]

  const volunteerBenefits = [
    "Make meaningful impact in women's lives",
    "Develop new skills and expertise",
    "Expand your professional network",
    "Earn volunteer certification",
    "Access to exclusive SAFWGS resources",
    "Volunteer appreciation events",
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-secondary/90 text-primary-foreground relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/4 left-1/2 w-[300px] h-[300px] bg-primary-foreground/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6 animate-bounce">
            <Heart className="text-accent" size={20} />
            <span className="text-sm font-semibold">Join Our Community</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Volunteer With Us</h1>
          <p className="text-xl opacity-90 mb-8">
            Join our community of changemakers and help us empower women
          </p>

          {/* CTA Button to Google Form */}
          <a
            href="https://forms.gle/Zx8sV6yx3J8JcnmPA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 h-auto group shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-1"
            >
              Apply Now
              <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
            </Button>
          </a>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Why Volunteer With SAFWGS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Volunteering with SAFWGS is more than just giving back—it's an opportunity to be part of a
                transformative movement. Your skills, time, and passion can directly impact the lives of women seeking
                empowerment, education, and professional growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're a seasoned professional, a young entrepreneur, or someone passionate about gender
                equality, we have a role for you. Our volunteers come from diverse backgrounds and all over the world,
                united by a common vision.
              </p>

              {/* Volunteer CTA */}
              <a
                href="https://forms.gle/Zx8sV6yx3J8JcnmPA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4 group">
                  Start Your Volunteer Journey
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </a>
            </div>
            <div className={`bg-gradient-to-br from-muted to-muted/50 p-8 rounded-2xl border border-border/50 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Check className="text-primary-foreground" size={16} />
                </span>
                Volunteer Benefits
              </h3>
              <ul className="space-y-4">
                {volunteerBenefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 bg-background rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Check className="text-accent flex-shrink-0 mt-0.5" size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Volunteer Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerRoles.map((role, index) => {
              const Icon = role.icon
              return (
                <Card
                  key={index}
                  className={`overflow-hidden bg-background border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`bg-gradient-to-r ${role.color} p-4`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{role.title}</h3>
                    <p className="text-muted-foreground mb-6">{role.description}</p>

                    <div className="space-y-3 border-t border-border pt-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <p className="text-sm text-primary font-semibold">Time: <span className="text-muted-foreground font-normal">{role.commitment}</span></p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        <p className="text-sm text-secondary font-semibold">Skills: <span className="text-muted-foreground font-normal">{role.skills}</span></p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        <p className="text-sm text-accent font-semibold">Impact: <span className="text-muted-foreground font-normal">{role.impact}</span></p>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Stories with Real Images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { image: "/images/54801890910_ec608683d0_c.jpg", title: "Community Engagement" },
              { image: "/images/54801292640_5c030da0df_c.jpg", title: "Training Sessions" },
              { image: "/images/54802001320_7c8a3732af_c.jpg", title: "Leadership Development" },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Volunteer Requirements</h2>
          <Card className="p-8 bg-background border-border overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <Check className="text-secondary-foreground" size={16} />
                  </span>
                  What We're Looking For
                </h3>
                <ul className="space-y-3">
                  {[
                    "Passion for women empowerment",
                    "Commitment to our values",
                    "Reliable and professional",
                    "Good communication skills",
                    "Willing to learn",
                    "Flexible and adaptable",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 p-2 hover:bg-muted rounded-lg transition-colors">
                      <Check className="text-secondary flex-shrink-0 mt-0.5" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">1-5</span>
                  The Volunteering Process
                </h3>
                <ol className="space-y-3">
                  {[
                    "Submit volunteer application",
                    "Initial screening and interview",
                    "Background check (if applicable)",
                    "Onboarding and training",
                    "Start volunteering and make impact",
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-3 p-2 hover:bg-muted rounded-lg transition-colors">
                      <span className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-2.5 py-0.5 rounded-full text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section - Apply Now */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join hundreds of volunteers who are transforming lives. Your skills and passion can create lasting change.
          </p>
          <a
            href="https://forms.gle/Zx8sV6yx3J8JcnmPA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-7 h-auto group shadow-2xl hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-1"
            >
              Apply to Volunteer Now
              <ExternalLink className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
            </Button>
          </a>
          <p className="mt-6 text-sm opacity-75">
            Questions? Contact our volunteer coordinator at <a href="mailto:info@safwgs.org" className="underline hover:text-accent transition-colors">info@safwgs.org</a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
