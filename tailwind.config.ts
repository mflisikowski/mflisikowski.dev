import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import { isolateInsideOfContainer, scopedPreflightStyles } from "tailwindcss-scoped-preflight";

const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      aspectRatio: {
        ultrawide: "21 / 9",
        standard: "4 / 3",
        photo: "4 / 5",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        cal: ["var(--font-cal)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        dash: {
          to: {
            strokeDashoffset: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        dash: "dash 0.3s ease-out forwards",
      },
    },
  },
  plugins: [
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer([".useTw"]),
    }),
    animate,
  ],
} satisfies Config;

export default config;
