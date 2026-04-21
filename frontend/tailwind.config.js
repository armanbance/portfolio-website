/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
        display: ["Fraunces", "Georgia", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        cream: {
          DEFAULT: "#F6F3EC",
          50: "#FBF9F4",
          100: "#F6F3EC",
          200: "#EEE8DC",
        },
        ink: {
          DEFAULT: "#0E1A2B",
          900: "#0E1A2B",
          700: "#243041",
          500: "#4A5260",
        },
        terracotta: {
          DEFAULT: "#B86B4A",
          light: "#D08966",
          dark: "#9A5438",
        },
        taupe: {
          DEFAULT: "#7A6F5A",
          light: "#A89E8A",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
      },
      lineHeight: {
        relaxed: "1.7",
      },
    },
  },
  plugins: [],
};
