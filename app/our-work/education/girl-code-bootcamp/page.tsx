"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
    ArrowRight, Code, Palette, BarChart3, Users,
    Sparkles, ShieldCheck, Laptop, Calendar, MapPin,
    CheckCircle2, HelpCircle, Mail, Phone, ExternalLink
} from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function GirlCodeBootcampPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const gains = [
        { title: "Technical Skills", description: "Basic introduction to Data Analytics, UI/UX and Graphics Design.", icon: Code },
        { title: "Logical Thinking", description: "Exposure to problem-solving and logical thinking frameworks.", icon: Sparkles },
        { title: "Mentorship", description: "Direct mentorship and learning support from industry facilitators.", icon: Users },
        { title: "Safe Space", description: "A supportive environment to learn, ask questions, and grow.", icon: ShieldCheck },
    ]

    const faqs = [
        { q: "Is the Girl Code Bootcamp free?", a: "Yes. The Girl Code Bootcamp is completely free for selected participants." },
        { q: "Who can apply?", a: "The bootcamp is open to girls and young women aged 17-25 who are interested in learning digital skills. No prior tech experience is required." },
        { q: "Where will the bootcamp hold this year?", a: "The 2026 Girl Code Bootcamp 5.0 will be held in Bida, Niger State. Full venue details will be shared with selected participants." },
        { q: "When will the bootcamp take place?", a: "It would take place in March, 2026. The exact dates and schedule will be communicated to shortlisted applicants after the application process." },
        { q: "Do I need a laptop or prior knowledge to apply?", a: "Yes, you need a laptop. No prior knowledge is required." },
        { q: "How will I know if I am selected?", a: "Shortlisted applicants will be contacted via the email provided in the application form." },
        { q: "Can I apply if I have never done anything tech-related before?", a: "Yes. The bootcamp is designed for beginners and those looking to explore digital skills for the first time." },
        { q: "Is there a deadline for applications?", a: "Yes. Applications will close on 28th of February, 2026. Late applications will not be considered." },
    ]

    return (
        <div className="bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7e22ce]/95 via-[#7e22ce]/80 to-pink-600/70 z-10"></div>
                    <img
                        src="/girlscodecamp.jpeg"
                        alt="Girl Code Bootcamp"
                        className="w-full h-full object-cover scale-105 animate-subtle-zoom"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/30">
                            <Code className="text-white" size={18} />
                            <span className="text-sm font-bold text-white uppercase tracking-widest">Applications Open for 5.0</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1]">
                            Girl Code <br /><span className="text-accent underline decoration-white/20 underline-offset-8">Bootcamp 5.0</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/95 mb-10 font-medium leading-relaxed max-w-3xl mx-auto">
                            Empowering the next generation of women in tech. An annual initiative designed to introduce
                            basics of design, data, and digital innovation.
                        </p>
                        {/* Apply button removed as requested */}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-black text-foreground leading-[1.2]">Bridging the Tech Gap</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    The Girl Code Bootcamp is an annual initiative of the <span className="text-primary font-bold">Salma Attah Foundation for Women and Girls Support (SAFWGS)</span> In Collaboration with <span className="text-primary font-bold">Wisdom ICT Solutions</span>.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Designed to introduce girls and young women to basics of UI/UX, Graphic Design, Data Analysis and confidence-building in a safe and supportive learning environment.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    The bootcamp creates an opportunity for participants to explore technology, innovation, and creativity while building skills that are relevant for today’s digital world. Beyond technical learning, the program also focuses on leadership, teamwork, and self-expression.
                                </p>

                                <div className="p-8 bg-muted rounded-[3rem] border-2 border-primary/10">
                                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <Users className="text-primary" />
                                        Who Can Apply
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Girls and young women aged 17-25",
                                            "Beginners with little or no prior experience",
                                            "Curious, motivated, and willing to learn"
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 items-start text-muted-foreground">
                                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="aspect-square relative rounded-[4rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/girlscodecamp.jpeg"
                                    className="w-full h-full object-cover"
                                    alt="Learning in Progress"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#7e22ce]/40 to-transparent"></div>
                                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                                    <p className="text-white font-bold leading-relaxed">"Equipping participants with foundational knowledge that supports their academic, personal, and career growth."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Participants Gain */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">What You'll Gain</h2>
                        <div className="w-24 h-2 bg-accent mx-auto rounded-full mb-10"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {gains.map((gain, i) => (
                            <div key={i} className="bg-background p-10 rounded-[3rem] border-2 border-border hover:border-primary transition-all duration-500 hover:-translate-y-2 group shadow-sm">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <gain.icon size={32} />
                                </div>
                                <h4 className="text-2xl font-black mb-4">{gain.title}</h4>
                                <p className="text-muted-foreground leading-relaxed">{gain.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Structure */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-primary p-12 md:p-20 rounded-[4rem] text-white relative shadow-2xl overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-5xl font-black">Program Structure</h2>
                                <p className="text-xl text-white/80 leading-relaxed font-medium">
                                    The bootcamp will be delivered through structured sessions combining learning, practical activities, and interactive discussions.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl backdrop-blur-sm">
                                        <Laptop className="text-accent" />
                                        <p className="font-bold">Laptop Required</p>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl backdrop-blur-sm">
                                        <MapPin className="text-accent" />
                                        <p className="font-bold">Bida, Niger State</p>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl backdrop-blur-sm">
                                        <Calendar className="text-accent" />
                                        <p className="font-bold">March 2026</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20">
                                <h3 className="text-2xl font-black mb-8">How to Apply</h3>
                                <p className="mb-8 opacity-90 leading-relaxed font-medium">
                                    Interested applicants are required to complete the online application form.
                                    Participation is limited, and only shortlisted applicants will be contacted.
                                </p>
                                <Link href="https://forms.gle/udcFoRT8RtR2Vxwu9">
                                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-black text-lg py-7 px-10 rounded-2xl w-full">
                                        Fill Application Form
                                    </Button>
                                </Link>
                                <p className="mt-6 text-center text-sm font-bold opacity-70">
                                    Deadline: 28th February, 2026
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted relative overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary mb-6">
                            <HelpCircle size={18} />
                            <span className="text-sm font-semibold uppercase tracking-widest">General Inquiries</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 text-center">Frequently Asked Questions</h2>
                    </div>

                    <div className="bg-background p-10 rounded-[3rem] shadow-xl border border-border">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/50 py-2">
                                    <AccordionTrigger className="text-left font-black text-lg hover:text-primary transition-colors py-6">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <div className="mt-20 p-12 bg-white rounded-[3rem] border-2 border-primary/20 shadow-2xl text-center">
                        <h3 className="text-2xl font-black mb-8">Still Have Questions?</h3>
                        <div className="flex flex-col md:flex-row justify-center gap-12">
                            <div className="flex items-center gap-3 justify-center">
                                <Mail className="text-primary" size={24} />
                                <span className="font-bold text-muted-foreground">info@safwgs.org</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center">
                                <Phone className="text-primary" size={24} />
                                <span className="font-bold text-muted-foreground">0813 693 1762</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
