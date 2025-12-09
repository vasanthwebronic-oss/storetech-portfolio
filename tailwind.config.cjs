/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        inter: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },

      colors: {
        // Base colors from your CSS
        black: "#000000",
        white: "#ffffff",

        // Grays
        "gray-900": "#111827",
        "gray-800": "#1f2937",
        "gray-700": "#374151",
        "gray-600": "#4b5563",
        "gray-400": "#9ca3af",
        "gray-300": "#d1d5db",
        "gray-200": "#e5e7eb",
        "gray-50": "#f9fafb",

        // Brand Greens (from your CSS)
        "brand-green": "#37c659",
        "brand-green-500": "#37c659",

        // Extra brand colors from last part of CSS
        "brand-green-2": "#84d658",
        "brand-black": "#050505",
        "brand-white": "#ffffff",
        "text-dark": "#1a1a1a",
        "bg-gray": "#f5f5f5",
      },

      // Shadows similar to your cards & hover glow
      boxShadow: {
        "soft": "0 1px 3px rgba(0,0,0,0.1)",
        "card": "0 10px 15px rgba(0,0,0,0.1)",
        "card-lg": "0 20px 25px rgba(0,0,0,0.1)",
      },

      backdropBlur: {
        sm: "4px",
      },

      transitionTimingFunction: {
        "bounce-smooth": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
      },
    },
  },

  plugins: [],
};
