import React from "react";
import { ArrowUpRight, Copy, Mail, Phone, ExternalLink } from "lucide-react";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { CopyButton } from "@/components/ui/CopyButton";
import { Card } from "@/components/ui/Card";
import { profileData } from "@/data/profile";

export const Contact: React.FC = () => {
  const primaryEmail = "exobhavinss@gmail.com";
  const yahooEmail = "bhavinshankur.tech@yahoo.com";
  const phoneNumber = "+919579111964";
  const displayPhone = "+91 95791 11964";

  return (
    <section id="contact" className="py-20 border-t border-border flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col gap-3 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant font-medium">
            08 / TRANSMISSION CHANNELS
          </span>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-secondary-fixed text-secondary-on-fixed font-semibold">
            OPEN TO OPPORTUNITIES
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-on-surface">
          Initiate Contact & Connect.
        </h2>
        <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
          Open to ambitious startup collaborations, engineering discussions, autonomous agent research, and enterprise AI opportunities.
        </p>
      </div>

      {/* Main Transmission Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Direct Email Channels */}
        <Card className="p-6 sm:p-8 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="font-mono text-xs text-on-surface-muted uppercase tracking-wider">
                PRIMARY EMAIL TRANSMISSION
              </span>
              <span className="font-mono text-[10px] text-secondary font-semibold">
                PREFERRED
              </span>
            </div>

            {/* Gmail */}
            <div className="flex flex-col gap-2 p-4 rounded-lg bg-surface-low hairline-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
                  <SocialIcon type="gmail" size={15} />
                  <span>Personal Gmail</span>
                </div>
                <a
                  href={`mailto:${primaryEmail}`}
                  className="font-mono text-xs text-secondary hover:underline inline-flex items-center gap-1"
                >
                  <span>Open Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <span className="font-mono text-base font-semibold text-on-surface select-all">
                {primaryEmail}
              </span>
              <div className="pt-2">
                <CopyButton textToCopy={primaryEmail} label="Copy Gmail Address" />
              </div>
            </div>

            {/* Yahoo Mail */}
            <div className="flex flex-col gap-2 p-4 rounded-lg bg-surface-low hairline-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
                  <SocialIcon type="yahoo" size={15} />
                  <span>Yahoo Technical Mail</span>
                </div>
                <a
                  href={`mailto:${yahooEmail}`}
                  className="font-mono text-xs text-secondary hover:underline inline-flex items-center gap-1"
                >
                  <span>Open Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <span className="font-mono text-base font-semibold text-on-surface select-all">
                {yahooEmail}
              </span>
              <div className="pt-2">
                <CopyButton textToCopy={yahooEmail} label="Copy Yahoo Mail" />
              </div>
            </div>
          </div>

          <div className="font-mono text-[11px] text-on-surface-muted pt-2 border-t border-border">
            Fast response on serious technical inquiries & startup discussions.
          </div>
        </Card>

        {/* Card 2: Voice & Social Profiles */}
        <Card className="p-6 sm:p-8 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="font-mono text-xs text-on-surface-muted uppercase tracking-wider">
                VOICE & DIRECT CHANNELS
              </span>
              <span className="font-mono text-[10px] text-on-surface font-semibold">
                INDIA (IST)
              </span>
            </div>

            {/* Direct Phone */}
            <div className="flex flex-col gap-2 p-4 rounded-lg bg-surface-low hairline-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
                  <SocialIcon type="phone" size={15} />
                  <span>Direct Phone (India)</span>
                </div>
                <a
                  href={`tel:${phoneNumber}`}
                  className="font-mono text-xs text-secondary hover:underline inline-flex items-center gap-1"
                >
                  <span>Call Directly</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <span className="font-mono text-base font-semibold text-on-surface select-all">
                {displayPhone}
              </span>
              <div className="pt-2">
                <CopyButton textToCopy={phoneNumber} label="Copy Phone Number" />
              </div>
            </div>

            {/* Social Grid */}
            <div className="flex flex-col gap-2 pt-2">
              <span className="font-mono text-xs text-on-surface-muted uppercase tracking-wider">
                PROFESSIONAL PROFILES
              </span>

              <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                <a
                  href="https://github.com/exobhavinss-sketch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-surface-low hairline-border hover:border-on-surface text-on-surface flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <SocialIcon type="github" size={16} />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-on-surface-muted group-hover:text-on-surface" />
                </a>

                <a
                  href="https://www.linkedin.com/in/bhavin-shankur-8421a0371"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-surface-low hairline-border hover:border-on-surface text-on-surface flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <SocialIcon type="linkedin" size={16} />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-on-surface-muted group-hover:text-on-surface" />
                </a>

                <a
                  href="https://x.com/BhavinShankur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-surface-low hairline-border hover:border-on-surface text-on-surface flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <SocialIcon type="x" size={16} />
                    <span>X (Twitter)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-on-surface-muted group-hover:text-on-surface" />
                </a>

                <a
                  href="https://www.instagram.com/bhavinnh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-surface-low hairline-border hover:border-on-surface text-on-surface flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <SocialIcon type="instagram" size={16} />
                    <span>Instagram</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-on-surface-muted group-hover:text-on-surface" />
                </a>
              </div>
            </div>
          </div>

          <div className="font-mono text-[11px] text-on-surface-muted pt-2 border-t border-border flex items-center justify-between">
            <span>TIMEZONE: IST (UTC+5:30)</span>
            <span>LOCATION: SOLAPUR, INDIA</span>
          </div>
        </Card>
      </div>
    </section>
  );
};
