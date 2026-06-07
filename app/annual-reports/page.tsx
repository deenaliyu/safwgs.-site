"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, FileText, Sparkles, Shield, TrendingUp, Target } from "lucide-react"

export default function AnnualReportsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const reports = [
    {
      year: 2023,
      title: "2023 Annual Report",
      description: "Building momentum with policy victories and community engagement. Our most impactful year yet.",
      highlights: [
        "Policy advocacy wins in Niger State",
        "800+ women supported via scholarships",
        "3 major community engagement events",
        "Expanded global partnership network",
      ],
      downloadUrl: "https://drive.google.com/file/d/1cMQa0mYYiWUGOi0SY1kq9A3xp_Bod68g/view",
      image: "/images/saf1.jpg",
      featured: true,
    },
    {
      year: 2022,
      title: "2022 Annual Report",
      description: "SAFWGS founded and rapid expansion of programs across local governments.",
      highlights: [
        "Official launch of SAFWGS",
        "First Girl Code Bootcamp successful",
        "Community engagement centers established",
      ],
      downloadUrl: "https://drive.google.com/file/d/1I6xsTMGgbk5uEwUDGk9IyenRoUNvF0KP/view",
      image: "/images/54801890910_ec608683d0_c.jpg",
      featured: false,
    },
    {
      year: 2021,
      title: "2021 Annual Report",
      description: "Establishment and early foundational initiatives in women empowerment.",
      highlights: [
        "Program design and pilot phase",
        "Core team and infrastructure assembled",
        "Initial 200 women reached",
      ],
      downloadUrl: "https://drive.google.com/file/d/123N1dSNrqjVg87k_MUem9uQGFaJCUgZX/view?usp=drive_link",
      image: "/images/54828210466_e1d99a895d_c.jpg",
      featured: false,
    },
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
            <FileText className="text-accent" size={18} />
            <span className="text-sm font-semibold text-white">Transparency</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Annual Reports</h1>
          <p className="text-xl opacity-90">Detailed records of our impact, strategy, and stewardship.</p>
        </div>
      </section>

      {/* Latest Report - Standardized Side by Side */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {reports.filter(r => r.featured).map((report, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <Sparkles className="text-primary" size={18} />
                    <span className="text-sm font-semibold text-primary">Latest Release</span>
                  </div>
                  <h2 className="text-4xl font-bold text-foreground">{report.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{report.description}</p>
                </div>
                <div className="space-y-4">
                  <p className="font-bold text-foreground flex items-center gap-2"><Target className="text-primary" size={20} /> Impact Highlights:</p>
                  <ul className="grid grid-cols-1 gap-3">
                    {report.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-3 p-3 bg-muted rounded-xl hover:shadow-sm transition-all">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm text-muted-foreground font-medium">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={report.downloadUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 shadow-xl group">
                    <Download className="mr-2 group-hover:translate-y-1 transition-transform" /> Download PDF Report
                  </Button>
                </a>
              </div>
              <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
                  <img src={report.image} alt={report.title} className="relative w-full h-auto rounded-2xl shadow-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Previous Reports - Grid Collage Layout */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full text-secondary mb-6">
              <TrendingUp size={18} />
              <span className="text-sm font-semibold">Archives</span>
            </div>
            <h2 className="text-4xl font-bold">Previous Year Reports</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reports.filter(r => !r.featured).map((report, index) => (
              <Card key={index} className={`overflow-hidden border-2 border-border hover:border-primary hover:shadow-2xl transition-all duration-500 h-full flex flex-col group hover:-translate-y-2 bg-background ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="h-48 overflow-hidden relative">
                  <img src={report.image} alt={report.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-primary font-bold text-xs mb-2 uppercase tracking-widest">{report.year}</p>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{report.title}</h3>
                  <a href={report.downloadUrl} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white font-bold group/btn transition-all">
                      <Download className="mr-2 group-hover/btn:translate-y-1 transition-all" size={18} /> Download Archive
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section - Side by Side */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`order-2 md:order-1 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/54801049149_23225d426e_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg" />
                <img src="/images/54802001320_7c8a3732af_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg mt-8" />
                <img src="/images/54983191425_a679dd074b_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg -mt-4" />
                <img src="/images/54828597309_097b82ea3d_c.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg mt-4" />
              </div>
            </div>
            <div className={`order-1 md:order-2 space-y-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Shield className="text-primary" size={18} />
                <span className="text-sm font-semibold text-primary">Our Pledge</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground">Strict Commitment to Transparency</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that trust is earned through openness. Our financial records and impact data are
                subject to rigorous internal and community review to ensure every donor Naira reaches its destined goal.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  { title: "Financial Stewardship", text: "Detailed statements showing maximizing of funds." },
                  { title: "Impact Tracking", text: "Verified data on women reached and lives transformed." },
                  { title: "Accountability", text: "Rigorous evaluation and community reporting." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-white shrink-0 font-bold text-xs">✓</div>
                    <div>
                      <p className="font-bold text-foreground text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.text}</p>
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
