"use client";

import React, { useState, useMemo } from "react";
import { Search, Award, CheckCircle2, Filter } from "lucide-react";
import {
  certifications,
  certificationCategories,
  Certification,
} from "@/data/certifications";
import { Card } from "@/components/ui/Card";

export const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCertifications = useMemo(() => {
    return certifications.filter((cert) => {
      const matchesCategory =
        selectedCategory === "all" || cert.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.platform.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="certifications" className="py-20 border-t border-border flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant font-medium">
              07 / VERIFIED CREDENTIALS
            </span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface-low border border-border text-on-surface font-semibold">
              30 COMPLETED
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-on-surface">
            Certifications & Technical Training
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Continuous professional coursework and intensive trainings across artificial intelligence, cloud architectures, programming languages, and prompt engineering.
          </p>
        </div>

        {/* Live Search Field */}
        <div className="relative w-full sm:w-72 shrink-0">
          <Search className="w-4 h-4 text-on-surface-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Filter credentials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-surface hairline-border text-xs font-mono text-on-surface placeholder:text-on-surface-muted focus:outline-none focus:border-on-surface transition-all"
            aria-label="Filter certifications"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
        {certificationCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count =
            cat.id === "all"
              ? certifications.length
              : certifications.filter((c) => c.category === cat.id).length;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-150 flex items-center gap-1.5 select-none ${
                isActive
                  ? "bg-primary text-primary-foreground font-medium shadow-xs"
                  : "bg-surface-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container border border-border"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-surface-container text-on-surface-muted"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Compact List Rows Container */}
      <div className="bg-surface rounded-xl hairline-border divide-y divide-border overflow-hidden shadow-xs">
        {filteredCertifications.length > 0 ? (
          filteredCertifications.map((cert) => (
            <div
              key={cert.id}
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-surface-low transition-colors duration-100 group"
            >
              <div className="flex items-start sm:items-center gap-3">
                <div className="w-8 h-8 rounded bg-surface-low border border-border flex items-center justify-center shrink-0 group-hover:border-secondary transition-colors">
                  <Award className="w-4 h-4 text-secondary" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">
                    {cert.title}
                  </span>
                  <span className="text-xs text-on-surface-variant font-medium">
                    {cert.issuer}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 font-mono text-[11px] text-on-surface-muted self-start sm:self-auto pl-11 sm:pl-0">
                <span className="px-2.5 py-1 rounded bg-surface-low border border-border text-on-surface-variant uppercase tracking-wider">
                  {cert.platform}
                </span>
                <span className="text-secondary font-medium hidden sm:inline">
                  VERIFIED ✓
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center font-mono text-xs text-on-surface-muted">
            No certifications found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </div>

      {/* Footer Info Strip */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-on-surface-muted pt-2 border-t border-border/60">
        <span>
          SHOWING {filteredCertifications.length} OF {certifications.length} CREDENTIALS
        </span>
        <span>ISSUED VIA COURSERA, INTELLISE IT, CISCO, & MIT VISHWAPRAYAG UNIVERSITY</span>
      </div>
    </section>
  );
};
