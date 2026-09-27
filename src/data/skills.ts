export interface SkillCategory {
  title: string;
  categoryNumber: string;
  description: string;
  skills: {
    name: string;
    focus: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    categoryNumber: "01",
    description:
      "Engineering agentic systems, tool-calling coordination, and intelligent workflow models.",
    skills: [
      { name: "AI Agents & Agentic Systems", focus: "Tool Loops & Workflows" },
      { name: "Machine Learning Foundations", focus: "Models & Data Science" },
      { name: "Prompt Engineering", focus: "Advanced Architectures" },
      { name: "RAG & Vector Retrieval", focus: "Knowledge Augmentation" },
      { name: "AI Automation", focus: "Autonomous Workflows" },
    ],
  },
  {
    title: "Full-Stack Development",
    categoryNumber: "02",
    description:
      "Modern client-server engineering with strict type safety and high-density user ergonomics.",
    skills: [
      { name: "TypeScript & JavaScript", focus: "Strict Type Safety" },
      { name: "React & Next.js", focus: "Modern Component State" },
      { name: "Tailwind CSS & Design Tokens", focus: "Zero-Runtime Systems" },
      { name: "HTML5 & Modern CSS", focus: "Semantic Web Standards" },
      { name: "Responsive Interface Design", focus: "Cross-Device Polish" },
    ],
  },
  {
    title: "Backend & Systems",
    categoryNumber: "03",
    description:
      "Scalable server logic, data persistence, and low-latency API architecture.",
    skills: [
      { name: "Backend Engineering", focus: "APIs & Services" },
      { name: "Python", focus: "Core Logic & AI Stack" },
      { name: "Supabase & PostgreSQL", focus: "Relational & Real-Time" },
      { name: "C & C++ (OOP)", focus: "Systems & DSA Foundations" },
      { name: "Assembly", focus: "Low-Level Guidance Architecture" },
    ],
  },
  {
    title: "Cloud & System Design",
    categoryNumber: "04",
    description:
      "Distributed architecture, cloud infrastructure, automation, and tech entrepreneurship.",
    skills: [
      { name: "Cloud Technologies", focus: "Cloud Architecture" },
      { name: "System Design", focus: "Scalable Architecture" },
      { name: "Automation & CI/CD", focus: "Deterministic Pipelines" },
      { name: "Git & Version Control", focus: "Collaborative Workflows" },
      { name: "Entrepreneurship & Leadership", focus: "Product Strategy & Vision" },
    ],
  },
];
