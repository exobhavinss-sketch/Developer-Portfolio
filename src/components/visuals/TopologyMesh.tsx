"use client";

import React, { useState, useEffect } from "react";

const TICKER_MESSAGES = [
  "Orbion runtime loop running at 60Hz. Zero drift recorded across all active shards.",
  "TimescaleDB ingestion: 10,480 telemetry events/sec buffered without drop.",
  "Vector search pipeline: 128-dim cosine similarity indexed in 4.2ms.",
  "Civic AI edge models validated: 94.6% confidence on pavement distress detection.",
  "Supabase real-time channel sync verified: WebSocket latency <14ms.",
];

export const TopologyMesh: React.FC = () => {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [epochTime, setEpochTime] = useState<string>("1774319842.102");

  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % TICKER_MESSAGES.length);
    }, 4500);

    const epochInterval = setInterval(() => {
      const now = Date.now() / 1000;
      setEpochTime(now.toFixed(3));
    }, 1000);

    return () => {
      clearInterval(tickerInterval);
      clearInterval(epochInterval);
    };
  }, []);

  return (
    <div className="w-full bg-surface rounded-xl overflow-hidden hairline-border p-4 sm:p-6 lg:p-8 flex flex-col gap-4 shadow-sm">
      {/* Topology Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
          </span>
          <span className="font-mono text-xs uppercase font-semibold text-on-surface tracking-wider">
            Agent Orchestration & Realtime Telemetry Mesh
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <span className="text-on-surface-muted">LATENCY:</span> 14ms
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-on-surface-muted">VECTOR DB:</span> SYNCED
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-on-surface-muted">SHARDS:</span> 4/4
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-secondary font-medium">
            ● ACTIVE CLUSTER
          </span>
        </div>
      </div>

      {/* Topology Diagram Inline SVG */}
      <div className="w-full overflow-x-auto py-2">
        <svg
          className="w-full h-auto min-w-[720px] select-none text-on-surface"
          fill="none"
          viewBox="0 0 1100 260"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Orchestration Architecture Diagram"
        >
          {/* Background Grid Lines */}
          <line
            stroke="currentColor"
            strokeDasharray="3 3"
            strokeOpacity="0.08"
            x1="40"
            x2="1060"
            y1="50"
            y2="50"
          />
          <line
            stroke="currentColor"
            strokeDasharray="3 3"
            strokeOpacity="0.08"
            x1="40"
            x2="1060"
            y1="130"
            y2="130"
          />
          <line
            stroke="currentColor"
            strokeDasharray="3 3"
            strokeOpacity="0.08"
            x1="40"
            x2="1060"
            y1="210"
            y2="210"
          />

          {/* Dynamic Connection Paths */}
          <path
            d="M 120 130 C 220 130, 220 70, 320 70"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />
          <path
            d="M 120 130 C 220 130, 220 130, 320 130"
            stroke="currentColor"
            strokeOpacity="0.6"
            strokeWidth="1.5"
          />
          <path
            d="M 120 130 C 220 130, 220 190, 320 190"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />
          <path
            d="M 440 70 C 520 70, 520 50, 600 50"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />
          <path
            d="M 440 70 C 520 70, 520 90, 600 90"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />
          <path
            d="M 440 130 C 520 130, 520 130, 600 130"
            stroke="currentColor"
            strokeOpacity="0.7"
            strokeWidth="1.5"
          />
          <path
            d="M 440 190 C 520 190, 520 170, 600 170"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />
          <path
            d="M 440 190 C 520 190, 520 210, 600 210"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />
          <path
            d="M 720 130 C 800 130, 820 90, 900 90"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />
          <path
            d="M 720 130 C 800 130, 820 170, 900 170"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />

          {/* Node 0: Ingestion Gateway */}
          <g transform="translate(60, 105)">
            <rect fill="#efeded" height="50" rx="4" width="110" />
            <circle cx="20" cy="25" fill="#000000" r="4" />
            <text
              fill="#1b1c1c"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="10"
              fontWeight="600"
              x="32"
              y="22"
            >
              INGRESS
            </text>
            <text
              fill="#444748"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="9"
              x="32"
              y="36"
            >
              HTTP / gRPC
            </text>
          </g>

          {/* Middle Layer Nodes: Planner / Router / State */}
          <g transform="translate(320, 45)">
            <rect
              fill="#ffffff"
              filter="drop-shadow(0 1px 2px rgba(0,0,0,0.05))"
              height="50"
              rx="4"
              stroke="#e5e5e5"
              strokeWidth="1"
              width="120"
            />
            <text
              fill="#1b1c1c"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="10"
              fontWeight="600"
              x="14"
              y="22"
            >
              AGENT_COOR
            </text>
            <text
              fill="#747878"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="9"
              x="14"
              y="36"
            >
              ReAct Loop
            </text>
            <circle cx="106" cy="25" fill="#0051d5" r="3" />
          </g>

          <g transform="translate(320, 105)">
            <rect fill="#1b1c1c" height="50" rx="4" width="120" />
            <text
              fill="#ffffff"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="10"
              fontWeight="600"
              x="14"
              y="22"
            >
              ORBION_CORE
            </text>
            <text
              fill="#bec6e0"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="9"
              x="14"
              y="36"
            >
              State Engine
            </text>
            <circle cx="106" cy="25" fill="#316bf3" r="3" />
          </g>

          <g transform="translate(320, 165)">
            <rect
              fill="#ffffff"
              filter="drop-shadow(0 1px 2px rgba(0,0,0,0.05))"
              height="50"
              rx="4"
              stroke="#e5e5e5"
              strokeWidth="1"
              width="120"
            />
            <text
              fill="#1b1c1c"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="10"
              fontWeight="600"
              x="14"
              y="22"
            >
              RAG_EMBED
            </text>
            <text
              fill="#747878"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="9"
              x="14"
              y="36"
            >
              HNSW Shards
            </text>
            <circle cx="106" cy="25" fill="#0051d5" r="3" />
          </g>

          {/* Execution Workers */}
          <g transform="translate(600, 25)">
            <rect fill="#f5f3f3" height="40" rx="4" width="120" />
            <text
              fill="#1b1c1c"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="10"
              x="12"
              y="24"
            >
              Worker 01: Ingest
            </text>
          </g>
          <g transform="translate(600, 70)">
            <rect fill="#f5f3f3" height="40" rx="4" width="120" />
            <text
              fill="#1b1c1c"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="10"
              x="12"
              y="24"
            >
              Worker 02: Synthesize
            </text>
          </g>
          <g transform="translate(600, 115)">
            <rect fill="#f5f3f3" height="40" rx="4" width="120" />
            <text
              fill="#0051d5"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="10"
              fontWeight="600"
              x="12"
              y="24"
            >
              Worker 03: Telemetry
            </text>
          </g>
          <g transform="translate(600, 160)">
            <rect fill="#f5f3f3" height="40" rx="4" width="120" />
            <text
              fill="#1b1c1c"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="10"
              x="12"
              y="24"
            >
              Worker 04: Vector Search
            </text>
          </g>
          <g transform="translate(600, 205)">
            <rect fill="#f5f3f3" height="40" rx="4" width="120" />
            <text
              fill="#1b1c1c"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="10"
              x="12"
              y="24"
            >
              Worker 05: Evaluation
            </text>
          </g>

          {/* Sinks / Egress */}
          <g transform="translate(900, 65)">
            <rect
              fill="#ffffff"
              filter="drop-shadow(0 1px 2px rgba(0,0,0,0.05))"
              height="50"
              rx="4"
              stroke="#e5e5e5"
              strokeWidth="1"
              width="140"
            />
            <text
              fill="#1b1c1c"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="10"
              fontWeight="600"
              x="14"
              y="22"
            >
              STREAM_OUTPUT
            </text>
            <text
              fill="#747878"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="9"
              x="14"
              y="36"
            >
              SSE / WebSockets
            </text>
          </g>
          <g transform="translate(900, 145)">
            <rect
              fill="#ffffff"
              filter="drop-shadow(0 1px 2px rgba(0,0,0,0.05))"
              height="50"
              rx="4"
              stroke="#e5e5e5"
              strokeWidth="1"
              width="140"
            />
            <text
              fill="#1b1c1c"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="10"
              fontWeight="600"
              x="14"
              y="22"
            >
              PERSISTENCE
            </text>
            <text
              fill="#747878"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="9"
              x="14"
              y="36"
            >
              PostgreSQL + Timescale
            </text>
          </g>
        </svg>
      </div>

      {/* Real-time Terminal Log Ticker */}
      <div className="bg-surface-low rounded p-3 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-on-surface-variant hairline-border">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="text-secondary font-bold">›</span>
          <span className="text-on-surface font-semibold shrink-0">[SYS_LOG]</span>
          <span className="truncate max-w-xl transition-all duration-300">
            {TICKER_MESSAGES[tickerIndex]}
          </span>
        </div>
        <div className="shrink-0 text-on-surface-muted text-[11px]">
          EPOCH_TIME: {epochTime}
        </div>
      </div>
    </div>
  );
};
