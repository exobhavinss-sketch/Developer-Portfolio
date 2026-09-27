import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Monogram } from "@/components/visuals/Monogram";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { profileData } from "@/data/profile";
import { navigationItems } from "@/data/navigation";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-border bg-background pt-12 pb-10">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-10">
        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Identity & Status */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Monogram size={26} className="h-7 w-7" />
                <span className="font-semibold text-base sm:text-lg text-on-surface">
                  {profileData.name}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant font-medium">
                AI/ML Developer • Full-Stack Developer • Co-Founder & CEO of Orbion
              </p>
              <p className="text-xs text-on-surface-muted max-w-md leading-relaxed">
                Building intelligent software, autonomous agents, and real-time systems. Student at MIT Vishwaprayag University, Solapur.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px] text-on-surface-variant">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-low border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Solapur / Remote (IST / UTC+5:30)
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-low border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-blue"></span>
                Systems Operational
              </span>
            </div>
          </div>

          {/* Quick Index */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="font-mono text-xs uppercase tracking-wider text-on-surface font-semibold">
              Index
            </div>
            <ul className="space-y-1.5 text-xs text-on-surface-variant font-mono">
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

          {/* Direct Verified Channels */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="font-mono text-xs uppercase tracking-wider text-on-surface font-semibold">
              Channels
            </div>
            <ul className="space-y-1.5 text-xs text-on-surface-variant font-mono">
              <li>
                <a
                  href="https://github.com/exobhavinss-sketch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-surface transition-colors inline-flex items-center gap-2"
                >
                  <SocialIcon type="github" size={13} />
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
                  <SocialIcon type="linkedin" size={13} />
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
                  <SocialIcon type="x" size={13} />
                  <span>X (Twitter)</span>
                  <ArrowUpRight className="w-3 h-3 text-on-surface-muted" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bhavinnh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-surface transition-colors inline-flex items-center gap-2"
                >
                  <SocialIcon type="instagram" size={13} />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-on-surface-muted" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:exobhavinss@gmail.com"
                  className="hover:text-on-surface transition-colors inline-flex items-center gap-2"
                >
                  <SocialIcon type="gmail" size={13} />
                  <span>Gmail</span>
                  <ArrowUpRight className="w-3 h-3 text-on-surface-muted" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:bhavinshankur.tech@yahoo.com"
                  className="hover:text-on-surface transition-colors inline-flex items-center gap-2"
                >
                  <SocialIcon type="yahoo" size={13} />
                  <span>Yahoo Mail</span>
                  <ArrowUpRight className="w-3 h-3 text-on-surface-muted" />
                </a>
              </li>
              <li>
                <a
                  href="tel:+919579111964"
                  className="hover:text-on-surface transition-colors inline-flex items-center gap-2"
                >
                  <SocialIcon type="phone" size={13} />
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
          <div className="flex items-center gap-4 text-[11px]">
            <span>LATENCY: 14ms</span>
            <span>•</span>
            <span>REGION: GLOBAL EDGE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
