/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#111315',
          gray: '#1f2124',
          light: '#f7f7f7',
          yellow: '#f7c600',
          accent: '#ffd60a',
          black: '#0b0c0e',
          white: '#ffffff'
        }
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};

