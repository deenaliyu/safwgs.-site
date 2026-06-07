"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Heart, ArrowRight, Star, Crown, TreePine, Flower2, Sprout,
  Globe, Users, BookOpen, Megaphone, Shield, Bell, Sparkles,
  TrendingUp, Gift, Check, X, Loader2
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

// ---------------------------------------------------------------------------
// Paystack public key — replace with your actual key or load from env
// ---------------------------------------------------------------------------
const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? "pk_test_863d121eb9be1f776450cbabe19ad411cedfb05d"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface Tier {
  id: string
  name: string
  amount: string
  amountKobo: number   // Paystack uses kobo (₦1 = 100 kobo)
  period: string
  tagline: string
  icon: React.ElementType
  color: string
  borderColor: string
  badgeColor: string
  featured?: boolean
  benefits: string[]
}

declare global {
  interface Window {
    PaystackPop: {
      setup: (config: Record<string, unknown>) => { openIframe: () => void }
    }
  }
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const tiers: Tier[] = [
  {
    id: "friend",
    name: "Friend",
    amount: "₦2,000",
    amountKobo: 200000,
    period: "/month",
    tagline: "Perfect for students, young professionals, and first-time supporters.",
    icon: Sprout,
    color: "from-primary to-primary/80",
    borderColor: "border-primary/30 hover:border-primary",
    badgeColor: "bg-primary/10 text-primary",
    benefits: [
      "Monthly impact update",
      "Early notice of SAFWGS activities",
      'Digital "Friend of SAFWGS" badge/social media frame',
      "Access to SAFWGS WhatsApp or email community",
    ],
  },
  {
    id: "advocate",
    name: "Advocate",
    amount: "₦5,000",
    amountKobo: 500000,
    period: "/month",
    tagline: "Everything in Friend, plus deeper access and insider updates.",
    icon: Flower2,
    color: "from-secondary to-secondary/80",
    borderColor: "border-secondary/30 hover:border-secondary",
    badgeColor: "bg-secondary/10 text-secondary",
    benefits: [
      "Everything in Friend",
      "Quarterly insider update from Founder",
      "Invitations to selected virtual events",
      "Access to behind-the-scenes photos and stories",
    ],
  },
  {
    id: "champion",
    name: "Champion",
    amount: "₦10,000",
    amountKobo: 1000000,
    period: "/month",
    tagline: "Make your mark with public recognition and priority access.",
    icon: TreePine,
    color: "from-accent to-orange-600",
    borderColor: "border-accent/30 hover:border-accent",
    badgeColor: "bg-accent/10 text-accent",
    featured: true,
    benefits: [
      "Everything in Advocate",
      "Photo and profile featured on the Wall of Friends",
      "Recognition in annual impact report",
      "Invitation to annual Friends of SAFWGS appreciation event",
      "Priority access to volunteer opportunities",
    ],
  },
  {
    id: "patron",
    name: "Patron",
    amount: "₦25,000+",
    amountKobo: 2500000,
    period: "/month",
    tagline: "The highest level of partnership with exclusive leadership access.",
    icon: Crown,
    color: "from-primary to-secondary",
    borderColor: "border-primary/30 hover:border-primary",
    badgeColor: "bg-primary/10 text-primary",
    benefits: [
      "Everything in Champion",
      "Featured spotlight as a Patron",
      "Exclusive annual conversation with SAFWGS leadership",
      "Personalized annual impact summary",
      "Recognition at major SAFWGS events and publications",
      "Priority notification for delegate slots, observer opportunities, and conference scholarships",
    ],
  },
]

const impacts = [
  { icon: BookOpen, label: "Menstrual hygiene education and pad distribution" },
  { icon: Globe, label: "Digital skills training for girls through GirlCode" },
  { icon: Star, label: "Leadership development" },
  { icon: Shield, label: "Support for vulnerable women, widows, and survivors" },
  { icon: Megaphone, label: "Community advocacy and awareness campaigns" },
  { icon: Heart, label: "Emergency response and outreach activities" },
]

const memberBenefits = [
  { icon: Bell, label: "Monthly impact updates" },
  { icon: Gift, label: "Behind-the-scenes stories from the field" },
  { icon: Users, label: "Invitations to selected SAFWGS events and virtual conversations" },
  { icon: Sparkles, label: "Early access to opportunities and announcements" },
  { icon: TrendingUp, label: "Annual impact report" },
]

// ---------------------------------------------------------------------------
// Payment Modal
// ---------------------------------------------------------------------------
function PaymentModal({
  tier,
  onClose,
}: {
  tier: Tier
  onClose: () => void
}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})
  const scriptLoaded = useRef(false)

  // Dynamically load Paystack inline script once
  useEffect(() => {
    if (scriptLoaded.current || document.getElementById("paystack-script")) {
      scriptLoaded.current = true
      return
    }
    const script = document.createElement("script")
    script.id = "paystack-script"
    script.src = "https://js.paystack.co/v1/inline.js"
    script.async = true
    document.body.appendChild(script)
    scriptLoaded.current = true
  }, [])

  const validate = () => {
    const e: { name?: string; email?: string } = {}
    if (!name.trim()) e.name = "Full name is required"
    if (!email.trim()) e.email = "Email address is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handlePay = () => {
    if (!validate()) return
    setLoading(true)

    const reference = `safwgs_${tier.id}_${Date.now()}`

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email,
      amount: tier.amountKobo,
      currency: "NGN",
      ref: reference,
      firstname: name.split(" ")[0],
      lastname: name.split(" ").slice(1).join(" ") || "",
      phone,
      label: `Friends of SAFWGS – ${tier.name}`,
      // Recurring plan: set a plan code from your Paystack dashboard per tier
      // plan: tier.paystackPlanCode,
      metadata: {
        custom_fields: [
          { display_name: "Membership Tier", variable_name: "tier", value: tier.name },
          { display_name: "Full Name", variable_name: "full_name", value: name },
        ],
      },
      onSuccess: (transaction: { reference: string }) => {
        setLoading(false)
        onClose()
        // You can redirect or show a success toast here
        alert(`🎉 Thank you, ${name.split(" ")[0]}! Your ${tier.name} membership is confirmed.\nRef: ${transaction.reference}`)
      },
      onCancel: () => {
        setLoading(false)
      },
    })

    handler.openIframe()
  }

  // Close on backdrop click
  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  const Icon = tier.icon

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={handleBackdrop}
    >
      <div className="bg-background rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Modal header */}
        <div className={`bg-gradient-to-br ${tier.color} p-6 text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <X size={16} />
          </button>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Icon size={22} />
            </div>
            <div>
              <p className="text-xs opacity-80 uppercase tracking-wider font-semibold">Friends of SAFWGS</p>
              <h3 className="text-xl font-bold">{tier.name} Membership</h3>
            </div>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-3xl font-bold">{tier.amount}</span>
            <span className="opacity-80 mb-1">{tier.period}</span>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground">
            You'll be redirected to Paystack's secure payment page to complete your monthly contribution.
          </p>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-foreground">Full Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Amina Ibrahim"
              className={`w-full px-4 py-3 rounded-xl border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                errors.name ? "border-red-500" : "border-border"
              }`}
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-foreground">Email Address *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. amina@example.com"
              className={`w-full px-4 py-3 rounded-xl border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                errors.email ? "border-red-500" : "border-border"
              }`}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-foreground">Phone Number <span className="text-muted-foreground font-normal">(optional)</span></label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 08012345678"
              className="w-full px-4 py-3 rounded-xl border border-border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          <Button
            onClick={handlePay}
            disabled={loading}
            size="lg"
            className={`w-full font-bold h-14 shadow-xl transition-all duration-300 ${
              tier.featured
                ? "bg-accent hover:bg-accent/90 text-white"
                : "bg-primary hover:bg-primary/90 text-white"
            }`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 size={18} className="animate-spin" />
                Opening Paystack…
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Pay {tier.amount}/month
                <ArrowRight size={18} />
              </span>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
            <Shield size={12} />
            Secured by Paystack · Your card details are never stored by us
          </p>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main Page
// ---------------------------------------------------------------------------
export default function FriendsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTier, setActiveTier] = useState<Tier | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <Navigation />

      {activeTier && (
        <PaymentModal tier={activeTier} onClose={() => setActiveTier(null)} />
      )}

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-secondary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div
          className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
            <Heart className="text-accent" size={18} />
            <span className="text-sm font-semibold">Friends of SAFWGS</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Friends of SAFWGS
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
        A community of people who believe this work matters and choose to support it monthly.
          </p>
        </div>
      </section>

  {/* Why Become a Friend */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: heading + closing statement */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <Heart className="text-accent" size={18} />
                <span className="text-sm font-semibold text-accent">Why Join?</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground">Why Become a Friend?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Because lasting change requires consistent support. When you become a Friend of SAFWGS, you help us:
              </p>
              <div className="pl-5 border-l-4 border-accent/40 py-4 bg-muted rounded-r-xl pr-6 mt-4">
                <p className="text-base text-foreground leading-relaxed">
                  Most importantly, you become part of a growing community committed to a future where{" "}
                  <span className="font-semibold text-primary">every woman and girl can thrive.</span>
                </p>
              </div>
            </div>

            {/* Right: impact grid */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              {[
                { icon: Heart, label: "Reach more girls with menstrual health education", bg: "bg-pink-50", iconColor: "text-pink-700" },
                { icon: BookOpen, label: "Provide writing materials and uniforms to girls", bg: "bg-blue-50", iconColor: "text-blue-700" },
                { icon: Globe, label: "Train more young women in digital and leadership skills", bg: "bg-green-50", iconColor: "text-green-700" },
                { icon: Shield, label: "Support widows, survivors, and vulnerable households", bg: "bg-amber-50", iconColor: "text-amber-700" },
                { icon: Star, label: "Build the next generation of women leaders through Kallabi", bg: "bg-purple-50", iconColor: "text-purple-700" },
                { icon: TrendingUp, label: "Respond to community needs as they arise", bg: "bg-teal-50", iconColor: "text-teal-700" },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-4 bg-muted rounded-xl border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${300 + index * 80}ms` }}
                  >
                    <div className={`w-9 h-9 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
                      <Icon className={item.iconColor} size={18} />
                    </div>
                    <span className="text-sm text-muted-foreground leading-snug pt-1">{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

  {/* Membership Tiers */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 space-y-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
              <Star className="text-accent" size={18} />
              <span className="text-sm font-semibold text-accent">Membership Options</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Choose Your Level of Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every contribution, no matter the size, helps create opportunities for women and girls to learn, lead, and thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => {
              const Icon = tier.icon
              return (
                <Card
                  key={tier.id}
                  className={`relative overflow-hidden border-2 transition-all duration-500 bg-background flex flex-col ${tier.borderColor} ${
                    tier.featured ? "ring-2 ring-accent shadow-2xl scale-105" : "hover:shadow-xl hover:-translate-y-1"
                  } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {tier.featured && (
                    <div className="absolute top-0 left-0 right-0 bg-accent text-white text-xs font-bold text-center py-1 tracking-wider uppercase">
                      Most Popular
                    </div>
                  )}
                  <div className={`bg-gradient-to-br ${tier.color} p-6 text-white ${tier.featured ? "pt-8" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-xl font-bold">{tier.name}</h3>
                    </div>
                    <div className="flex items-end gap-1">
                      <span className="text-3xl font-bold">{tier.amount}</span>
                      <span className="opacity-80 mb-1">{tier.period}</span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{tier.tagline}</p>
                    <ul className="space-y-3 flex-grow">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check size={16} className="text-accent shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button
                        size="lg"
                        onClick={() => setActiveTier(tier)}
                        className={`w-full font-bold h-12 transition-all duration-300 ${
                          tier.featured
                            ? "bg-accent hover:bg-accent/90 text-white shadow-lg"
                            : "bg-primary hover:bg-primary/90 text-white"
                        }`}
                      >
                        Join as {tier.name}
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>


      {/* Member Benefits */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div
              className={`order-2 md:order-1 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/54983191425_a679dd074b_c.jpg" alt="Impact" className="w-full h-48 object-cover rounded-xl shadow-lg" />
                <img src="/images/54983289547_6fc33843db_c.jpg" alt="Impact" className="w-full h-48 object-cover rounded-xl shadow-lg mt-8" />
                <img src="/images/54801049149_23225d426e_c.jpg" alt="Impact" className="w-full h-48 object-cover rounded-xl shadow-lg -mt-4" />
                <img src="/images/16979882085861-LrYlqb_Yr9FVEmT2OwuOqg.jpg" alt="Impact" className="w-full h-48 object-cover rounded-xl shadow-lg mt-4" />
              </div>
            </div>
            <div
              className={`order-1 md:order-2 space-y-6 transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Gift className="text-primary" size={18} />
                <span className="text-sm font-semibold text-primary">Member Benefits</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                What You Get as a Member
              </h3>
              <div className="space-y-3">
                {memberBenefits.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-background rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="text-primary" size={18} />
                      </div>
                      <span className="text-muted-foreground pt-1">{item.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

    

    

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div
              className={`space-y-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <Users className="text-secondary" size={18} />
                <span className="text-sm font-semibold text-secondary">Join the Community</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground">Be Part of Lasting Change</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join the Friends of SAFWGS community today. Together, we can build a future where every woman and girl
                has the opportunity to reach her full potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href="mailto:info@safwgs.org" className="flex-1">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 shadow-xl">
                    Get in Touch
                  </Button>
                </a>
                <Link href="/donate" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white font-bold h-14">
                    Make a One-Time Donation
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-xl"></div>
                <img
                  src="/images/54828597309_097b82ea3d_c.jpg"
                  alt="Community impact"
                  className="relative w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}