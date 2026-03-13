/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#3b82f6', // blue-500 for buttons/highlights
        dark: {
          100: '#1e293b',
          200: '#0f172a',
          300: '#020617',
        },
        light: {
          100: '#f8fafc',
          200: '#e2e8f0',
        }
      }
    },
  },
  plugins: [],
}
