import React from "react";
import { skillCategories } from "@/data/skills";
import { Card } from "@/components/ui/Card";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-t border-border flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-2 max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant font-medium">
          03 / TECHNICAL TAXONOMY
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-on-surface">
          Technologies & Core Competencies
        </h2>
        <p className="text-base text-on-surface-variant leading-relaxed">
          Structured engineering practices centered around AI/ML workflows, resilient full-stack systems, low-level architecture, and scalable software design.
        </p>
      </div>

      {/* 4-Column Technical Taxonomy Grid matching Stitch */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category) => (
          <Card
            key={category.categoryNumber}
            className="p-5 flex flex-col justify-between gap-6"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="font-mono text-xs font-semibold text-on-surface uppercase tracking-wider">
                  {category.title}
                </span>
                <span className="font-mono text-[11px] text-on-surface-muted">
                  {category.categoryNumber}
                </span>
              </div>

              {/* Skills List */}
              <ul className="space-y-3 pt-4">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex flex-col gap-0.5 pb-2 border-b border-border/40 last:border-0"
                  >
                    <span className="text-sm font-medium text-on-surface">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[11px] text-on-surface-muted">
                      {skill.focus}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category Note */}
            <div className="pt-3 border-t border-border/60 text-xs text-on-surface-muted leading-relaxed">
              {category.description}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
