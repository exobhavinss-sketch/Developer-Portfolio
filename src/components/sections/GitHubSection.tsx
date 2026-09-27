import React from "react";
import { ArrowUpRight, GitFork, BookOpen, ExternalLink } from "lucide-react";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Card } from "@/components/ui/Card";

interface RepoItem {
  name: string;
  url: string;
  description: string;
  language: string;
  languageColor: string;
  branch: string;
}

const verifiedRepos: RepoItem[] = [
  {
    name: "ai-pathfinder-buddy-18",
    url: "https://github.com/exobhavinss-sketch/ai-pathfinder-buddy-18",
    description:
      "AI-powered project designed to help users explore and navigate their learning/career paths with intelligent guidance.",
    language: "TypeScript",
    languageColor: "#3178c6",
    branch: "main",
  },
  {
    name: "Lockheed-Martian-Project",
    url: "https://github.com/exobhavinss-sketch/Lockheed-Martian-Project",
    description:
      "Educational aircraft website showcasing aircraft information, categories, search/filtering, and authentication.",
    language: "JavaScript",
    languageColor: "#f7df1e",
    branch: "main",
  },
  {
    name: "Apollo-11-Source-Code-Compiled",
    url: "https://github.com/exobhavinss-sketch/Apollo-11-Source-Code-Compiled",
    description:
      "A collection of the historic Apollo 11 guidance computer source code, preserved and compiled for exploration and learning.",
    language: "Assembly",
    languageColor: "#6E4C13",
    branch: "master",
  },
  {
    name: "Our-Earth",
    url: "https://github.com/exobhavinss-sketch/Our-Earth",
    description:
      "Interactive web project focused on exploring and presenting information about our planet.",
    language: "TypeScript",
    languageColor: "#3178c6",
    branch: "main",
  },
];

export const GitHubSection: React.FC = () => {
  return (
    <section className="py-20 border-t border-border flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant font-medium">
            04 / SOURCE MANIFEST
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-on-surface">
            GitHub & Active Repositories
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant">
            Verified open-source repositories and learning codebases maintained by Bhavin Shankur.
          </p>
        </div>

        {/* Profile Link Badge */}
        <a
          href="https://github.com/exobhavinss-sketch"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-surface hairline-border hover:border-on-surface text-on-surface font-mono text-xs transition-all shadow-xs shrink-0"
        >
          <SocialIcon type="github" size={16} />
          <span className="font-medium">@exobhavinss-sketch</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-on-surface-muted" />
        </a>
      </div>

      {/* 2x2 Grid of Verified Repositories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {verifiedRepos.map((repo) => (
          <Card
            key={repo.name}
            className="p-5 flex flex-col justify-between gap-4 group"
          >
            <div className="flex flex-col gap-3">
              {/* Repo Title Row */}
              <div className="flex items-center justify-between">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm font-semibold text-on-surface group-hover:text-secondary transition-colors inline-flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-on-surface-muted" />
                  <span className="break-all">{repo.name}</span>
                </a>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface-low border border-border text-on-surface-muted uppercase">
                  {repo.branch}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {repo.description}
              </p>
            </div>

            {/* Bottom Meta & Direct Link */}
            <div className="pt-3 border-t border-border flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: repo.languageColor }}
                ></span>
                <span className="text-on-surface-variant">{repo.language}</span>
              </div>

              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface font-medium hover:text-secondary inline-flex items-center gap-1 transition-colors"
                aria-label={`Open ${repo.name} on GitHub`}
              >
                <span>View Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-on-surface-muted" />
              </a>
            </div>
          </Card>
        ))}
      </div>

      {/* Terminal Telemetry Strip */}
      <div className="bg-surface-low rounded-lg p-3 hairline-border font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-on-surface-muted">
        <div className="flex items-center gap-2">
          <span className="text-secondary font-bold">›</span>
          <span className="text-on-surface font-medium">GIT_REMOTE:</span>
          <span className="truncate">https://github.com/exobhavinss-sketch</span>
        </div>
        <div className="shrink-0 text-[11px]">
          STATUS: 4 VERIFIED REPOSITORIES INDEXED
        </div>
      </div>
    </section>
  );
};
