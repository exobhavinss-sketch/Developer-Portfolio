import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#fbf9f9",
        surface: {
          DEFAULT: "#ffffff",
          canvas: "#fbf9f9",
          low: "#f5f3f3",
          container: "#efeded",
          high: "#e9e8e7",
          highest: "#e3e2e2",
          dim: "#dbdad9",
        },
        "on-surface": {
          DEFAULT: "#1b1c1c",
          variant: "#444748",
          muted: "#747878",
        },
        primary: {
          DEFAULT: "#111111",
          hover: "#222222",
          foreground: "#ffffff",
          container: "#1c1b1b",
        },
        secondary: {
          DEFAULT: "#0051d5",
          hover: "#0041b0",
          blue: "#2563eb",
          container: "#316bf3",
          fixed: "#dbe1ff",
          "on-fixed": "#00174b",
        },
        border: {
          DEFAULT: "#e5e5e5",
          subtle: "#efeded",
          strong: "#747878",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Geist", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.02em",
        widest: "0.08em",
      },
      borderRadius: {
        xs: "0.125rem", // 2px
        sm: "0.25rem",  // 4px
        DEFAULT: "0.25rem",
        md: "0.375rem", // 6px
        lg: "0.5rem",   // 8px
        xl: "0.75rem",  // 12px
        full: "9999px",
      },
      maxWidth: {
        container: "1360px",
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
