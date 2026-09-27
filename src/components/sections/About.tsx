import React from "react";
import {
  Bot,
  Layers,
  Sparkles,
  Server,
  GraduationCap,
  Building2,
  Globe2,
  Cpu,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { profileData } from "@/data/profile";

export const About: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "AI & Agentic Systems",
      icon: Bot,
      description:
        "Autonomous orchestration, tool-calling loops, RAG architectures, and agentic workflows that understand tasks and execute multi-step operations.",
    },
    {
      num: "02",
      title: "Full-Stack Architecture",
      icon: Layers,
      description:
        "Modern type-safe TypeScript & Python engineering, robust Next.js application platforms, reactive state engines, and scalable backend services.",
    },
    {
      num: "03",
      title: "Interface Engineering",
      icon: Sparkles,
      description:
        "High-craft human ergonomics, responsive design token systems, optimistic client-side updates, and accessible, high-density typographic hierarchies.",
    },
    {
      num: "04",
      title: "High-Reliability Systems",
      icon: Server,
      description:
        "Distributed telemetry pipelines, cloud databases, persistent vector embeddings, and resilient microservices built for zero-drift performance.",
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-border">
      {/* 2-Column Editorial Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Marker & Bold Thesis */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="font-mono text-xs uppercase tracking-widest text-on-surface-variant font-medium">
            01 / ARCHITECTURE & PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-on-surface">
            I turn complex ideas into resilient software.
          </h2>
          <div className="w-12 h-0.5 bg-primary mt-2"></div>

          {/* Key Quick Facts Pill List */}
          <div className="flex flex-col gap-2.5 pt-6 text-sm text-on-surface-variant">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-4 h-4 text-secondary shrink-0" />
              <span>
                <strong>B.Tech CSE (AI & ML)</strong> — MIT Vishwaprayag University, Solapur
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="w-4 h-4 text-secondary shrink-0" />
              <span>
                <strong>Co-Founder & CEO</strong> — Orbion
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Cpu className="w-4 h-4 text-secondary shrink-0" />
              <span>
                <strong>Building</strong> — AI Operating System for business workflows
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Globe2 className="w-4 h-4 text-secondary shrink-0" />
              <span>
                <strong>Global Vision</strong> — Making intelligent software accessible
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative grounded on About Me.txt */}
        <div className="lg:col-span-7 flex flex-col gap-5 text-base sm:text-lg text-on-surface-variant leading-relaxed">
          <p>
            I’m Bhavin Shankur, Co-Founder & CEO of Orbion and a Computer Science & Engineering (AI & ML) student at MIT Vishwaprayag University, Solapur. I’m deeply passionate about artificial intelligence, software engineering, automation, and building technology that solves tangible real-world challenges.
          </p>
          <p>
            I’m currently focused on building <strong>Orbion</strong> — an AI Operating System designed to help businesses automate and operate their everyday workflows through intelligent AI systems. I believe the next generation of businesses will not rely only on traditional software. They will work alongside intelligent AI systems capable of understanding tasks, making decisions, using tools, and executing workflows.
          </p>
          <p>
            Rather than waiting until graduation to begin, I decided to start building now. I learn by engineering real products, experimenting with emerging models, and turning state-of-the-art AI into software people can actually use.
          </p>
        </div>
      </div>

      {/* 4 Architectural Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <Card key={pillar.num} className="p-5 flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between">
                <Icon className="w-6 h-6 text-secondary" />
                <span className="font-mono text-xs text-on-surface-muted">
                  {pillar.num}
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-on-surface">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant pt-2 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
