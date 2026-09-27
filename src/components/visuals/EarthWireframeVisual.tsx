import React from "react";

export const EarthWireframeVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[260px] max-h-[360px] bg-surface-low rounded-t-lg p-6 flex flex-col justify-between overflow-hidden relative border-b border-border select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between text-xs font-mono text-on-surface-variant">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span className="font-semibold text-on-surface uppercase tracking-wider">
            PLANETARY DATUM • WGS-84
          </span>
        </div>
        <span className="text-on-surface-muted">COORDS: 0.00°N 0.00°E</span>
      </div>

      {/* Geometric Wireframe Globe SVG */}
      <div className="w-full flex items-center justify-center py-2">
        <svg
          viewBox="0 0 200 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-48 h-auto text-on-surface"
        >
          {/* Outer circle */}
          <circle cx="100" cy="65" r="55" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />

          {/* Latitude ellipses */}
          <ellipse cx="100" cy="65" rx="55" ry="38" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 2" />
          <ellipse cx="100" cy="65" rx="55" ry="20" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
          <line x1="45" y1="65" x2="155" y2="65" stroke="#0051d5" strokeWidth="1.5" strokeOpacity="0.8" />

          {/* Longitude ellipses */}
          <ellipse cx="100" cy="65" rx="38" ry="55" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 2" />
          <ellipse cx="100" cy="65" rx="20" ry="55" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
          <line x1="100" y1="10" x2="100" y2="120" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />

          {/* Core Coordinate Points */}
          <circle cx="100" cy="65" r="3" fill="#0051d5" />
          <circle cx="120" cy="50" r="2.5" fill="#316bf3" />
          <circle cx="78" cy="80" r="2" fill="#747878" />

          {/* Orbit arc */}
          <path d="M 35 30 C 70 10, 140 10, 175 45" stroke="#316bf3" strokeWidth="1.5" strokeDasharray="4 2" />
          <circle cx="175" cy="45" r="3.5" fill="#0051d5" />
        </svg>
      </div>

      {/* Footer Info Strip */}
      <div className="flex items-center justify-between text-[11px] font-mono text-on-surface-muted pt-2 border-t border-border/60">
        <span>TYPESCRIPT • INTERACTIVE GEODATA</span>
        <span>PROJECTION: ORTHOGRAPHIC</span>
      </div>
    </div>
  );
};
