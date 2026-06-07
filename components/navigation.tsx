"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [projectsOpen, setProjectsOpen] = useState(false)

    const navItems = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        {
            label: "Our Work",
            href: "/our-work",
            submenu: [
                { label: "Advocacy", href: "/our-work/advocacy" },
                {
                    label: "Civic Participation",
                    href: "/our-work/civic-participation",
                    submenu: [
                        { label: "Kallabi Fellowship", href: "/our-work/civic-participation/kallabi" },
                    ]
                },
                { label: "Education", href: "/our-work/education" },
            ],
        },
        { label: "Events", href: "/events" },
        { label: "Team", href: "/team" },
        { label: "Volunteer", href: "https://forms.gle/Zx8sV6yx3J8JcnmPA" },
        { label: "Get Involved", href: "/get-involved" },
        { label: "Friends", href: "/friends" },
        { label: "Impact Shop", href: "/impact-shop" },
    ]

    return (
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/10 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
                        <Image
                            src="/images/saflogoofficial-1-zcz4xblhvycubautpgg-20-281-29.png"
                            alt="SALMA ATTAH Foundation Logo"
                            width={60}
                            height={60}
                            className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
                        />
                    </Link>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-1">
                            {navItems.map((item) => {
                                if (item.submenu) {
                                    return (
                                        <div key={item.label} className="relative group/main">
                                            <Link
                                                href={item.href}
                                                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                                            >
                                                {item.label}
                                                <ChevronDown size={16} className="group-hover/main:rotate-180 transition-transform duration-300" />
                                            </Link>
                                            <div className="absolute left-0 mt-0 w-64 bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-2xl opacity-0 invisible group-hover/main:opacity-100 group-hover/main:visible transition-all duration-300 z-50 transform translate-y-2 group-hover/main:translate-y-0">
                                                <div className="py-2">
                                                    {item.submenu.map((subitem) => (
                                                        <div key={subitem.label} className="relative group/sub">
                                                            {subitem.submenu ? (
                                                                <>
                                                                    <div className="flex justify-between items-center px-4 py-3 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                                                                        <span className="font-medium">{subitem.label}</span>
                                                                        <ChevronDown size={14} className="-rotate-90 group-hover/sub:rotate-0 transition-transform" />
                                                                    </div>
                                                                    <div className="absolute left-full top-0 w-64 bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-2xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0">
                                                                        <div className="py-2">
                                                                            {subitem.submenu.map((nested) => (
                                                                                <Link
                                                                                    key={nested.href}
                                                                                    href={nested.href}
                                                                                    className="block px-4 py-3 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                                                                >
                                                                                    {nested.label}
                                                                                </Link>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <Link
                                                                    href={subitem.href}
                                                                    className="block px-4 py-3 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                                                >
                                                                    {subitem.label}
                                                                </Link>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        target={item.href.startsWith('http') ? "_blank" : undefined}
                                        rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                        className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
                                    >
                                        {item.label}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <Link href="/donate">
                            <Button className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group">
                                <Heart className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                                Donate Now
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu with animation */}
            <div
                className={`md:hidden bg-background/95 backdrop-blur-md border-t border-border overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 pt-2 pb-4 space-y-1">
                    {navItems.map((item) => {
                        if (item.submenu) {
                            return (
                                <div key={item.label}>
                                    <button
                                        onClick={() => setProjectsOpen(!projectsOpen)}
                                        className="w-full text-left px-3 py-3 rounded-lg hover:bg-muted transition-colors flex items-center justify-between"
                                    >
                                        <span className="font-medium">{item.label}</span>
                                        <ChevronDown size={16} className={`transition-transform duration-300 ${projectsOpen ? "rotate-180" : ""}`} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${projectsOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="pl-4 space-y-1 py-2">
                                            {item.submenu.map((subitem) => (
                                                <div key={subitem.label}>
                                                    {subitem.submenu ? (
                                                        <div className="space-y-1">
                                                            <div className="px-3 py-2 text-sm font-bold text-primary opacity-60 uppercase tracking-widest mt-2">{subitem.label}</div>
                                                            {subitem.submenu.map((nested) => (
                                                                <Link
                                                                    key={nested.href}
                                                                    href={nested.href}
                                                                    className="block px-3 py-2 rounded-lg text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                                                                    onClick={() => setIsOpen(false)}
                                                                >
                                                                    {nested.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <Link
                                                            href={subitem.href}
                                                            className="block px-3 py-2 rounded-lg text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {subitem.label}
                                                        </Link>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                target={item.href.startsWith('http') ? "_blank" : undefined}
                                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                className="block px-3 py-3 rounded-lg hover:bg-muted transition-colors font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                    <div className="pt-4">
                        <Link href="/donate" onClick={() => setIsOpen(false)}>
                            <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 text-primary-foreground font-semibold shadow-lg">
                                <Heart className="mr-2" size={18} />
                                Donate Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
