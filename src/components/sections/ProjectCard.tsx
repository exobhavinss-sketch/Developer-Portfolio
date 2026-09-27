import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { AIGuidanceVisual } from "@/components/visuals/AIGuidanceVisual";
import { AssemblyTerminalVisual } from "@/components/visuals/AssemblyTerminalVisual";
import { EarthWireframeVisual } from "@/components/visuals/EarthWireframeVisual";

interface ProjectCardProps {
  project: Project;
  layout?: "full" | "half";
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  layout = "half",
}) => {
  const isFull = layout === "full";

  const renderVisual = () => {
    if (project.image) {
      return (
        <div className="w-full bg-surface-low overflow-hidden relative border-b border-border">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-auto object-cover max-h-[520px] transition-transform duration-500 ease-out group-hover:scale-[1.01]"
            loading="lazy"
          />
        </div>
      );
    }

    if (project.visualType === "ai-mesh") {
      return <AIGuidanceVisual />;
    }

    if (project.visualType === "assembly-terminal") {
      return <AssemblyTerminalVisual />;
    }

    if (project.visualType === "earth-globe") {
      return <EarthWireframeVisual />;
    }

    return null;
  };

  return (
    <article
      className={`group bg-surface rounded-xl hairline-border overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-on-surface hover:shadow-xs ${
        isFull ? "w-full" : "w-full"
      }`}
    >
      <div>
        {/* Card Header */}
        <div className="p-5 sm:p-6 lg:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs text-on-surface-variant font-medium tracking-widest uppercase">
                {project.category}
              </span>
              {project.badge && (
                <span
                  className={`font-mono text-[10px] px-2 py-0.5 rounded font-semibold tracking-wider ${
                    project.isFlagship
                      ? "bg-secondary-fixed text-secondary-on-fixed"
                      : "bg-surface-low text-on-surface border border-border"
                  }`}
                >
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-on-surface tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant">
              {project.tagline}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1 sm:pt-0 font-mono text-xs">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-primary text-primary-foreground font-medium hover:bg-[#222222] transition-colors"
                aria-label={`Open live demo for ${project.title}`}
              >
                <SocialIcon type="vercel" size={12} className="shrink-0" />
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-low text-on-surface hover:bg-surface-container transition-colors hairline-border"
              aria-label={`View ${project.title} on GitHub`}
            >
              <SocialIcon type="github" size={13} className="shrink-0" />
              <span>Source</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-on-surface-muted" />
            </a>
          </div>
        </div>

        {/* Visual Display */}
        {renderVisual()}
      </div>

      {/* Card Content & Metadata */}
      <div className="p-5 sm:p-6 lg:p-7 flex flex-col justify-between gap-5 bg-surface">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[11px] text-on-surface-muted uppercase tracking-wider">
            PROJECT OVERVIEW
          </span>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-col gap-2 pt-3 border-t border-border">
          <span className="font-mono text-[11px] text-on-surface-muted uppercase tracking-wider">
            TECHNOLOGY STACK
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-2.5 py-1 rounded bg-surface-low text-on-surface-variant hairline-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
