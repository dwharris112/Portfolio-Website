import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#151316",
        paper: "#f7f5f1",
        muted: "#6d686d",
        line: "#ded9d3",
        maroon: "#861f41",
        orange: "#e87722"
      },
      boxShadow: {
        lift: "0 18px 50px rgba(28, 20, 23, 0.10)"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
