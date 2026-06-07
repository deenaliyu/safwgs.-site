"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ShoppingBag, Plus, Minus, Trash2, Heart, ArrowRight, Sparkles,
  Gift, Package, X, Check, Loader2, Shield, ChevronRight,
  Shirt, BookOpen, Users, TrendingUp, Megaphone
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? "pk_test_863d121eb9be1f776450cbabe19ad411cedfb05d"

declare global {
  interface Window {
    PaystackPop: {
      setup: (config: Record<string, unknown>) => { openIframe: () => void }
    }
  }
}

// ─── Types ───────────────────────────────────────────────────────────────────

interface Product {
  id: string
  emoji: string
  name: string
  price: number          // naira
  description: string
  giftCert: boolean
  category: "impact" | "merch" | "kallabi"
  color: string          // gradient classes
  accent: string         // badge text color class
  accentBg: string       // badge bg class
  image: string          // photo URL
}

interface CartItem extends Product {
  qty: number
  isGift: boolean
}

// ─── Products ────────────────────────────────────────────────────────────────

const impactItems: Product[] = [
  {
    id: "dignity-kit",
    emoji: "🌸",
    name: "Dignity Kit for a Girl",
    price: 5000,
    description: "Provides menstrual hygiene materials and education for one girl.",
    giftCert: true,
    category: "impact",
    color: "from-pink-500 to-rose-500",
    accent: "text-pink-700",
    accentBg: "bg-pink-50",
    image: "/images/dignity-kit.jpeg",
  },
  {
    id: "skills-pack",
    emoji: "💻",
    name: "Skills Support Pack",
    price: 10000,
    description: "Supports digital or vocational training for a young woman.",
    giftCert: true,
    category: "impact",
    color: "from-primary to-primary/80",
    accent: "text-primary",
    accentBg: "bg-primary/10",
    image: "/images/skills.jpeg",
  },
  {
    id: "future-leader",
    emoji: "📚",
    name: "Support a Future Woman Leader",
    price: 15000,
    description: "Contributes to leadership training and mentorship through Kallabi.",
    giftCert: true,
    category: "impact",
    color: "from-purple-500 to-violet-600",
    accent: "text-purple-700",
    accentBg: "bg-purple-50",
    image: "/images/leadership.jpeg",
  },
  {
    id: "family-pack",
    emoji: "🍚",
    name: "Family Support Pack",
    price: 25000,
    description: "Provides food support for vulnerable households.",
    giftCert: true,
    category: "impact",
    color: "from-amber-500 to-orange-500",
    accent: "text-amber-700",
    accentBg: "bg-amber-50",
    image: "/images/support.jpeg",
  },
  {
    id: "learning-materials",
    emoji: "🎓",
    name: "Sponsor a Girl's Learning Materials",
    price: 25000,
    description: "Supports educational resources and learning opportunities for girls.",
    giftCert: true,
    category: "impact",
    color: "from-secondary to-secondary/80",
    accent: "text-secondary",
    accentBg: "bg-secondary/10",
    image: "/images/learning.jpeg",
  },
  {
    id: "menstrual-outreach",
    emoji: "🚺",
    name: "Community Menstrual Health Outreach",
    price: 50000,
    description: "Helps SAFWGS reach an entire community with menstrual health education and supplies.",
    giftCert: true,
    category: "impact",
    color: "from-accent to-orange-600",
    accent: "text-accent",
    accentBg: "bg-accent/10",
    image: "/images/outreach.jpeg",
  },
]

const merchItems: Product[] = [
  {
    id: "tshirt",
    emoji: "👕",
    name: "SAFWGS T-Shirt",
    price: 8000,
    description: "Wear the change. Spread the message. Support impact.",
    giftCert: false,
    category: "merch",
    color: "from-primary to-secondary",
    accent: "text-primary",
    accentBg: "bg-primary/10",
    image: "/images/shirt.jpeg",
  },
  {
    id: "hoodie",
    emoji: "🧥",
    name: "Advocacy Hoodie",
    price: 15000,
    description: "Premium hoodie for advocates who wear their values.",
    giftCert: false,
    category: "merch",
    color: "from-secondary to-secondary/70",
    accent: "text-secondary",
    accentBg: "bg-secondary/10",
    image: "/images/hoodie.jpeg",
  },
  {
    id: "tote",
    emoji: "👜",
    name: "Impact Tote Bag",
    price: 4000,
    description: "Carry it daily. Start conversations that matter.",
    giftCert: false,
    category: "merch",
    color: "from-amber-500 to-orange-400",
    accent: "text-amber-700",
    accentBg: "bg-amber-50",
    image: "/images/bags.jpeg",
  },
  {
    id: "girlcode",
    emoji: "💜",
    name: "GirlCode Collection Apparel",
    price: 12000,
    description: "From the GirlCode digital training program. Wear your coding pride.",
    giftCert: false,
    category: "merch",
    color: "from-purple-500 to-violet-600",
    accent: "text-purple-700",
    accentBg: "bg-purple-50",
    image: "/images/code.jpeg",
  },
  {
    id: "wristband",
    emoji: "📿",
    name: "Awareness Wristband",
    price: 1500,
    description: "Subtle. Symbolic. A daily reminder of the movement.",
    giftCert: false,
    category: "merch",
    color: "from-accent to-orange-500",
    accent: "text-accent",
    accentBg: "bg-accent/10",
    image: "/images/wristband.png",
  },
]

const kallabiItems: Product[] = [
  {
    id: "kallabi-veil-classic",
    emoji: "🧕",
    name: "Kallabi Veil — Classic",
    price: 20000,
    description: "Inspired by Northern Nigerian women. Strength, dignity, and cultural pride.",
    giftCert: false,
    category: "kallabi",
    color: "from-primary to-accent",
    accent: "text-primary",
    accentBg: "bg-primary/10",
    image: "/images/bag.jpeg",
  }
]

const allProducts = [...impactItems, ...merchItems, ...kallabiItems]

const fmt = (n: number) =>
  "₦" + n.toLocaleString("en-NG")

// ─── Cart Drawer ──────────────────────────────────────────────────────────────

function CartDrawer({
  cart,
  onClose,
  onUpdateQty,
  onRemove,
}: {
  cart: CartItem[]
  onClose: () => void
  onUpdateQty: (id: string, qty: number) => void
  onRemove: (id: string) => void
}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})
  const [loading, setLoading] = useState(false)
  const scriptLoaded = useRef(false)

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)

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
    if (!email.trim()) e.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleCheckout = () => {
    if (!validate()) return
    setLoading(true)

    const ref = `safwgs_shop_${Date.now()}`
    const lineItems = cart.map((i) => `${i.name} x${i.qty}`).join(", ")

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email,
      amount: total * 100,
      currency: "NGN",
      ref,
      firstname: name.split(" ")[0],
      lastname: name.split(" ").slice(1).join(" ") || "",
      phone,
      label: "SAFWGS Impact Shop",
      metadata: {
        custom_fields: [
          { display_name: "Order Items", variable_name: "items", value: lineItems },
          { display_name: "Full Name", variable_name: "full_name", value: name },
        ],
      },
      onSuccess: (tx: { reference: string }) => {
        setLoading(false)
        onClose()
        alert(
          `🎉 Thank you, ${name.split(" ")[0]}! Your order is confirmed.\n\nYou'll receive a personalized impact update showing how your gift was used.\n\nRef: ${tx.reference}`
        )
      },
      onCancel: () => setLoading(false),
    })

    handler.openIframe()
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-background w-full max-w-md flex flex-col shadow-2xl h-full overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-background z-10">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-primary" size={22} />
            <h2 className="text-xl font-bold text-foreground">Your Cart</h2>
            <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cart.reduce((s, i) => s + i.qty, 0)}
            </span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-xl transition-colors">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center p-8">
            <ShoppingBag size={48} className="text-muted-foreground/30" />
            <p className="text-muted-foreground">Your cart is empty</p>
            <button onClick={onClose} className="text-primary font-semibold text-sm hover:underline">
              Browse the shop →
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 p-6 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3 p-3 bg-muted rounded-xl">
                  <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground leading-snug">{item.name}</p>
                    {item.isGift && (
                      <span className="inline-flex items-center gap-1 text-xs text-accent font-medium mt-0.5">
                        <Gift size={11} /> Gift
                      </span>
                    )}
                    <p className="text-primary font-bold text-sm mt-1">{fmt(item.price)}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-muted-foreground hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                    <div className="flex items-center gap-2 bg-background rounded-lg px-2 py-1">
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty - 1)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty + 1)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout form + total */}
            <div className="border-t border-border p-6 space-y-4 bg-background sticky bottom-0">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Total</span>
                <span className="text-2xl font-bold text-foreground">{fmt(total)}</span>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wide">Full Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Amina Ibrahim"
                    className={`w-full px-4 py-3 rounded-xl border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all ${errors.name ? "border-red-500" : "border-border"}`}
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wide">Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="amina@example.com"
                    className={`w-full px-4 py-3 rounded-xl border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all ${errors.email ? "border-red-500" : "border-border"}`}
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wide">Phone <span className="text-muted-foreground font-normal normal-case">(optional)</span></label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="08012345678"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all"
                  />
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                disabled={loading}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 shadow-xl"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 size={18} className="animate-spin" /> Opening Paystack…
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Pay {fmt(total)} <ArrowRight size={18} />
                  </span>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
                <Shield size={12} /> Secured by Paystack
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({
  product,
  onAdd,
  isVisible,
  delay,
}: {
  product: Product
  onAdd: (p: Product, isGift: boolean) => void
  isVisible: boolean
  delay: number
}) {
  const [isGift, setIsGift] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    onAdd(product, isGift)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Card
      className={`overflow-hidden border-2 border-border hover:border-primary/40 hover:shadow-2xl transition-all duration-500 bg-background flex flex-col group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms`, transitionProperty: "opacity, transform" }}
    >
      {/* Photo with gradient overlay */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Dark gradient overlay — text lives on this */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        {/* Category badge top-left */}
        <span className="absolute top-3 left-3 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          {product.category === "impact" ? "Impact Gift" : product.category === "kallabi" ? "Kallabi" : "Merch"}
        </span>
        {/* Emoji top-right */}
        <span className="absolute top-3 right-3 text-2xl leading-none">{product.emoji}</span>
        {/* Name + price on bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white font-bold text-base leading-tight mb-1">{product.name}</p>
          <p className="text-white/90 font-black text-xl">{fmt(product.price)}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{product.description}</p>

        {product.giftCert && (
          <label className={`flex items-center gap-2 cursor-pointer p-3 rounded-xl transition-colors ${isGift ? product.accentBg : "bg-muted"}`}>
            <div
              onClick={() => setIsGift(!isGift)}
              className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-all ${
                isGift ? "bg-accent border-accent" : "border-border"
              }`}
            >
              {isGift && <Check size={12} className="text-white" />}
            </div>
            <span className={`text-xs font-semibold ${isGift ? product.accent : "text-muted-foreground"}`}>
              <Gift size={12} className="inline mr-1" />
              Send as a Gift
            </span>
          </label>
        )}

        <Button
          onClick={handleAdd}
          className={`w-full font-bold h-11 transition-all duration-300 ${
            added
              ? "bg-green-500 hover:bg-green-500 text-white"
              : "bg-primary hover:bg-primary/90 text-white"
          }`}
        >
          {added ? (
            <span className="flex items-center gap-2"><Check size={16} /> Added!</span>
          ) : (
            <span className="flex items-center gap-2"><Plus size={16} /> Add to Cart</span>
          )}
        </Button>
      </div>
    </Card>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ImpactShopPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"impact" | "merch" | "kallabi">("impact")

  useEffect(() => { setIsVisible(true) }, [])

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0)

  const addToCart = (product: Product, isGift: boolean) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id && i.isGift === isGift)
      if (existing) return prev.map((i) => i.id === product.id && i.isGift === isGift ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1, isGift }]
    })
  }

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) setCart((prev) => prev.filter((i) => i.id !== id))
    else setCart((prev) => prev.map((i) => i.id === id ? { ...i, qty } : i))
  }

  const removeItem = (id: string) => setCart((prev) => prev.filter((i) => i.id !== id))

  const tabProducts = allProducts.filter((p) => p.category === activeTab)

  const tabs = [
    { id: "impact" as const, label: "Impact Gifts", icon: Heart },
    { id: "merch" as const, label: "Merchandise", icon: Shirt },
    { id: "kallabi" as const, label: "Kallabi Collection", icon: Sparkles },
  ]

  const whereMoneyGoes = [
    { icon: Heart, text: "Educate girls on menstrual health" },
    { icon: BookOpen, text: "Train young women in digital skills" },
    { icon: Users, text: "Support widows and vulnerable families" },
    { icon: TrendingUp, text: "Build women leaders in governance and policy" },
    { icon: Megaphone, text: "Run community outreach and advocacy programs" },
  ]

  return (
    <>
      <Navigation />

      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onUpdateQty={updateQty}
          onRemove={removeItem}
        />
      )}

      {/* Floating cart button */}
      {cartCount > 0 && !cartOpen && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-primary text-white rounded-full px-5 py-3 flex items-center gap-3 shadow-2xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-bold"
        >
          <ShoppingBag size={20} />
          <span>{cartCount} {cartCount === 1 ? "item" : "items"}</span>
          <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">{fmt(cartTotal)}</span>
        </button>
      )}

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-secondary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
            <ShoppingBag className="text-accent" size={18} />
            <span className="text-sm font-semibold">SAFWGS Impact Shop</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Shop With Impact</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Every purchase supports women and girls across Northern Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCartOpen(true)}
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors shadow-lg relative"
            >
              <ShoppingBag size={20} />
              View Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <Link href="/donate">
              <button className="inline-flex items-center gap-2 bg-accent/20 text-white font-bold px-6 py-3 rounded-xl hover:bg-accent/30 transition-colors border border-white/20">
                <Heart size={20} /> Donate Instead
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Shop tabs + grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">

          {/* Tab switcher */}
          <div className={`flex flex-wrap gap-3 mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-lg scale-105"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Section description */}
          {activeTab === "impact" && (
            <div className={`mb-10 max-w-2xl transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <p className="text-muted-foreground text-base leading-relaxed">
                Each item directly funds a specific program. After purchase, you receive a personalised impact update showing how your gift was used.
              </p>
            </div>
          )}
          {activeTab === "merch" && (
            <div className="mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-2">Wear the change.</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Start conversations. Support impact. Every purchase supports SAFWGS programs.
              </p>
            </div>
          )}
          {activeTab === "kallabi" && (
            <div className="mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-2">Tradition. Identity. Empowerment.</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                The Kallabi Veil Collection is inspired by Northern Nigerian women and the meaning of Kallabi — strength, dignity, and cultural pride. Designed by women, for women. Proceeds support girls' education and community outreach.
              </p>
            </div>
          )}

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={addToCart}
                isVisible={isVisible}
                delay={index * 80}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Where money goes */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <TrendingUp className="text-primary" size={18} />
                  <span className="text-sm font-semibold text-primary">Your Money at Work</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground">Where Your Support Goes</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  By shopping with impact, you're not just buying something — you're building a future where women and girls can learn, lead, and thrive.
                </p>
              </div>
              <div className="space-y-3">
                {whereMoneyGoes.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-start gap-3 p-4 bg-background rounded-xl hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                      <span className="text-accent font-bold text-xl flex-shrink-0">✓</span>
                      <span className="text-muted-foreground">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl" />
                <img
                  src="/images/54801890910_ec608683d0_c.jpg"
                  alt="Impact"
                  className="relative w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support directly CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className={`inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <Heart className="text-accent" size={18} />
            <span className="text-sm font-semibold text-accent">Prefer to Give Directly?</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground">Support Without Purchasing</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            If you'd prefer not to purchase an item, there are other ways to support SAFWGS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/friends">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 shadow-xl">
                Monthly Giving <ChevronRight size={18} className="ml-1" />
              </Button>
            </Link>
            <Link href="/donate">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold h-14 px-8">
                One-Time Donation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}