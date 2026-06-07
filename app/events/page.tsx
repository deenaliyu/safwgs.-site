"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Users, Clock, ArrowRight, ExternalLink, Sparkles, Target, Heart } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const featuredEvent = {
        title: "Girl Code Bootcamp 5.0",
        subtitle: "Call for Applications",
        date: "Deadline: 28 February 2026",
        time: "Apply Online",
        location: "Niger State + Virtual",
        theme: "Empowering Next-Gen Women in Tech",
        description: "Girl Code Bootcamp is our flagship program designed to bridge the gender gap in technology by providing young women with intensive coding skills, digital literacy, and leadership training.",
        highlights: ["Frontend Web Development", "Digital Marketing", "Leadership & Soft Skills", "Career Mentorship"],
        targetAudience: "Young women (15-30 years)",
        image: "/girlscodecamp.jpeg",
    }

    const upcomingEvents = [
        { title: "16 Days of Activism Walk", date: "Next Saturday", time: "10:00 a.m.", location: "Obasanjo Complex, Minna", type: "Community Action", description: "Join us for a powerful community walk to raise awareness against gender-based violence.", image: "/images/54802001320_7c8a3732af_c.jpg" },
    ]

    const pastEvents = [
        { title: "The Orange Walk Niger", date: "2024", description: "A bold advocacy action bringing together community members against gender-based violence.", image: "/images/54801890910_ec608683d0_c.jpg" },
        { title: "Girl Code Bootcamp Season 4", date: "2025", description: "Fourth season with dozens of young women gaining coding and digital skills.", image: "/images/54983191425_a679dd074b_c.jpg" },
        { title: "Kallabi Leadership Fellowship", date: "July 2024", description: "Inaugural cohort developing young women leaders and civic actors.", image: "/images/54983289547_6fc33843db_c.jpg" },
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
                    <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6 text-white">
                        <Calendar size={18} />
                        <span className="text-sm font-semibold">Community Events</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Events & Gatherings</h1>
                    <p className="text-xl opacity-90">Connect, learn, and celebrate with our global community</p>
                </div>
            </section>

            {/* Featured Event - Standardized Side by Side */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                                <Sparkles className="text-accent" size={18} />
                                <span className="text-sm font-semibold text-accent">Spotlight</span>
                            </div>
                            <h2 className="text-4xl font-bold text-foreground">{featuredEvent.title}</h2>
                            <p className="text-primary font-bold text-lg uppercase tracking-wider">{featuredEvent.subtitle}</p>
                            <p className="text-lg text-muted-foreground leading-relaxed">{featuredEvent.description}</p>
                            <div className="grid grid-cols-2 gap-3">
                                {featuredEvent.highlights.map((h, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-muted p-2 rounded-lg">
                                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                                        <span className="text-sm font-medium">{h}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-3 pt-6 border-t border-border">
                                <div className="flex items-center gap-3"><Calendar className="text-primary" size={20} /><span className="font-semibold">{featuredEvent.date}</span></div>
                                <div className="flex items-center gap-3"><Clock className="text-primary" size={20} /><span>{featuredEvent.time}</span></div>
                                <div className="flex items-center gap-3"><Users className="text-primary" size={20} /><span>{featuredEvent.targetAudience}</span></div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                <a href="https://forms.gle/udcFoRT8RtR2Vxwu9" target="_blank" rel="noopener noreferrer" className="flex-1">
                                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-7 group shadow-xl">Apply Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" /></Button>
                                </a>
                            </div>
                        </div>
                        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
                                <img src={featuredEvent.image} alt={featuredEvent.title} className="relative w-full h-auto rounded-2xl shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events - Standardized alternating side by side */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary mb-6">
                            <Target size={18} />
                            <span className="text-sm font-semibold">Join Us</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-4">Upcoming Schedule</h2>
                    </div>
                    {upcomingEvents.map((event, index) => (
                        <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="order-2 md:order-1 relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-xl"></div>
                                <img src={event.image} alt={event.title} className="relative w-full h-auto rounded-2xl shadow-2xl" />
                            </div>
                            <div className="order-1 md:order-2 space-y-6">
                                <span className="inline-block bg-accent px-4 py-1 rounded-full text-white text-xs font-bold uppercase tracking-widest">{event.type}</span>
                                <h3 className="text-3xl font-bold text-foreground">{event.title}</h3>
                                <p className="text-lg text-muted-foreground">{event.description}</p>
                                <div className="space-y-3 pt-6 border-t border-border">
                                    <div className="flex items-center gap-3 font-semibold"><Calendar className="text-primary" size={20} /><span>{event.date}</span></div>
                                    <div className="flex items-center gap-3 font-medium opacity-80"><Clock className="text-primary" size={20} /><span>{event.time}</span></div>
                                    <div className="flex items-center gap-3 font-medium opacity-80"><MapPin className="text-primary" size={20} /><span>{event.location}</span></div>
                                </div>
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-7 group shadow-xl">Learn More <ArrowRight className="ml-2 group-hover:translate-x-1" /></Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Past Events */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full text-secondary mb-6">
                        <Sparkles size={18} />
                        <span className="text-sm font-semibold">History</span>
                    </div>
                    <h2 className="text-4xl font-bold">Past Highlights</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pastEvents.map((event, index) => (
                        <Card key={index} className={`group bg-muted border-2 border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="h-56 overflow-hidden relative">
                                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-8">
                                <p className="text-primary font-bold text-sm mb-2">{event.date}</p>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    )
}
