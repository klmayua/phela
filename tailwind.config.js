/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#050507",
        carbon: "#0A0A0D",
        slate: "#12121A",
        steel: "#1E1E2B",
        ash: "#2B2B39",
        "phela-purple": "#6F46FF",
        "electric-indigo": "#5037DB",
        "neon-sapphire": "#1E88FF",
        "vivid-cyan": "#00E6FF",
        success: "#00D97E",
        warning: "#FFB020",
        danger: "#FF4D6D",
        "text-primary": "#FFFFFF",
        "text-secondary": "#A1A1AA",
        "text-muted": "#6B7280",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Be Vietnam Pro", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        DEFAULT: "12px",
        md: "12px",
        lg: "18px",
        xl: "24px",
      },
      boxShadow: {
        "glow-purple": "0 0 32px rgba(111,70,255,.35)",
        "glow-cyan": "0 0 24px rgba(0,230,255,.25)",
        "glow-purple-lg": "0 0 40px rgba(111,70,255,.45)",
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "neon-flicker": "neon-flicker 1.5s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(111, 70, 255, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(111, 70, 255, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "neon-flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};