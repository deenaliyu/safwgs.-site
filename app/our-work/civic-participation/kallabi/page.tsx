"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
    ArrowRight, Users, Sparkles, TrendingUp, Target,
    BookOpen, Mic2, Landmark, History, Trophy,
    ExternalLink, Calendar, Clock, MapPin, CheckCircle2,
    FileText, MessageSquare, Newspaper
} from "lucide-react"
import Link from "next/link"

export default function KallabiFellowshipPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const impactStats = [
        { label: "Young Women Trained", value: "30", icon: Users },
        { label: "LGAs Reached", value: "4", icon: MapPin },
        { label: "Policy Proposals", value: "5", icon: FileText },
        { label: "Bills & Motions Debated", value: "5", icon: Landmark },
    ]

    const curriculum = [
        { id: "101", title: "Foundations of Leadership & Governance", description: "Leadership principles, communication skills, and an introduction to governance structures." },
        { id: "201", title: "Social Activism & Community Engagement", description: "Practical activism strategies, grassroots organizing, and community outreach including International Day of the Girl Child activities." },
        { id: "301", title: "Policy & Advocacy", description: "Policy drafting, legal rights education, and formation of the Kallabi Legislative Assembly." },
        { id: "401", title: "Public Speaking & Influence", description: "Persuasive speaking, impromptu communication, and confidence building." },
        { id: "501", title: "Social Accountability & Technology", description: "Civic monitoring, transparency tools, and technology for governance." },
    ]

    const milestones = [
        { title: "Press Briefing & Public Unveiling", icon: Newspaper },
        { title: "Induction and Orientation", icon: Sparkles },
        { title: "Leadership & Governance Modules", icon: BookOpen },
        { title: "Legislative Internship", icon: Landmark },
        { title: "Community Engagement Activities", icon: Users },
        { title: "Kallabi Legislative Assembly", icon: MessageSquare },
        { title: "Graduation & Close-Out Ceremony", icon: Trophy },
    ]

    const alumniGallery = [
        { src: "/images/54801049149_23225d426e_c.jpg", alt: "Cohort 1 Fellowship Engagement" },
        { src: "/images/54801209263_e0e33fd4b8_c.jpg", alt: "Legislative Visit" },
        { src: "/images/54801292640_5c030da0df_c.jpg", alt: "Fellowship Workshop" },
    ]

    return (
        <div className="bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-secondary/70 z-10"></div>
                    <img
                        src="/images/54801049149_23225d426e_c.jpg"
                        alt="Kallabi Fellows"
                        className="w-full h-full object-cover scale-105 animate-subtle-zoom"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-2 bg-accent/90 px-6 py-2 rounded-full mb-8 shadow-xl">
                            <Landmark className="text-white" size={18} />
                            <span className="text-sm font-bold text-white uppercase tracking-widest">Kallabi Leadership Fellowship</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
                            Raising the Next Generation of <span className="text-accent underline decoration-white/20 underline-offset-8">Women Leaders</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/95 mb-10 font-medium leading-relaxed max-w-2xl mx-auto">
                            The first structured, legislative-focused leadership program designed to equip young women
                            with practical political leadership skills.
                        </p>

                        {/* Secondary Semi-Nav */}
                        <div className="mt-12 flex justify-center">
                            <div className="inline-flex bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shadow-2xl">
                                {/* Overview tab removed as requested */}
                                <Link href="/our-work/civic-participation/kallabi">
                                    <button className="px-8 py-3 rounded-xl text-sm font-black uppercase tracking-wider transition-all bg-white text-primary shadow-lg">
                                        Kallabi Fellowship
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating quote removed and moved below */}
            </section>

            {/* Why Kallabi Matters */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                                    <Target className="text-primary" size={18} />
                                    <span className="text-sm font-semibold text-primary uppercase tracking-[0.1em]">The Reality Gap</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-foreground leading-[1.2]">Why Kallabi Matters</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Women remain underrepresented in political and decision-making spaces in Niger State.
                                    Many young women are interested in leadership but lack access to mentorship, exposure, and real institutional experience.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                    <div className="p-6 bg-muted rounded-3xl border-l-4 border-accent shadow-sm">
                                        <p className="text-4xl font-black text-primary mb-2">1 / 27</p>
                                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Only 1 out of 27 members of the Niger State House of Assembly is a woman.</p>
                                    </div>
                                    <div className="p-6 bg-muted rounded-3xl border-l-4 border-secondary shadow-sm">
                                        <p className="text-4xl font-black text-primary mb-2">8</p>
                                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Since 1999, only 8 women have ever served in the House.</p>
                                    </div>
                                </div>

                                <p className="text-lg text-muted-foreground leading-relaxed pt-4">
                                    This gap is not due to a lack of capable women — it is the result of limited access, mentorship, exposure, and opportunity.
                                    <span className="text-primary font-bold"> Kallabi exists to change that.</span>
                                </p>
                            </div>
                        </div>
                        <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/images/54801890910_ec608683d0_c.jpg"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    alt="Governance Gap"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                                <div className="absolute bottom-10 left-10 text-white">
                                    <p className="text-5xl font-black mb-2">30+</p>
                                    <p className="text-sm font-bold uppercase tracking-widest opacity-80">Leaders Trained</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Pull Quote */}
            <section className="py-24 bg-muted/30">
                <div className="max-w-5xl mx-auto px-4">
                    <div className={`relative p-12 md:p-20 bg-background rounded-[4rem] border-2 border-primary/5 shadow-2xl overflow-hidden text-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <div className="absolute top-0 left-0 w-24 h-24 bg-primary/5 rounded-br-full"></div>
                        <MessageSquare className="text-primary/10 absolute top-10 right-10" size={120} />
                        <h3 className="text-3xl md:text-5xl font-black text-foreground italic leading-tight relative z-10 px-4">
                            “Kallabi taught me that leadership is not about waiting to be invited — it’s about showing up prepared.”
                        </h3>
                        <div className="mt-10 flex items-center justify-center gap-4 relative z-10">
                            <div className="w-12 h-1 bg-accent rounded-full"></div>
                            <p className="text-xl font-black text-primary uppercase tracking-widest">Kallabi Fellow Alumni</p>
                            <div className="w-12 h-1 bg-accent rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Kallabi Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full text-secondary mb-6">
                            <Sparkles size={18} />
                            <span className="text-sm font-semibold uppercase tracking-widest">About the Fellowship</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">What Is Kallabi?</h2>
                        <div className="w-24 h-2 bg-accent mx-auto rounded-full mb-10"></div>
                        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                            A 10-month hybrid program that blends leadership training, policy education, legislative exposure,
                            and community engagement. Rooted in culture and driven by impact.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-black text-primary">Rooted in Dignity</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The name <span className="font-bold text-foreground">Kallabi</span> comes from the traditional headscarf, symbolizing dignity, identity, and strength.
                                The fellowship reflects the belief that women can lead boldly without abandoning who they are.
                            </p>
                            <div className="bg-background p-8 rounded-[2rem] border-2 border-primary/5 shadow-xl">
                                <h4 className="text-xl font-black mb-6 flex items-center gap-2">
                                    <Trophy size={24} className="text-secondary" />
                                    What Makes Kallabi Different?
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Direct internships at the Niger State House of Assembly",
                                        "Policy drafting and advocacy training",
                                        "A simulated Legislative Assembly led by fellows",
                                        "Grassroots and school-based community engagement",
                                        "Mentorship from women leaders and policymakers"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-4 items-start group">
                                            <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1 group-hover:bg-secondary group-hover:text-white transition-colors">
                                                <CheckCircle2 size={14} />
                                            </div>
                                            <p className="text-muted-foreground font-medium group-hover:text-foreground transition-colors">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <img
                                src="/images/54802028763_a57c55041b_k.jpg"
                                className="relative w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl"
                                alt="Kallabi Identity"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {impactStats.map((stat, idx) => (
                            <div key={idx} className="bg-background p-8 rounded-[2rem] border-2 border-border text-center hover:border-primary transition-all duration-500 hover:-translate-y-2">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <stat.icon size={32} />
                                </div>
                                <h4 className="text-4xl font-black text-primary mb-2">{stat.value}</h4>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum & Structure */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        <div className="lg:col-span-5 space-y-12">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary">
                                    <BookOpen size={18} />
                                    <span className="text-sm font-semibold uppercase tracking-widest">Path to Leadership</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-foreground">Fellowship Structure</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                                    Over 10 intensive months, fellows undergo a transformation through seven key project phases.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {milestones.map((m, idx) => (
                                    <div key={idx} className="flex gap-6 items-center p-5 bg-muted rounded-2xl border-2 border-transparent hover:border-primary transition-all group cursor-default">
                                        <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                            <m.icon size={20} />
                                        </div>
                                        <p className="font-bold text-foreground group-hover:translate-x-1 transition-transform">{m.title}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-primary p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                                <h4 className="text-2xl font-black mb-6 relative z-10">What Fellows Gain</h4>
                                <ul className="space-y-4 relative z-10">
                                    {[
                                        "Leadership and communication skills",
                                        "Understanding of legislative processes",
                                        "Policy drafting experience",
                                        "Access to mentors and institutions",
                                        "Confidence to engage public office"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm font-medium items-center">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="bg-muted p-10 rounded-[3rem] border-2 border-border shadow-inner">
                                <h3 className="text-3xl font-black text-foreground mb-12 flex items-center gap-4">
                                    <TrendingUp className="text-secondary" size={32} />
                                    The KLF Curriculum
                                </h3>
                                <div className="space-y-8">
                                    {curriculum.map((item, idx) => (
                                        <div key={idx} className="relative pl-12 before:absolute before:left-4 before:top-4 before:bottom-0 before:w-0.5 before:bg-primary/20 last:before:hidden">
                                            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-black text-xs z-10 shadow-lg">
                                                {item.id}
                                            </div>
                                            <div className="bg-background p-8 rounded-3xl shadow-sm border border-primary/5 hover:shadow-xl transition-shadow group">
                                                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                                                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact - Policies Developed */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full mb-8">
                            <History className="text-accent" size={20} />
                            <span className="text-sm font-black uppercase tracking-widest text-white">Impact Report</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-6">Legislative Influence</h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
                            During the Kallabi Legislative Assembly, fellows developed and debated policies addressing core societal gaps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { title: "Youth Unemployment", icon: Users },
                            { title: "Maternal Healthcare", icon: Target },
                            { title: "Inclusive Education", icon: BookOpen },
                            { title: "Gender Representation", icon: Landmark },
                            { title: "Social Accountability", icon: TrendingUp },
                        ].map((policy, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center hover:bg-white hover:text-primary transition-all duration-500 group">
                                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:bg-primary group-hover:text-white transition-colors">
                                    <policy.icon size={28} />
                                </div>
                                <h4 className="font-black text-sm uppercase tracking-wider h-12 flex items-center justify-center leading-tight">
                                    {policy.title}
                                </h4>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-12 bg-white rounded-[3rem] text-primary shadow-2xl overflow-hidden relative group">
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-black mb-6">Legislative Internship</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                    Fellows completed internships at the <span className="font-bold text-primary">Niger State House of Assembly</span>,
                                    observing plenary sessions, committee work, and legislative procedures while engaging directly with lawmakers and clerks.
                                </p>
                                <Link href="https://www.flickr.com/gp/safwgs/6X2Tvx66KK" target="_blank">
                                    <Button className="bg-primary hover:bg-primary/90 text-white font-bold py-6 px-10 rounded-2xl group shadow-xl">
                                        View Internship Gallery <ExternalLink className="ml-2 group-hover:translate-x-1" size={18} />
                                    </Button>
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <img src="/images/54828597329_72d70495e7_c.jpg" className="w-full h-40 object-cover rounded-2xl shadow-lg" alt="Internship Action" />
                                <img src="/images/54828210466_e1d99a895d_c.jpg" className="w-full h-40 object-cover rounded-2xl shadow-lg mt-8" alt="Policy Debate" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alumni & Community */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full text-secondary mb-6">
                            <Users size={18} />
                            <span className="text-sm font-semibold uppercase tracking-widest">Our Alumni</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">Cohort 1</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Kallabi alumni continue to engage civic spaces, advocacy efforts, and leadership opportunities across Niger State and beyond.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {alumniGallery.map((img, idx) => (
                            <div key={idx} className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px]">
                                <img src={img.src} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={img.alt} />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white font-bold text-lg">{img.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link href="https://www.flickr.com/gp/safwgs/6X2Tvx66KK" target="_blank">
                            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white font-black py-7 px-10 rounded-2xl group transition-all">
                                View Full Alumni Gallery <ExternalLink className="ml-2 group-hover:rotate-45" size={20} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Media & Resources */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Media & Voices</h2>
                        <div className="w-20 h-2 bg-secondary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-background p-10 rounded-[2.5rem] shadow-xl border border-border group hover:-translate-y-2 transition-all">
                            <Mic2 className="text-primary mb-6 group-hover:scale-110 transition-transform" size={48} />
                            <h4 className="text-2xl font-black mb-4">Headscarves & Headlines Podcast</h4>
                            <p className="text-muted-foreground leading-relaxed mb-6 font-medium">Amplify women’s voices on leadership, policy, and civic engagement.</p>
                            <Button variant="link" className="p-0 text-primary font-bold h-auto">Listen Now <ArrowRight size={16} className="ml-1" /></Button>
                        </div>

                        <div className="bg-background p-10 rounded-[2.5rem] shadow-xl border border-border group hover:-translate-y-2 transition-all">
                            <TrendingUp className="text-secondary mb-6 group-hover:scale-110 transition-transform" size={48} />
                            <h4 className="text-2xl font-black mb-4">Kallabi Data Series</h4>
                            <p className="text-muted-foreground leading-relaxed mb-6 font-medium">Visual storytelling highlighting women’s representation and governance gaps.</p>
                            <Button variant="link" className="p-0 text-secondary font-bold h-auto">Explore Data <ArrowRight size={16} className="ml-1" /></Button>
                        </div>

                        <div className="bg-background p-10 rounded-[2.5rem] shadow-xl border border-border group hover:-translate-y-2 transition-all">
                            <MessageSquare className="text-accent mb-6 group-hover:scale-110 transition-transform" size={48} />
                            <h4 className="text-2xl font-black mb-4">Kallabi Voices</h4>
                            <p className="text-muted-foreground leading-relaxed mb-6 font-medium">Quotes and reflections from fellows, facilitators, and guest speakers.</p>
                            <Button variant="link" className="p-0 text-accent font-bold h-auto">Read Reflections <ArrowRight size={16} className="ml-1" /></Button>
                        </div>
                    </div>

                    <div className="mt-20 p-12 bg-primary rounded-[3rem] text-white text-center shadow-2xl">
                        <h3 className="text-2xl font-black mb-10 opacity-70">Institutional Partners</h3>
                        <div className="flex flex-wrap justify-center gap-16 items-center">
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-black tracking-tighter">NYFF</span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-50">Nigeria Youth Futures Fund</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-black tracking-tighter">LEAP AFRICA</span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-50">Leadership • Engagement • Africa</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xl font-bold tracking-tight uppercase">Niger State House of Assembly</span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-50">Legislative Partner</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Apply & Contact */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#4c1d95] to-[#7c3aed] p-12 md:p-20 rounded-[4rem] text-center text-white relative shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8">Step Into <br /> Your Leadership</h2>
                    <p className="text-xl text-white/80 mb-12 font-medium">
                        Are you a young woman aged 18–30 in Niger State ready to lead?
                        Join our next cohort and change the narrative.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="https://forms.gle/udcFoRT8RtR2Vxwu9">
                            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-black text-xl py-8 px-12 rounded-[2rem] shadow-2xl w-full sm:w-auto">
                                Apply Now
                            </Button>
                        </Link>
                        <Link href="mailto:info@safwgs.org">
                            <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-colors font-black text-xl py-8 px-12 rounded-[2rem] w-full sm:w-auto">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold opacity-60">Follow Fellowship:</span>
                            <span className="font-black text-xs uppercase tracking-widest text-accent">@KallabiFellowship</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold opacity-60 text-white">Contact:</span>
                            <span className="font-black text-xs uppercase tracking-widest text-accent">info@safwgs.org</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
