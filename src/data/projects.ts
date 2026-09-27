export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  image?: string;
  visualType?: "orbion" | "aircraft" | "ai-mesh" | "assembly-terminal" | "earth-globe";
  badge?: string;
  isFlagship?: boolean;
}

export const projects: Project[] = [
  {
    id: "orbion",
    title: "Orbion",
    tagline: "AI Operating System & Autonomous Workflow Workbench",
    description:
      "An AI Operating System designed to help businesses automate and operate their everyday workflows through intelligent AI systems capable of understanding tasks, making decisions, using tools, and executing workflows.",
    category: "AI OPERATING SYSTEM / WORKBENCH",
    technologies: ["Python", "Next.js", "AI Agents", "WebSockets", "Vector DB"],
    githubUrl: "https://github.com/exobhavinss-sketch",
    image: "/projects/orbion-preview.png",
    badge: "FLAGSHIP",
    isFlagship: true,
  },
  {
    id: "lockheed-martian",
    title: "Lockheed Martian Aircraft Project",
    tagline: "Educational Aircraft Telemetry & Fleet Exploration Platform",
    description:
      "Educational aircraft website showcasing aircraft information, categories, search/filtering, and authentication. Designed with responsive flight telemetry and catalog management.",
    category: "AEROSPACE & FLEET CATALOG",
    technologies: ["HTML", "CSS", "JavaScript", "Supabase", "Vercel"],
    githubUrl: "https://github.com/exobhavinss-sketch/Lockheed-Martian-Project",
    liveDemoUrl: "https://lockheed-martian-project.vercel.app",
    image: "/projects/lockheed-martian-preview.png",
    badge: "LIVE PRODUCTION",
  },
  {
    id: "ai-pathfinder-buddy",
    title: "AI Pathfinder Buddy",
    tagline: "Intelligent Guidance & Career Navigation Engine",
    description:
      "AI-powered project designed to help users explore and navigate their learning and career paths with intelligent guidance, dynamic roadmap nodes, and personalized trajectory recommendations.",
    category: "AI ASSISTANT / GUIDANCE",
    technologies: ["React", "TypeScript", "Supabase", "AI Guidance"],
    githubUrl: "https://github.com/exobhavinss-sketch/ai-pathfinder-buddy-18",
    visualType: "ai-mesh",
    badge: "AI APPLICATION",
  },
  {
    id: "apollo-11",
    title: "Apollo 11 Source Code — Compiled",
    tagline: "Historic Apollo Guidance Computer Source Code Exploration",
    description:
      "A collection of the historic Apollo 11 guidance computer source code, preserved and compiled for exploration and learning. Showcases low-level system architecture and early real-time computing.",
    category: "SYSTEMS & HISTORICAL COMPUTING",
    technologies: ["Assembly", "AGC Architecture", "Embedded Systems"],
    githubUrl: "https://github.com/exobhavinss-sketch/Apollo-11-Source-Code-Compiled",
    visualType: "assembly-terminal",
    badge: "SYSTEMS",
  },
  {
    id: "our-earth",
    title: "Our Earth",
    tagline: "Interactive Geospatial & Planetary Data Platform",
    description:
      "Interactive web project focused on exploring and presenting information about our planet. Built with strict type safety, clean component architecture, and fluid user interactions.",
    category: "GEOSPATIAL & WEB INTERFACE",
    technologies: ["TypeScript", "HTML5", "Modern CSS", "Web APIs"],
    githubUrl: "https://github.com/exobhavinss-sketch/Our-Earth",
    visualType: "earth-globe",
    badge: "FRONTEND",
  },
];
