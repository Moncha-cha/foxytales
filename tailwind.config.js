/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'foxy-orange': '#ea580c', // Naše barva pro lišku
        'foxy-dark': '#0f172a',   // "Edgy" tmavé pozadí pro šetření očí
      },
    },
  },
  plugins: [],
}