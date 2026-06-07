"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Users, BookOpen, Megaphone, ExternalLink, Heart, Calendar, Target, Sparkles, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
    const [isVisible, setIsVisible] = useState(false)
    const [heroIndex, setHeroIndex] = useState(0)
    const [counters, setCounters] = useState({ years: 0, women: 0, programs: 0, bootcamps: 0 })

    const heroImages = [
        "/images/54848796796_124d7bafa4_c.jpg",
        "/images/54983291007_78deae8ace_k.jpg",
        "/images/54801049149_23225d426e_c.jpg",
        "/images/54983191425_a679dd074b_c.jpg",
        "/images/54802001320_7c8a3732af_c.jpg"
    ]

    useEffect(() => {
        setIsVisible(true)

        // Hero image cycling - 10 seconds
        const heroTimer = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % heroImages.length)
        }, 10000)

        // Animate counters
        const duration = 2000
        const steps = 60
        const interval = duration / steps

        let step = 0
        const counterTimer = setInterval(() => {
            step++
            const progress = step / steps
            setCounters({
                years: Math.round(4 * progress),
                women: Math.round(1000 * progress),
                programs: Math.round(6 * progress),
                bootcamps: Math.round(4 * progress)
            })
            if (step >= steps) clearInterval(counterTimer)
        }, interval)

        return () => {
            clearInterval(heroTimer)
            clearInterval(counterTimer)
        }
    }, [])

    const timeline = [
        {
            date: "March 8, 2021",
            title: "SAFWGS Founded",
            description: "SAFWGS is founded to promote gender equality and empower women and girls in Niger State.",
            image: "/images/54801890910_ec608683d0_c.jpg"
        },
        {
            date: "March 22, 2022",
            title: "Girl Code Bootcamp Launches",
            description: "Launch of the first Girl Code Bootcamp, training young women in coding and digital skills.",
            image: "/images/54983191425_a679dd074b_c.jpg"
        },
        {
            date: "July 20, 2024",
            title: "Kallabi Leadership Fellowship",
            description:
                "Kallabi Leadership Fellowship launches, developing a new generation of young women leaders and civic actors.",
            image: "/images/54801049149_23225d426e_c.jpg"
        },
        {
            date: "April 7, 2025",
            title: "Girl Code Bootcamp Season 4",
            description:
                "Fourth season of Girl Code Bootcamp successfully completed, growing the community of girls in tech.",
            image: "/images/54983289547_6fc33843db_c.jpg"
        },
    ]

    const programs = [
        {
            title: "Advocacy",
            description: "Driving change through policy advocacy and amplifying women's voices",
            icon: Megaphone,
            color: "from-primary to-primary/80"
        },
        {
            title: "Civic Participation",
            description: "Building women leaders and fostering meaningful democratic engagement",
            icon: Users,
            color: "from-secondary to-secondary/80"
        },
        {
            title: "Education",
            description: "Equipping women and girls with skills, knowledge, and mentorship",
            icon: BookOpen,
            color: "from-accent to-orange-600"
        },
    ]

    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
                {/* Hero Slider Background */}
                {heroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === heroIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="absolute inset-0 bg-black/50 z-10"></div>
                        <img
                            src={img}
                            alt="SAFWGS Impact"
                            className="w-full h-full object-cover scale-110 animate-subtle-zoom"
                        />
                    </div>
                ))}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                    <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 bg-accent/90 px-6 py-2 rounded-full mb-8 shadow-xl">
                                <Zap className="text-white" size={18} />
                                <span className="text-sm font-bold text-white uppercase tracking-widest">Empowering Women Since 2021</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.2] text-white text-balance drop-shadow-2xl">
                                Empowering Women <br className="hidden md:block" /> and Girls for <span className="text-accent underline decoration-accent/30 underline-offset-8">Social Change</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/95 text-pretty mb-10 max-w-2xl mx-auto font-medium drop-shadow-lg leading-relaxed">
                                SAFWGS promotes gender equality and empowers women and girls in Niger State through education, civic
                                participation, and advocacy.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/get-involved">
                                <Button
                                    size="lg"
                                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-black text-lg py-6 px-8 rounded-xl group shadow-[0_15px_40px_rgba(234,88,12,0.3)] transition-all duration-300 hover:-translate-y-1"
                                >
                                    Get Involved <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/40 text-white hover:bg-white hover:text-primary backdrop-blur-md text-lg py-6 px-8 rounded-xl bg-white/10 font-black shadow-2xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    Learn Our Story
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Slider Indicators */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                    {heroImages.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setHeroIndex(idx)}
                            className={`h-2 transition-all duration-500 rounded-full ${idx === heroIndex ? 'w-12 bg-accent' : 'w-4 bg-white/50 hover:bg-white'}`}
                        />
                    ))}
                </div>
            </section>

            {/* NEW: Girl Code Bootcamp 5.0 Urgent Call */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#4c1d95] via-[#7c3aed] to-[#db2777] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-8 md:p-14 lg:p-20 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full mb-8 self-start">
                                    <Sparkles className="text-white animate-pulse" size={20} />
                                    <span className="text-xs font-black text-white uppercase tracking-[0.2em]">Now Open for Applications</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                                    Girl Code <br />
                                    <span className="text-accent underline decoration-white/20 underline-offset-8">Bootcamp 5.0</span>
                                </h2>
                                <p className="text-xl text-white/90 mb-10 leading-relaxed font-medium">
                                    Our flagship digital skill-building program is back! Join the next generation of female tech leaders.
                                    Master coding, digital literacy, and leadership.
                                </p>
                                <div className="flex flex-wrap gap-6 mb-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                                            <Calendar className="text-accent" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-white/60 uppercase font-bold tracking-wider">Deadline</p>
                                            <p className="text-white font-bold text-lg">28th Feb 2026</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                                            <Target className="text-accent" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-white/60 uppercase font-bold tracking-wider">Status</p>
                                            <p className="text-white font-bold text-lg">Limited Seats</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/our-work/education/girl-code-bootcamp">
                                        <Button size="lg" className="bg-white hover:bg-accent text-primary hover:text-white font-black text-xl py-8 px-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 group">
                                            Learn More & Apply <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative min-h-[500px] lg:min-h-full overflow-hidden flex items-center justify-center bg-purple-950/30">
                                <img
                                    src="/girlscodecamp.jpeg"
                                    alt="Girl Code Bootcamp 5.0 Flyer"
                                    className="w-full h-full object-contain md:object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#4c1d95]/40 to-transparent lg:hidden pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission & Approach Section (Standardized Premium Layout) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                                    <Target className="text-primary" size={18} />
                                    <span className="text-sm font-semibold text-primary">Our Mission</span>
                                </div>
                                <h2 className="text-4xl font-bold text-foreground">Driven by Purpose, Guided by Equality</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Salma Attah Foundation for Women and Girls Support (SAFWGS) is a nonprofit organization driven by the
                                    mission to uplift women and girls in Nigeria. We focus on equipping them with skills,
                                    knowledge, and opportunities to actively participate in societal development.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Founded on the conviction that no one should be left behind, we work tirelessly from rural
                                    communities to urban centers to shift mindsets, policies, and possibilities.
                                </p>
                                <Link href="/about">
                                    <Button variant="link" className="text-primary p-0 h-auto font-bold group">
                                        Read Our Full Story <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
                                <img
                                    src="/images/54801890910_ec608683d0_c.jpg"
                                    alt="SAFWGS Impact"
                                    className="relative w-full h-auto rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-32">
                        <div className={`order-2 md:order-1 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="/images/54802028763_a57c55041b_k.jpg"
                                    alt="Community engagement"
                                    className="w-full h-48 object-cover rounded-xl shadow-lg"
                                />
                                <img
                                    src="/images/54983191425_a679dd074b_c.jpg"
                                    alt="Bootcamp"
                                    className="w-full h-48 object-cover rounded-xl shadow-lg mt-8"
                                />
                                <img
                                    src="/images/54801049149_23225d426e_c.jpg"
                                    alt="Leadership"
                                    className="w-full h-48 object-cover rounded-xl shadow-lg -mt-4"
                                />
                                <img
                                    src="/images/54983289547_6fc33843db_c.jpg"
                                    alt="Digital training"
                                    className="w-full h-48 object-cover rounded-xl shadow-lg mt-4"
                                />
                            </div>
                        </div>
                        <div className={`order-1 md:order-2 space-y-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                                <Sparkles className="text-secondary" size={18} />
                                <span className="text-sm font-semibold text-secondary">Our Approach</span>
                            </div>
                            <h2 className="text-4xl font-bold text-foreground">Holistic Transformation</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We believe that gender equality and women's empowerment require a holistic approach addressing
                                education, health, civic participation, and advocacy. Our work cuts across communities, policies, and
                                lives through targeted interventions.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                By combining education and skills development with civic participation initiatives, we create
                                pathways for women and girls to thrive as leaders and change-makers in their communities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Thrust (Redesigned side-by-side like About Us) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary">
                                    <TrendingUp size={18} />
                                    <span className="text-sm font-semibold">What We Do</span>
                                </div>
                                <h2 className="text-4xl font-bold text-foreground">Our Program Thrust</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Three interconnected focus areas driving sustainable change and empowering generations.
                                    Our portfolio is designed to create lasting impact through systemic reform and individual skill-building.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {programs.map((program, index) => {
                                    const Icon = program.icon
                                    return (
                                        <Link key={index} href={`/our-work/${program.title.toLowerCase().replace(/\s+/g, "-")}`}>
                                            <div className="flex items-center gap-6 p-6 bg-background rounded-2xl border-2 border-border hover:border-primary transition-all group cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1">
                                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform`}>
                                                    <Icon size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{program.title}</h3>
                                                    <p className="text-sm text-muted-foreground line-clamp-1">{program.description}</p>
                                                </div>
                                                <ArrowRight className="ml-auto text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
                                <img
                                    src="/images/54828597309_097b82ea3d_c.jpg"
                                    alt="Program portfolio"
                                    className="relative w-full h-auto rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section (Redesigned as side-by-side impact) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className={`order-2 md:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { value: counters.years, suffix: "+", label: "Years of Impact", color: "text-primary" },
                                    { value: counters.women, suffix: "+", label: "Women Empowered", color: "text-secondary" },
                                    { value: counters.programs, suffix: "", label: "Core Programs", color: "text-accent" },
                                    { value: counters.bootcamps, suffix: "", label: "Girl Code Seasons", color: "text-primary" },
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className={`text-center p-8 bg-muted rounded-3xl transition-all duration-500 group hover:bg-primary/5 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                    >
                                        <div className={`text-5xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                                            {stat.value}{stat.suffix}
                                        </div>
                                        <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`order-1 md:order-2 space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full text-accent">
                                <Sparkles size={18} />
                                <span className="text-sm font-semibold text-accent">Our Numbers</span>
                            </div>
                            <h2 className="text-4xl font-bold text-foreground">Measurable Progress Across West Africa</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our impact isn't just in stories, but in documented growth and transformation. From single-village
                                interventions to policy changes impacting thousands, we quantify our success to ensure
                                accountability.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Every year, we expand our reach, deepening our engagement with communities and scaling our
                                proven educational programs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section (Journey redesigned side-by-side) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary">
                                    <Calendar size={18} />
                                    <span className="text-sm font-semibold">Our Evolution</span>
                                </div>
                                <h2 className="text-4xl font-bold text-foreground">Timeline of Transformation</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Since our founding in 2021, SAFWGS has evolved from a bold vision into a multifaceted foundation.
                                    Trace our journey from initial advocacy to the launch of our award-winning tech initiatives.
                                </p>
                            </div>
                            <div className="space-y-6 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-1 before:bg-primary/10">
                                {timeline.slice(0, 3).map((item, index) => (
                                    <div key={index} className="flex gap-6 relative group">
                                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0 relative z-10 group-hover:scale-110 transition-transform">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-primary mb-1">{item.date}</p>
                                            <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link href="/about">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold group shadow-xl px-10">
                                    See Full Journey <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
                                <img
                                    src="/images/54801049149_23225d426e_c.jpg"
                                    alt="Journey overview"
                                    className="relative w-full h-auto rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video & Gallery Sections */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Mission in Action</h2>
                    <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary-foreground/10">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/liFEYeCJW74"
                            title="SAFWGS - Our Impact"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact in Pictures</h2>
                        <p className="text-lg text-muted-foreground">Capturing moments of empowerment and transformation</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                        {[
                            { src: "/images/54801890910_ec608683d0_c.jpg", alt: "Community meeting" },
                            { src: "/images/54983191425_a679dd074b_c.jpg", alt: "Girl Code Bootcamp" },
                            { src: "/images/54801049149_23225d426e_c.jpg", alt: "Leadership workshop" },
                            { src: "/images/54802001320_7c8a3732af_c.jpg", alt: "Civic training" },
                            { src: "/images/54983289547_6fc33843db_c.jpg", alt: "Digital skill workshop" },
                            { src: "/images/54801292640_5c030da0df_c.jpg", alt: "Community engagement" },
                        ].map((image, index) => (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-medium">{image.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <a href="https://www.flickr.com/safwgs/" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group font-bold">
                                View Official Flickr Gallery
                                <ExternalLink className="ml-2 group-hover:translate-x-1" size={18} />
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
