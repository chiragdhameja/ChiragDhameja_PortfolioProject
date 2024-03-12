/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
  
  ],
  theme: {
    extend: {
      colors: {
        'purple-9': '#242038',
        'purple-9.5': '#2e133c',
        'purple-8': '#9067C6',
        'purple-7': '#8D86C9',
        'purple-6': '#CAC4CE',
        'purple-5': '#F7ECE1',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
