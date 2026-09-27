import React from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SocialIcon } from "@/components/ui/SocialIcon";

export const Projects: React.FC = () => {
  const flagshipProject = projects.find((p) => p.isFlagship) || projects[0];
  const gridProjects = projects.filter((p) => !p.isFlagship);

  return (
    <section id="projects" className="py-20 border-t border-border flex flex-col gap-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant font-medium">
            02 / SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-on-surface">
            Architectural Case Studies & Projects
          </h2>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-on-surface-variant">
          <a
            href="https://github.com/exobhavinss-sketch"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-surface transition-colors inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-low hairline-border"
          >
            <SocialIcon type="github" size={14} />
            <span>@exobhavinss-sketch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-on-surface-muted" />
          </a>
        </div>
      </div>

      {/* Flagship Hero Case Study (Orbion) */}
      <div className="w-full">
        <ProjectCard project={flagshipProject} layout="full" />
      </div>

      {/* Grid of Verified Repositories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {gridProjects.map((project) => (
          <ProjectCard key={project.id} project={project} layout="half" />
        ))}
      </div>
    </section>
  );
};
