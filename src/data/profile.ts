export interface SocialLink {
  name: string;
  url: string;
  displayValue: string;
  type: "github" | "linkedin" | "instagram" | "x" | "gmail" | "yahoo" | "phone";
  ariaLabel: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  positioning: string;
  heroHeadline: string;
  heroSubheadline: string;
  currentRole: string;
  company: string;
  companyRole: string;
  education: {
    degree: string;
    specialization: string;
    university: string;
    location: string;
  };
  vision: string;
  coreThesis: string;
  focusAreas: string[];
  socialLinks: SocialLink[];
  availabilityStatus: string;
  systemStatus: string;
}

export const profileData: ProfileData = {
  name: "Bhavin Shankur",
  tagline: "AI/ML Developer • Full-Stack Developer • Builder",
  positioning: "Co-Founder & CEO of Orbion • B.Tech CSE (AI & ML)",
  heroHeadline: "I build intelligent software and digital products.",
  heroSubheadline:
    "AI/ML and full-stack developer focused on turning ideas into useful, scalable technology. Engineering agentic systems, real-time distributed telemetry, and high-craft human interfaces.",
  currentRole: "Co-Founder & CEO",
  company: "Orbion",
  companyRole: "Co-Founder & CEO of Orbion",
  education: {
    degree: "B.Tech",
    specialization: "Computer Science & Engineering (AI & ML)",
    university: "MIT Vishwaprayag University",
    location: "Solapur, India",
  },
  vision:
    "I believe the next generation of businesses will not rely only on traditional software. They will work alongside intelligent AI systems capable of understanding tasks, making decisions, using tools, and executing workflows. Orbion is my attempt to build toward that future.",
  coreThesis:
    "I am a software engineer focused on building at the intersection of machine intelligence and human ergonomics. My engineering practice rejects vanity abstractions in favor of deterministic state models, resilient distributed data layers, and surgical frontend execution.",
  focusAreas: [
    "Artificial Intelligence & Machine Learning",
    "AI Agents and Agentic Systems",
    "Full-Stack Development",
    "Backend Engineering",
    "Cloud Technologies",
    "Automation",
    "System Design",
    "Entrepreneurship",
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/exobhavinss-sketch",
      displayValue: "github.com/exobhavinss-sketch",
      type: "github",
      ariaLabel: "Visit Bhavin Shankur's GitHub Profile",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bhavin-shankur-8421a0371",
      displayValue: "linkedin.com/in/bhavin-shankur",
      type: "linkedin",
      ariaLabel: "Connect with Bhavin Shankur on LinkedIn",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/BhavinShankur",
      displayValue: "@BhavinShankur",
      type: "x",
      ariaLabel: "Follow Bhavin Shankur on X (Twitter)",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/bhavinnh/",
      displayValue: "@bhavinnh",
      type: "instagram",
      ariaLabel: "Follow Bhavin Shankur on Instagram",
    },
    {
      name: "Personal Gmail",
      url: "mailto:exobhavinss@gmail.com",
      displayValue: "exobhavinss@gmail.com",
      type: "gmail",
      ariaLabel: "Email Bhavin Shankur via Gmail",
    },
    {
      name: "Yahoo Mail",
      url: "mailto:bhavinshankur.tech@yahoo.com",
      displayValue: "bhavinshankur.tech@yahoo.com",
      type: "yahoo",
      ariaLabel: "Email Bhavin Shankur via Yahoo Mail",
    },
    {
      name: "Phone",
      url: "tel:+919579111964",
      displayValue: "+91 95791 11964",
      type: "phone",
      ariaLabel: "Call Bhavin Shankur via phone",
    },
  ],
  availabilityStatus: "Available for ambitious projects",
  systemStatus: "SYSTEM: ONLINE / ACCEPTING COLLABORATIONS 2026",
};
