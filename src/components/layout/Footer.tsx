import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Monogram } from "@/components/visuals/Monogram";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { CopyButton } from "@/components/ui/CopyButton";
import { profileData } from "@/data/profile";
import { navigationItems } from "@/data/navigation";

export const Footer: React.FC = () => {
  const primaryEmail = "exobhavinss@gmail.com";

  return (
    <footer id="contact" className="w-full border-t border-border bg-background pt-16 pb-12">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12">
        {/* Contact CTA Banner matching Stitch reference */}
        <div className="bg-primary text-primary-foreground rounded-xl p-6 sm:p-8 lg:p-10 flex flex-col gap-6 shadow-sm">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#bec6e0] font-semibold">
              INITIATE CONTACT
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
              Let&apos;s build something enduring.
            </h2>
            <p className="text-sm sm:text-base text-[#dbdad9] leading-relaxed">
              Have an ambitious project, startup venture, or engineering opportunity? I&apos;m always open to discussing technology architecture, intelligent agent systems, or collaborations.
            </p>
          </div>

          {/* Action Transmission Box */}
          <div className="bg-[#1c1b1b] p-4 sm:p-5 rounded-lg hairline-border border-[#303031] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] text-[#858383] uppercase tracking-wider">
                PRIMARY TRANSMISSION CHANNEL
              </span>
              <span className="font-semibold text-base sm:text-lg text-white font-mono">
                {primaryEmail}
              </span>
              <span className="text-xs text-[#858383]">
                PGP Verified • Fast response on serious technical inquiries
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <CopyButton
                textToCopy={primaryEmail}
                label="Copy Email"
                className="bg-white text-primary hover:bg-[#f5f3f3] border-transparent font-medium"
              />
              <a
                href={`mailto:${primaryEmail}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#303031] text-white hover:bg-[#444748] text-xs font-medium transition-colors"
              >
                <span>Direct Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Social Channels Strip with Recognizable Logos */}
          <div className="pt-4 border-t border-[#303031] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <span className="text-[#858383] uppercase tracking-wider">
                CONNECT:
              </span>
              {profileData.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-white hover:text-secondary-fixed transition-colors"
                  aria-label={link.ariaLabel}
                >
                  <SocialIcon type={link.type} size={14} className="shrink-0" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            <div className="font-mono text-[11px] text-[#858383]">
              STATUS: AVAILABILITY 2026
            </div>
          </div>
        </div>

        {/* Technical Footer Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
          {/* Identity & Mission */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Monogram size={28} className="h-7 w-7" />
                <span className="font-semibold text-lg text-on-surface">
                  {profileData.name}
                </span>
              </div>
              <p className="text-sm text-on-surface-variant font-medium">
                {profileData.tagline}
              </p>
              <p className="text-xs text-on-surface-muted max-w-md leading-relaxed">
                Co-Founder & CEO of Orbion. Engineering autonomous agent architectures, scalable web microservices, and high-craft human interfaces with clinical precision.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-low border border-border font-mono text-[11px] text-on-surface-variant">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Solapur / Remote (IST / UTC+5:30)
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-low border border-border font-mono text-[11px] text-on-surface-variant">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-blue"></span>
                Systems Operational
              </span>
            </div>
          </div>

          {/* Quick Index */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-on-surface font-semibold">
              Index
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-on-surface transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-on-surface font-semibold">
              Channels
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant font-mono">
              <li>
                <a
                  href="https://github.com/exobhavinss-sketch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-surface transition-colors inline-flex items-center gap-2"
                >
                  <SocialIcon type="github" size={14} />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-on-surface-muted" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bhavin-shankur-8421a0371"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-surface transition-colors inline-flex items-center gap-2"
                >
                  <SocialIcon type="linkedin" size={14} />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-on-surface-muted" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/BhavinShankur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-surface transition-colors inline-flex items-center gap-2"
                >
                  <SocialIcon type="x" size={14} />
                  <span>X (Twitter)</span>
                  <ArrowUpRight className="w-3 h-3 text-on-surface-muted" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${primaryEmail}`}
                  className="hover:text-on-surface transition-colors inline-flex items-center gap-2"
                >
                  <SocialIcon type="gmail" size={14} />
                  <span>Gmail</span>
                  <ArrowUpRight className="w-3 h-3 text-on-surface-muted" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:bhavinshankur.tech@yahoo.com"
                  className="hover:text-on-surface transition-colors inline-flex items-center gap-2"
                >
                  <SocialIcon type="yahoo" size={14} />
                  <span>Yahoo Mail</span>
                  <ArrowUpRight className="w-3 h-3 text-on-surface-muted" />
                </a>
              </li>
              <li>
                <a
                  href="tel:+919579111964"
                  className="hover:text-on-surface transition-colors inline-flex items-center gap-2"
                >
                  <SocialIcon type="phone" size={14} />
                  <span>+91 95791 11964</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-on-surface-muted font-mono">
          <div>
            © 2026 Bhavin Shankur. Built with technical precision and care.
          </div>
          <div className="flex items-center gap-4">
            <span>LATENCY: 14ms</span>
            <span>•</span>
            <span>REGION: GLOBAL EDGE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
