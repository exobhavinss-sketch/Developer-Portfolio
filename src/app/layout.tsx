import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#fbf9f9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bhavinshankur.dev"),
  title: {
    default: "Bhavin Shankur — AI/ML Developer & Full-Stack Developer",
    template: "%s | Bhavin Shankur",
  },
  description:
    "Bhavin Shankur is Co-Founder & CEO of Orbion and a B.Tech CSE (AI & ML) student at MIT Vishwaprayag University, Solapur. Engineering intelligent AI systems, autonomous agents, and real-time distributed software.",
  keywords: [
    "Bhavin Shankur",
    "Orbion",
    "AI/ML Developer",
    "Full-Stack Developer",
    "AI Operating System",
    "Autonomous Agents",
    "Agentic Systems",
    "Software Engineer",
    "MIT Vishwaprayag University",
    "Solapur",
    "Next.js Developer",
    "TypeScript Developer",
  ],
  authors: [{ name: "Bhavin Shankur", url: "https://bhavinshankur.dev" }],
  creator: "Bhavin Shankur",
  publisher: "Bhavin Shankur",
  formatDetection: {
    email: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/monogram.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/monogram.svg",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://bhavinshankur.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhavinshankur.dev",
    title: "Bhavin Shankur — AI/ML Developer & Full-Stack Developer",
    description:
      "Co-Founder & CEO of Orbion. Building intelligent AI operating systems, autonomous agents, and full-stack software with technical precision.",
    siteName: "Bhavin Shankur Portfolio",
    images: [
      {
        url: "/projects/orbion-preview.png",
        width: 1200,
        height: 630,
        alt: "Bhavin Shankur — AI/ML & Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavin Shankur — AI/ML Developer & Full-Stack Developer",
    description:
      "Co-Founder & CEO of Orbion. Building intelligent AI operating systems, autonomous agents, and full-stack software with technical precision.",
    creator: "@BhavinShankur",
    images: ["/projects/orbion-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://bhavinshankur.dev/#person",
        name: "Bhavin Shankur",
        url: "https://bhavinshankur.dev",
        jobTitle: "Co-Founder & CEO",
        worksFor: {
          "@type": "Organization",
          name: "Orbion",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "MIT Vishwaprayag University, Solapur",
        },
        sameAs: [
          "https://github.com/exobhavinss-sketch",
          "https://www.linkedin.com/in/bhavin-shankur-8421a0371",
          "https://x.com/BhavinShankur",
          "https://www.instagram.com/bhavinnh/",
        ],
        knowsAbout: [
          "Artificial Intelligence",
          "Machine Learning",
          "Autonomous Agents",
          "Full-Stack Development",
          "Software Engineering",
          "System Design",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://bhavinshankur.dev/#website",
        url: "https://bhavinshankur.dev",
        name: "Bhavin Shankur — AI/ML Developer & Full-Stack Developer",
        publisher: {
          "@id": "https://bhavinshankur.dev/#person",
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-on-surface min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
