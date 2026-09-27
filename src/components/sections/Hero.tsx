import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CopyButton } from "@/components/ui/CopyButton";
import { TopologyMesh } from "@/components/visuals/TopologyMesh";
import { profileData } from "@/data/profile";

export const Hero: React.FC = () => {
  const primaryEmail = "exobhavinss@gmail.com";

  return (
    <section className="pt-24 pb-16 lg:pt-28 lg:pb-20 flex flex-col gap-10">
      <div className="flex flex-col items-start gap-6 max-w-4xl">
        {/* System Status Pill */}
        <Badge variant="status" pulse className="self-start">
          {profileData.systemStatus}
        </Badge>

        {/* Role Positioning Sub-label */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant font-medium">
            {profileData.tagline}
          </span>
          <span className="text-on-surface-muted text-xs hidden sm:inline">•</span>
          <span className="font-mono text-xs uppercase tracking-widest text-secondary font-semibold">
            {profileData.companyRole}
          </span>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-on-surface leading-[1.08]">
          {profileData.heroHeadline}
        </h1>

        {/* Supporting Paragraph */}
        <p className="text-lg sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          {profileData.heroSubheadline}
        </p>

        {/* Primary CTA Row */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button href="#projects" variant="primary" size="lg" className="gap-2">
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button href="#contact" variant="secondary" size="lg">
            <span>Get in Touch</span>
          </Button>

          {/* Copy Email Button */}
          <CopyButton
            textToCopy={primaryEmail}
            label={primaryEmail}
            className="py-2.5 px-4 text-xs"
          />
        </div>

        {/* Quick Index Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-on-surface-variant font-mono text-xs">
          <span className="text-on-surface-muted uppercase">INDEX:</span>
          <a
            href="https://github.com/exobhavinss-sketch"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-surface transition-colors inline-flex items-center gap-1"
          >
            GITHUB <span className="text-on-surface-muted">↗</span>
          </a>
          <span>/</span>
          <a
            href="https://www.linkedin.com/in/bhavin-shankur-8421a0371"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-surface transition-colors inline-flex items-center gap-1"
          >
            LINKEDIN <span className="text-on-surface-muted">↗</span>
          </a>
          <span>/</span>
          <a
            href="https://x.com/BhavinShankur"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-surface transition-colors inline-flex items-center gap-1"
          >
            X.COM <span className="text-on-surface-muted">↗</span>
          </a>
          <span>/</span>
          <a
            href="#contact"
            className="hover:text-on-surface transition-colors inline-flex items-center gap-1"
          >
            CONNECT <ArrowDown className="w-3 h-3 text-on-surface-muted" />
          </a>
        </div>
      </div>

      {/* Hero Interactive Technical Visual: Mesh Topology Canvas */}
      <TopologyMesh />
    </section>
  );
};
