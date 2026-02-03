/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d3748', // blue-gray
          light: '#4a5568',
          dark: '#1a202c',
        },
        accent: {
          DEFAULT: '#eab308', // gold accent
        },
        background: {
          DEFAULT: '#f7fafc', // light neutral
        },
      },
    },
  },
  plugins: [],
}