export interface Certification {
  id: string;
  title: string;
  issuer: string;
  platform: string;
  category: "ai-ml" | "programming" | "cloud-infra" | "prompt-genai" | "cybersecurity" | "professional";
}

export const certificationCategories = [
  { id: "all", label: "All Credentials" },
  { id: "ai-ml", label: "AI & Machine Learning" },
  { id: "prompt-genai", label: "Prompt Engineering & GenAI" },
  { id: "programming", label: "Programming & DSA" },
  { id: "cloud-infra", label: "Cloud & Infrastructure" },
  { id: "cybersecurity", label: "Cybersecurity & Systems" },
  { id: "professional", label: "Professional & Foundations" },
] as const;

export const certifications: Certification[] = [
  // Prompt Engineering & GenAI
  {
    id: "cert-01",
    title: "Advanced Prompt Engineering for Everyone",
    issuer: "Vanderbilt University",
    platform: "Coursera",
    category: "prompt-genai",
  },
  {
    id: "cert-08",
    title: "Claude Code in Action",
    issuer: "Anthropic",
    platform: "Coursera",
    category: "prompt-genai",
  },
  {
    id: "cert-24",
    title: "Prompt Engineering for ChatGPT",
    issuer: "Vanderbilt University",
    platform: "Coursera",
    category: "prompt-genai",
  },
  {
    id: "cert-22",
    title: "OpenAI GPTs: Creating Your Own Custom AI Assistants",
    issuer: "Vanderbilt University",
    platform: "Coursera",
    category: "prompt-genai",
  },
  {
    id: "cert-11",
    title: "Design Prompts for Everyday Work Tasks",
    issuer: "Google",
    platform: "Coursera",
    category: "prompt-genai",
  },
  {
    id: "cert-28",
    title: "Start Writing Prompts like a Pro",
    issuer: "Google",
    platform: "Coursera",
    category: "prompt-genai",
  },
  {
    id: "cert-16",
    title: "Gen AI: Beyond the Chatbot",
    issuer: "Google Cloud",
    platform: "Coursera",
    category: "prompt-genai",
  },
  {
    id: "cert-17",
    title: "Generative AI Content Creation",
    issuer: "Adobe",
    platform: "Coursera",
    category: "prompt-genai",
  },
  {
    id: "cert-06",
    title: "ChatGPT: Master Free AI Tools to Supercharge Productivity",
    issuer: "Coursera Project Network",
    platform: "Coursera",
    category: "prompt-genai",
  },

  // AI & Machine Learning
  {
    id: "cert-02",
    title: "AI Infrastructure and Operations Fundamentals",
    issuer: "NVIDIA",
    platform: "Coursera",
    category: "ai-ml",
  },
  {
    id: "cert-03",
    title: "Artificial Intelligence on Microsoft Azure",
    issuer: "Microsoft",
    platform: "Coursera",
    category: "ai-ml",
  },
  {
    id: "cert-19",
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    platform: "Cisco",
    category: "ai-ml",
  },
  {
    id: "cert-25",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    platform: "Coursera",
    category: "ai-ml",
  },
  {
    id: "cert-13",
    title: "Ethics in AI",
    issuer: "MIT Vishwaprayag University",
    platform: "Coursera",
    category: "ai-ml",
  },
  {
    id: "cert-26",
    title: "Yuva AI for All",
    issuer: "TCS iON",
    platform: "Yuva AI for All",
    category: "ai-ml",
  },
  {
    id: "cert-30",
    title: "Yuva AI for All",
    issuer: "nasscom FutureSkills Prime / IT-ITeS SSC",
    platform: "nasscom",
    category: "ai-ml",
  },

  // Programming & DSA
  {
    id: "cert-10",
    title: "Data Structures and Algorithms (DSA) — 3 Months Training",
    issuer: "INTELLISE IT",
    platform: "INTELLISE IT",
    category: "programming",
  },
  {
    id: "cert-04",
    title: "C Programming Language — 3 Months Training",
    issuer: "INTELLISE IT",
    platform: "INTELLISE IT",
    category: "programming",
  },
  {
    id: "cert-05",
    title: "C++ (OOP) Programming Language — 3 Months Training",
    issuer: "INTELLISE IT",
    platform: "INTELLISE IT",
    category: "programming",
  },
  {
    id: "cert-14",
    title: "Exploring C",
    issuer: "University of Michigan",
    platform: "Coursera",
    category: "programming",
  },
  {
    id: "cert-21",
    title: "Introduction to Programming with MATLAB",
    issuer: "Vanderbilt University",
    platform: "Coursera",
    category: "programming",
  },
  {
    id: "cert-29",
    title: "Web Designing using HTML and CSS — 2-Month Training & Internship",
    issuer: "INTELLISE IT",
    platform: "INTELLISE IT",
    category: "programming",
  },

  // Cloud & Infrastructure
  {
    id: "cert-23",
    title: "Oracle Cloud Infrastructure Foundations",
    issuer: "Oracle",
    platform: "Coursera",
    category: "cloud-infra",
  },
  {
    id: "cert-20",
    title: "Introduction to Networking",
    issuer: "NVIDIA",
    platform: "Coursera",
    category: "cloud-infra",
  },

  // Cybersecurity & Systems
  {
    id: "cert-15",
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    platform: "Coursera",
    category: "cybersecurity",
  },

  // Professional & Foundations
  {
    id: "cert-12",
    title: "Effective Problem-Solving and Decision-Making",
    issuer: "University of California, Irvine",
    platform: "Coursera",
    category: "professional",
  },
  {
    id: "cert-27",
    title: "Speed Up Data Analysis and Presentation Building",
    issuer: "Google",
    platform: "Coursera",
    category: "professional",
  },
  {
    id: "cert-18",
    title: "Google Ads for Beginners",
    issuer: "Coursera Project Network",
    platform: "Coursera",
    category: "professional",
  },
  {
    id: "cert-09",
    title: "Create a Website with MailChimp",
    issuer: "Coursera Project Network",
    platform: "Coursera",
    category: "professional",
  },
  {
    id: "cert-07",
    title: "Revisiting Chemistry: Preparatory Course for ACE-AS1201",
    issuer: "MIT Vishwaprayag University",
    platform: "Coursera",
    category: "professional",
  },
];
