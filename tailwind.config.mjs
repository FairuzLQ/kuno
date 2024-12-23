/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF', // white as primary
        secondary: '#000000', // black as secondary
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'], // Default font as Nunito
      },
    },
  },
  plugins: [],
};
