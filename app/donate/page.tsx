"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Copy, Check, ArrowRight, Building2, Smartphone, DollarSign, Banknote, Euro, Sparkles, TrendingUp, Shield, Target } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function DonatePage() {
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const bankAccounts = [
    {
      currency: "Dollar",
      icon: DollarSign,
      accountNumber: "2044494900",
      bankName: "First Bank",
      accountName: "Salma Attah Foundation For Women And Girls Support",
      color: "from-primary to-primary/80"
    },
    {
      currency: "Naira",
      icon: Banknote,
      accountNumber: "2044924212",
      bankName: "First Bank",
      accountName: "Salma Attah Foundation For Women And Girls Support",
      color: "from-secondary to-secondary/80"
    },
    {
      currency: "Euro",
      icon: Euro,
      accountNumber: "2044939867",
      bankName: "First Bank",
      accountName: "Salma Attah Foundation For Women And Girls Support",
      color: "from-accent to-orange-600"
    },
  ]

  const mobilePayment = {
    platform: "Moniepoint",
    accountNumber: "8167057956",
    accountName: "Salma Attah for women and girls support",
    icon: Smartphone,
    color: "from-primary to-secondary"
  }

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(fieldId)
    setTimeout(() => setCopiedField(null), 2000)
  }

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
            <Heart className="text-accent" size={18} />
            <span className="text-sm font-semibold">Every Donation Counts</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Support Our Mission</h1>
          <p className="text-xl opacity-90">Your donation directly empowers women and girls across Niger State</p>
        </div>
      </section>

      {/* Why Donate - Side by Side Layout */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                  <Sparkles className="text-accent" size={18} />
                  <span className="text-sm font-semibold text-accent">Make an Impact</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground">Your Generosity Changes Lives</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every contribution, no matter the size, helps us provide education, mentorship, and advocacy opportunities for women and girls.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By donating to SAFWGS, you're investing in sustainable change and the future of our communities.
                </p>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-xl"></div>
                <img
                  src="/images/54801890910_ec608683d0_c.jpg"
                  alt="Impact"
                  className="relative w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Impact Stats - Alternating Layout Style (Grid Collage) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-32">
            <div className={`order-2 md:order-1 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/54983191425_a679dd074b_c.jpg" alt="Impact" className="w-full h-48 object-cover rounded-xl shadow-lg" />
                <img src="/images/54983289547_6fc33843db_c.jpg" alt="Impact" className="w-full h-48 object-cover rounded-xl shadow-lg mt-8" />
                <img src="/images/54801049149_23225d426e_c.jpg" alt="Impact" className="w-full h-48 object-cover rounded-xl shadow-lg -mt-4" />
                <img src="/images/16979882085861-LrYlqb_Yr9FVEmT2OwuOqg.jpg" alt="Impact" className="w-full h-48 object-cover rounded-xl shadow-lg mt-4" />
              </div>
            </div>
            <div className={`order-1 md:order-2 space-y-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <TrendingUp className="text-primary" size={18} />
                <span className="text-sm font-semibold text-primary">Your Reach</span>
              </div>
              <h3 className="text-3xl font-bold text-foreground md:text-4xl text-balance">See How We Use Your Donations</h3>
              <div className="space-y-4">
                {[
                  { amount: "$25", impact: "supports one girl's digital skills training" },
                  { amount: "$100", impact: "funds a mentorship match for 3 months" },
                  { amount: "$500", impact: "sponsors a scholarship for one girl" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-muted rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <span className="text-accent font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-muted-foreground"><span className="font-bold text-foreground">{item.amount}</span> {item.impact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Details Section - Side by Side */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <Building2 className="text-primary" size={18} />
                  <span className="text-sm font-semibold text-primary">Bank Details</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground">Direct Bank Transfer</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Support us directly via bank transfer. We accept multiple currencies to make it easier for our global
                  partners to contribute to our mission.
                </p>
              </div>

              <div className="space-y-4">
                {bankAccounts.map((account, index) => {
                  const Icon = account.icon
                  const fieldId = `bank-${index}`
                  return (
                    <Card
                      key={index}
                      className={`overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 bg-background ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex flex-col sm:flex-row items-center p-6 gap-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${account.color} flex items-center justify-center text-white shrink-0`}>
                          <Icon size={24} />
                        </div>
                        <div className="flex-grow">
                          <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">{account.currency} Account</p>
                          <p className="font-mono text-xl font-bold text-foreground">{account.accountNumber}</p>
                          <p className="text-xs text-muted-foreground mt-1">{account.bankName}</p>
                        </div>
                        <button onClick={() => handleCopy(account.accountNumber, fieldId)} className="p-3 bg-muted hover:bg-primary hover:text-white transition-all rounded-xl shrink-0">
                          {copiedField === fieldId ? <Check size={20} /> : <Copy size={20} />}
                        </button>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <Card className="overflow-hidden border-2 border-accent/20 hover:border-accent hover:shadow-2xl transition-all duration-500 bg-background group">
                <div className={`bg-gradient-to-br ${mobilePayment.color} p-8 text-white`}>
                  <div className="flex items-center gap-4">
                    <Smartphone size={40} className="group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="text-2xl font-bold">Mobile Payment</h3>
                      <p className="opacity-90">{mobilePayment.platform}</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-2">Account Number</p>
                    <div className="flex items-center justify-between bg-muted p-5 rounded-xl group-hover:bg-primary/5 transition-colors">
                      <p className="font-mono text-3xl font-bold text-foreground">{mobilePayment.accountNumber}</p>
                      <button onClick={() => handleCopy(mobilePayment.accountNumber, 'mobile')} className="p-3 bg-background hover:bg-primary hover:text-white transition-all rounded-xl shadow-sm">
                        {copiedField === 'mobile' ? <Check size={24} /> : <Copy size={24} />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-2">Account Name</p>
                    <p className="text-lg font-medium text-foreground leading-relaxed bg-muted p-4 rounded-xl">{mobilePayment.accountName}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Every Naira Helps Us - Side by Side */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
                <img src="/images/54828597309_097b82ea3d_c.jpg" alt="Impact" className="relative w-full h-auto rounded-2xl shadow-2xl" />
              </div>
            </div>
            <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <Shield className="text-secondary" size={18} />
                <span className="text-sm font-semibold text-secondary">Transparency & Trust</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground">Every Naira Helps Us Reach Further</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are committed to absolute transparency. All donations are tracked, reported, and documented.
                Your contribution ensures that we can continue to scale our impact and reach those who need it most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href="mailto:info@safwgs.org" className="flex-1">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 shadow-xl">Contact Our Team</Button>
                </a>
                <Link href="/get-involved" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white font-bold h-14">Learn Ways to Help</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
