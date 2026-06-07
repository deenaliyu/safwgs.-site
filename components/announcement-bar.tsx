"use client"

import { ArrowRight, Sparkles, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function AnnouncementBar() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const dismissed = localStorage.getItem("bootcamp-announcement-dismissed")
        if (!dismissed) {
            setIsVisible(true)
        }
    }, [])

    const dismiss = () => {
        setIsVisible(false)
        localStorage.setItem("bootcamp-announcement-dismissed", "true")
    }

    if (!isVisible) return null

    return (
        <div className="bg-gradient-to-r from-primary via-purple-600 to-secondary text-white py-3 px-4 relative z-[60] overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center relative z-10">
                <div className="flex items-center gap-2">
                    <div className="bg-white/20 p-1 rounded-full animate-pulse">
                        <Sparkles size={14} className="text-accent" />
                    </div>
                    <span className="text-sm font-bold tracking-wide uppercase">Girl Code Bootcamp 5.0 - Call for Applications!</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="hidden md:inline-block text-xs font-medium text-white/80">Deadline: 28th February</span>
                    <Link
                        href="/our-work/education/girl-code-bootcamp"
                        className="bg-white text-primary text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-1 group/btn shadow-lg"
                    >
                        LEARN MORE <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
            <button
                onClick={dismiss}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-1"
                aria-label="Dismiss announcement"
            >
                <X size={16} />
            </button>
        </div>
    )
}
