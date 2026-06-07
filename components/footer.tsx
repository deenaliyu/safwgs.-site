import Link from "next/link";
import { Mail, Linkedin, Twitter, Instagram, Facebook, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary/95 text-primary-foreground py-16 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <Image
              src="/images/saflogoofficial-1-zcz4xblhvycubautpgg-20-281-29.png"
              alt="SALMA ATTAH Foundation Logo"
              width={80}
              height={80}
              className="h-20 w-auto"
            />
            <p className="text-sm opacity-90 leading-relaxed">
              Salma Attah Foundation for Women and Girls Support - Empowering
              women and girls in Nigeria and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                >
                  About Us
                  <span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden">→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/our-work"
                  className="opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                >
                  Our Work
                  <span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden">→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                >
                  Events
                  <span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden">→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                >
                  Our Team
                  <span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden">→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved"
                  className="opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                >
                  Get Involved
                  <span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden">→</span>
                </Link>
              </li>
                <li>
                <Link
                  href="/friends"
                  className="opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                >
                  Friends
                  <span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden">→</span>
                </Link>
              </li>
                <li>
                <Link
                  href="/friends"
                  className="opacity-90 hover:opacity-100 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                >
                  Impact Shop
                  <span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-accent" />
                <a href="mailto:info@safwgs.org" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  info@safwgs.org
                </a>
              </li>
              <li className="pt-4">
                <a
                  href="https://www.flickr.com/safwgs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm font-medium">View Photo Gallery</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/SAF.WGS/"
                className="w-10 h-10 bg-white/10 hover:bg-accent hover:text-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                title="Facebook"
                aria-label="Facebook"
                target="_blank"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com/SAF_WGS"
                className="w-10 h-10 bg-white/10 hover:bg-accent hover:text-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                title="Twitter"
                aria-label="Twitter"
                target="_blank"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/saf_wgs"
                className="w-10 h-10 bg-white/10 hover:bg-accent hover:text-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                title="Instagram"
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/saf-wgs/"
                className="w-10 h-10 bg-white/10 hover:bg-accent hover:text-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                title="LinkedIn"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-75">
              © {currentYear} SALMA ATTAH Foundation. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm opacity-75">
              <Link href="/annual-reports" className="hover:opacity-100 hover:text-accent transition-colors">
                Annual Reports
              </Link>
              <a
                href="https://forms.gle/Zx8sV6yx3J8JcnmPA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 hover:text-accent transition-colors"
              >
                Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
