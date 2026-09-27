export interface Milestone {
  period: string;
  role: string;
  organization: string;
  tag: string;
  description: string;
  bulletPoints: string[];
}

export const journeyMilestones: Milestone[] = [
  {
    period: "2026 — PRESENT",
    role: "Co-Founder & CEO",
    organization: "Orbion",
    tag: "STARTUP / FOUNDER",
    description:
      "Leading the design and engineering of Orbion — an AI Operating System built to automate and operate everyday business workflows through intelligent agentic software.",
    bulletPoints: [
      "Architecting autonomous multi-agent tool loops & state machines",
      "Designing deterministic runtime coordination for complex workflows",
      "Building accessible intelligent systems for real-world enterprise utility",
    ],
  },
  {
    period: "2024 — PRESENT",
    role: "B.Tech CSE (AI & ML) Candidate",
    organization: "MIT Vishwaprayag University, Solapur",
    tag: "ACADEMICS",
    description:
      "Pursuing Computer Science & Engineering with specialized focus in Artificial Intelligence and Machine Learning, combining foundational theory with hands-on systems implementation.",
    bulletPoints: [
      "Rigorous foundations in Data Structures, Algorithms, and OOP",
      "Deep exploration of machine learning pipelines and agentic design",
      "Proactive self-driven learning by authoring open-source codebases",
    ],
  },
  {
    period: "EARLY ORIGINS — 2024",
    role: "Student Developer & Systems Enthusiast",
    organization: "Independent Exploration",
    tag: "ORIGIN STORY",
    description:
      "Started as a student with curiosity for programming and technology. Over time, that curiosity evolved into a larger ambition: creating software products that businesses and people can actually use.",
    bulletPoints: [
      "Mastered foundational C, C++, Assembly, and modern web architectures",
      "Decided not to wait until graduation to build tangible products",
      "Founded Orbion as the first major step in that long-term journey",
    ],
  },
];

export const currentFocusAreas = [
  {
    title: "Artificial Intelligence & ML",
    detail: "Model integration, neural architectures, and applied data science.",
  },
  {
    title: "AI Agents & Agentic Systems",
    detail: "ReAct loops, autonomous tool-calling, and stateful memory graphs.",
  },
  {
    title: "Full-Stack Development",
    detail: "Modern React 19, Next.js App Router, TypeScript, and clean UI engineering.",
  },
  {
    title: "Backend Engineering",
    detail: "High-throughput APIs, streaming protocols, and low-latency services.",
  },
  {
    title: "Cloud Technologies",
    detail: "Containerization, cloud infrastructure, and distributed computing.",
  },
  {
    title: "Automation",
    detail: "Workflow orchestration, deterministic pipelines, and autonomous execution.",
  },
  {
    title: "System Design",
    detail: "Modular architecture, zero-drift state management, and scalability.",
  },
  {
    title: "Entrepreneurship",
    detail: "Translating cutting-edge AI research into viable global products.",
  },
];
