import React from "react";
import { ArrowUpRight, Cpu, Layers, Workflow, ShieldCheck, Terminal } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const OrbionSection: React.FC = () => {
  const osPillars = [
    {
      icon: Workflow,
      title: "Agentic Workflow Orchestration",
      description:
        "Autonomous multi-agent loops that understand high-level business goals, break them down into actionable steps, and coordinate tool execution.",
    },
    {
      icon: Cpu,
      title: "Deterministic State Engine",
      description:
        "A reliable state layer designed to prevent drift and hallucinations, ensuring business operations run predictably and safely.",
    },
    {
      icon: Layers,
      title: "Contextual Memory & Retrieval",
      description:
        "Deep integration with enterprise vector stores and live operational data, allowing agents to act with organizational context.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Tool Execution",
      description:
        "Secure, sandboxed integrations connecting intelligent agents with everyday business software, APIs, and operational databases.",
    },
  ];

  return (
    <section id="orbion" className="py-20 border-t border-border flex flex-col gap-12">
      {/* Section Header */}
      <div className="flex flex-col gap-3 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant font-medium">
            05 / FLAGSHIP VENTURE
          </span>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-secondary-fixed text-secondary-on-fixed font-semibold">
            ACTIVE SYSTEM
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-on-surface">
          Building Orbion.
        </h2>
        <p className="text-lg sm:text-xl text-on-surface-variant leading-relaxed">
          An AI Operating System designed to help businesses automate and operate their everyday workflows through intelligent AI systems.
        </p>
      </div>

      {/* Founder Statement & Technical Thesis Box */}
      <div className="bg-surface-low rounded-xl p-6 sm:p-8 lg:p-10 hairline-border flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
            FOUNDER THESIS & ARCHITECTURAL VISION
          </span>
          <blockquote className="text-base sm:text-lg text-on-surface leading-relaxed font-normal">
            &ldquo;I believe the next generation of businesses will not rely only on traditional software. They will work alongside intelligent AI systems capable of understanding tasks, making decisions, using tools, and executing workflows. Orbion is my attempt to build toward that future.&rdquo;
          </blockquote>
          <div className="flex items-center gap-3 pt-2 text-xs font-mono text-on-surface-variant">
            <span className="font-semibold text-on-surface">BHAVIN SHANKUR</span>
            <span>•</span>
            <span>Co-Founder & CEO, Orbion</span>
          </div>
        </div>

        {/* Quick Highlights Pill Card */}
        <div className="bg-surface rounded-lg p-5 hairline-border w-full lg:w-80 flex flex-col gap-3.5 shrink-0 shadow-xs">
          <span className="font-mono text-[11px] text-on-surface-muted uppercase tracking-wider">
            SYSTEM SPECIFICATIONS
          </span>
          <div className="flex flex-col gap-2 text-xs font-mono text-on-surface">
            <div className="flex items-center justify-between pb-1.5 border-b border-border/60">
              <span className="text-on-surface-variant">Domain:</span>
              <span className="font-medium">AI Operating System</span>
            </div>
            <div className="flex items-center justify-between pb-1.5 border-b border-border/60">
              <span className="text-on-surface-variant">Target:</span>
              <span className="font-medium">Business Workflows</span>
            </div>
            <div className="flex items-center justify-between pb-1.5 border-b border-border/60">
              <span className="text-on-surface-variant">Core Engine:</span>
              <span className="font-medium">Agentic Coordination</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface-variant">Current Stage:</span>
              <span className="font-medium text-secondary">Active Development</span>
            </div>
          </div>
        </div>
      </div>

      {/* Large Interface Preview Showcase */}
      <div className="w-full bg-surface rounded-xl overflow-hidden hairline-border shadow-sm flex flex-col">
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-border bg-surface text-xs font-mono text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="font-semibold text-on-surface uppercase tracking-wider">
              ORBION WORKBENCH INTERFACE PREVIEW
            </span>
          </div>
          <span className="text-on-surface-muted hidden sm:inline">
            AUTONOMOUS AGENT FLOW & TELEMETRY
          </span>
        </div>

        <div className="w-full bg-surface-low overflow-hidden">
          <img
            src="/projects/orbion-preview.png"
            alt="Orbion AI Orchestration Workbench Preview"
            className="w-full h-auto object-cover max-h-[580px]"
            loading="lazy"
          />
        </div>

        <div className="p-5 sm:p-6 bg-surface grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-border font-mono text-xs text-on-surface-variant">
          <div className="flex flex-col gap-1">
            <span className="text-on-surface font-medium">Tree-State Inspection</span>
            <span className="text-on-surface-muted text-[11px]">
              Visualize real-time decision branching and agent node transitions.
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-on-surface font-medium">Sub-15ms Telemetry</span>
            <span className="text-on-surface-muted text-[11px]">
              Streaming WebSocket pipelines monitoring task execution logs.
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-on-surface font-medium">Sandboxed Tool Loops</span>
            <span className="text-on-surface-muted text-[11px]">
              Isolated environments for safe, verifiable API & workflow execution.
            </span>
          </div>
        </div>
      </div>

      {/* 4 Architectural Layers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {osPillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <Card key={pillar.title} className="p-5 flex flex-col justify-between gap-4">
              <Icon className="w-6 h-6 text-secondary" />
              <div>
                <h4 className="text-base font-semibold text-on-surface">
                  {pillar.title}
                </h4>
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
