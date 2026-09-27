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
};

export const metadata: Metadata = {
  title: "Bhavin Shankur — AI/ML Developer & Full-Stack Developer",
  description:
    "Bhavin Shankur is Co-Founder & CEO of Orbion and a B.Tech CSE (AI & ML) student building intelligent AI operating systems, real-time telemetry, and resilient software.",
  keywords: [
    "Bhavin Shankur",
    "Orbion",
    "AI/ML Developer",
    "Full-Stack Developer",
    "AI Operating System",
    "Autonomous Agents",
    "Software Engineer",
  ],
  authors: [{ name: "Bhavin Shankur" }],
  creator: "Bhavin Shankur",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/monogram.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhavinshankur.dev",
    title: "Bhavin Shankur — AI/ML Developer & Full-Stack Developer",
    description:
      "Co-Founder & CEO of Orbion. Building intelligent software, agentic systems, and real-time distributed telemetry.",
    siteName: "Bhavin Shankur Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavin Shankur — AI/ML Developer & Full-Stack Developer",
    description:
      "Co-Founder & CEO of Orbion. Building intelligent software, agentic systems, and real-time distributed telemetry.",
    creator: "@BhavinShankur",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-on-surface min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
