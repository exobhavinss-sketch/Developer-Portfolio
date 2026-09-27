import React from "react";
import { GraduationCap, Building2, Cpu, Globe2, Sparkles, CheckCircle2 } from "lucide-react";
import { journeyMilestones, currentFocusAreas } from "@/data/journey";
import { Card } from "@/components/ui/Card";

export const Journey: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-border flex flex-col gap-16">
      {/* 1. Journey / Career Milestones */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Heading & Narrative */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant font-medium">
            06 / PATH & MILESTONES
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-on-surface">
            Journey & Origin Story
          </h2>
          <p className="text-base text-on-surface-variant leading-relaxed pt-2">
            A self-directed path prioritizing real product architecture and tangible software execution over waiting for formal credentials.
          </p>

          {/* Quick Highlight Cards */}
          <div className="flex flex-col gap-3 pt-6">
            <div className="p-4 rounded-lg bg-surface-low hairline-border flex items-center gap-3.5">
              <GraduationCap className="w-5 h-5 text-secondary shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-on-surface block">
                  B.Tech CSE — AI & ML
                </span>
                <span className="text-on-surface-muted">
                  MIT Vishwaprayag University, Solapur
                </span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-surface-low hairline-border flex items-center gap-3.5">
              <Building2 className="w-5 h-5 text-secondary shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-on-surface block">
                  Co-Founder & CEO — Orbion
                </span>
                <span className="text-on-surface-muted">
                  AI Operating Systems for Enterprises
                </span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-surface-low hairline-border flex items-center gap-3.5">
              <Globe2 className="w-5 h-5 text-secondary shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-on-surface block">
                  Global Market Vision
                </span>
                <span className="text-on-surface-muted">
                  Making intelligent software accessible
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Timeline Stream */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {journeyMilestones.map((milestone, idx) => (
            <div
              key={milestone.period}
              className={`p-6 bg-surface rounded-xl hairline-border flex flex-col gap-3 ${
                idx === 0 ? "border-l-2 border-l-primary" : "border-l-2 border-l-border"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-lg font-semibold text-on-surface">
                  {milestone.role}
                </h3>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-surface-low text-on-surface font-medium self-start sm:self-auto">
                  {milestone.period}
                </span>
              </div>

              <div className="font-mono text-xs text-secondary font-medium uppercase tracking-wider">
                {milestone.organization} • {milestone.tag}
              </div>

              <p className="text-sm text-on-surface-variant leading-relaxed">
                {milestone.description}
              </p>

              <ul className="space-y-1.5 pt-2 text-xs text-on-surface-variant">
                {milestone.bulletPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="text-secondary font-bold shrink-0">›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Current Development Focus Grid */}
      <div className="flex flex-col gap-8 pt-8 border-t border-border">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant font-medium">
            ACTIVE SKILL DEVELOPMENT
          </span>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-on-surface">
            Current Engineering Focus
          </h3>
          <p className="text-sm sm:text-base text-on-surface-variant">
            Disciplines and technical competencies actively being deepened through continuous hands-on building.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentFocusAreas.map((item) => (
            <Card key={item.title} className="p-5 flex flex-col justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <h4 className="text-sm font-semibold text-on-surface">
                  {item.title}
                </h4>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {item.detail}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
