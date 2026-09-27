"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Monogram } from "@/components/visuals/Monogram";
import { navigationItems } from "@/data/navigation";
import { profileData } from "@/data/profile";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global ⌘K / Ctrl+K shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const contactEl = document.getElementById("contact");
        if (contactEl) {
          contactEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-xs"
          : "bg-background/80 backdrop-blur-md border-b border-border/60"
      }`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between gap-4">
        {/* Left: Monogram, Name & Live Availability Badge */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
          >
            <Monogram size={32} className="h-8 w-8 object-contain transition-transform duration-200 group-hover:scale-105" />
            <span className="font-semibold text-base tracking-tight text-on-surface">
              {profileData.name}
            </span>
          </Link>

          {/* Status Pill matching Stitch reference */}
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-low border border-border">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">
              {profileData.availabilityStatus}
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main Navigation"
        >
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors py-1 hover:border-b-2 hover:border-on-surface"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA & Mobile Hamburger Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:bg-[#222222] transition-all duration-150 active:scale-[0.99]"
          >
            <span>Get in Touch</span>
            <kbd className="hidden lg:inline-block font-mono text-[10px] px-1.5 py-0.2 rounded bg-white/20 text-white">
              ⌘K
            </kbd>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded text-on-surface hover:bg-surface-low focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 py-6 shadow-md transition-all">
          <div className="flex flex-col gap-4">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-on-surface hover:text-secondary py-2 border-b border-border/50 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-on-surface-muted" />
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-low border border-border w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">
                  {profileData.availabilityStatus}
                </span>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 rounded bg-primary text-primary-foreground font-medium text-sm hover:bg-[#222222]"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
