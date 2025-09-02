/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Astaken: ["Astaken", "sans-serif"],
        Briliond: ["Briliond", "sans-serif"],
        GoldBadge: ["GoldBadge", "sans-serif"],
        LostaMasta: ["Losta_Masta", "sans-serif"],
        Zambeza: ["Zambeza", "sans-serif"],
      },
    },
  },
  plugins: [],
};
