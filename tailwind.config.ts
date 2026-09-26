import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        background: "#FFFDF5",
        foreground: "#1E293B",
        muted: "#F1F5F9",
        "muted-foreground": "#64748B",
        accent: {
          DEFAULT: "#8B5CF6",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F472B6",
          foreground: "#1E293B",
        },
        tertiary: {
          DEFAULT: "#FBBF24",
          foreground: "#1E293B",
        },
        quaternary: {
          DEFAULT: "#34D399",
          foreground: "#1E293B",
        },
        border: "#E2E8F0",
        input: "#FFFFFF",
        ring: "#8B5CF6",
        card: "#FFFFFF",
      },
      fontFamily: {
        heading: ["Outfit", "system-ui", "sans-serif"],
        body: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Scale ratio 1.25 (Major Third)
        xs: ["0.64rem", { lineHeight: "1.5" }],
        sm: ["0.8rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.6" }],
        lg: ["1.25rem", { lineHeight: "1.5" }],
        xl: ["1.5625rem", { lineHeight: "1.4" }],
        "2xl": ["1.953rem", { lineHeight: "1.3" }],
        "3xl": ["2.441rem", { lineHeight: "1.2" }],
        "4xl": ["3.052rem", { lineHeight: "1.1" }],
        "5xl": ["3.815rem", { lineHeight: "1.05" }],
        "6xl": ["4.768rem", { lineHeight: "1" }],
      },
      borderRadius: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        blob: "24px 24px 24px 0",
        arch: "9999px 9999px 0 0",
      },
      borderWidth: {
        DEFAULT: "2px",
      },
      boxShadow: {
        pop: "4px 4px 0px 0px #1E293B",
        "pop-hover": "6px 6px 0px 0px #1E293B",
        "pop-active": "2px 2px 0px 0px #1E293B",
        sticker: "8px 8px 0px 0px #E2E8F0",
        "sticker-pink": "8px 8px 0px 0px #F472B6",
        "sticker-violet": "8px 8px 0px 0px #8B5CF6",
        "sticker-yellow": "8px 8px 0px 0px #FBBF24",
        "sticker-mint": "8px 8px 0px 0px #34D399",
      },
      transitionTimingFunction: {
        "bounce-out": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(3deg)" },
          "75%": { transform: "rotate(-3deg)" },
        },
        "pop-in": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.4s ease-in-out",
        "pop-in": "pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        marquee: "marquee 30s linear infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config