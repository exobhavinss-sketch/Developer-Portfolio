import React from "react";

export const AIGuidanceVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[260px] max-h-[360px] bg-surface-low rounded-t-lg p-6 flex flex-col justify-between overflow-hidden relative border-b border-border select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between text-xs font-mono text-on-surface-variant">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span className="font-semibold text-on-surface uppercase tracking-wider">
            AI PATHFINDING ENGINE • GRAPH V2.4
          </span>
        </div>
        <span className="text-on-surface-muted">NODES: 18 ACTIVE</span>
      </div>

      {/* SVG Interactive Trajectory Graph */}
      <div className="w-full flex items-center justify-center py-4">
        <svg
          viewBox="0 0 540 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-[500px] h-auto text-on-surface"
        >
          {/* Background grid */}
          <line x1="20" y1="40" x2="520" y2="40" stroke="currentColor" strokeOpacity="0.06" strokeDasharray="3 3" />
          <line x1="20" y1="90" x2="520" y2="90" stroke="currentColor" strokeOpacity="0.06" strokeDasharray="3 3" />
          <line x1="20" y1="140" x2="520" y2="140" stroke="currentColor" strokeOpacity="0.06" strokeDasharray="3 3" />

          {/* Paths */}
          <path d="M 60 90 C 130 90, 150 40, 220 40" stroke="#0051d5" strokeWidth="1.5" strokeDasharray="4 2" />
          <path d="M 60 90 C 130 90, 150 90, 220 90" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
          <path d="M 60 90 C 130 90, 150 140, 220 140" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" />

          <path d="M 220 40 C 290 40, 310 90, 380 90" stroke="#0051d5" strokeWidth="1.5" />
          <path d="M 220 90 C 290 90, 310 90, 380 90" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
          <path d="M 220 140 C 290 140, 310 140, 380 140" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" />

          <path d="M 380 90 C 440 90, 460 90, 480 90" stroke="#0051d5" strokeWidth="2" />

          {/* Root node */}
          <circle cx="60" cy="90" r="14" fill="#ffffff" stroke="#1b1c1c" strokeWidth="2" />
          <circle cx="60" cy="90" r="4" fill="#0051d5" />
          <text x="60" y="118" textAnchor="middle" fontSize="9" fontFamily="var(--font-jetbrains-mono), monospace" fill="#444748">
            START
          </text>

          {/* Layer 1 Nodes */}
          <rect x="180" y="24" width="80" height="32" rx="4" fill="#ffffff" stroke="#0051d5" strokeWidth="1.5" />
          <text x="220" y="44" textAnchor="middle" fontSize="9" fontWeight="600" fontFamily="var(--font-jetbrains-mono), monospace" fill="#0051d5">
            AI / ML Path
          </text>

          <rect x="180" y="74" width="80" height="32" rx="4" fill="#ffffff" stroke="#e5e5e5" strokeWidth="1" />
          <text x="220" y="94" textAnchor="middle" fontSize="9" fontFamily="var(--font-jetbrains-mono), monospace" fill="#1b1c1c">
            Full-Stack
          </text>

          <rect x="180" y="124" width="80" height="32" rx="4" fill="#ffffff" stroke="#e5e5e5" strokeWidth="1" />
          <text x="220" y="144" textAnchor="middle" fontSize="9" fontFamily="var(--font-jetbrains-mono), monospace" fill="#747878">
            Systems
          </text>

          {/* Layer 2 Synthesis Node */}
          <rect x="340" y="72" width="80" height="36" rx="4" fill="#1b1c1c" />
          <text x="380" y="91" textAnchor="middle" fontSize="9" fontWeight="600" fontFamily="var(--font-jetbrains-mono), monospace" fill="#ffffff">
            GUIDANCE
          </text>
          <text x="380" y="101" textAnchor="middle" fontSize="7" fontFamily="var(--font-jetbrains-mono), monospace" fill="#bec6e0">
            Roadmap Sync
          </text>

          {/* Target Node */}
          <circle cx="480" cy="90" r="14" fill="#316bf3" />
          <circle cx="480" cy="90" r="6" fill="#ffffff" />
          <text x="480" y="118" textAnchor="middle" fontSize="9" fontWeight="600" fontFamily="var(--font-jetbrains-mono), monospace" fill="#0051d5">
            CAREER GOAL
          </text>
        </svg>
      </div>

      {/* Footer Info Strip */}
      <div className="flex items-center justify-between text-[11px] font-mono text-on-surface-muted pt-2 border-t border-border/60">
        <span>REACT • TYPESCRIPT • SUPABASE</span>
        <span>LATENCY: &lt;20MS</span>
      </div>
    </div>
  );
};
