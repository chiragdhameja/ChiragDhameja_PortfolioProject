/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
  
  ],
  theme: {

    screens: {

      'xs': '340px',

      'mob': '389px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

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
