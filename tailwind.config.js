/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "green": "#09EC92",
        "green-2": "#29c185",
        "green-3": "#29976c",
        "green-4": "#09EC92",
        "dark-blue": "#0E1F3D",
        "gray-1": "#678CC0",
        "gray-2": "#D8DADC",
        "gray-3": "#D2E7E3",
        "gray-4": "#F4F4F4",      
        "gray-5": "#DFDFDF",          
        "gray-6": "#DFE5E4",          
        "gr-a-1": "#1988F1",
        "gr-a-2": "#09EC92",
        "gr-b-1": "#ffffff63",
        "gr-b-2": "#ffffff63",
        "gr-c-1": "#ffffffab",
        "gr-c-2": "#ffffff63",
        "white-1": "#F6FEFB",
        "white-2": "#ffffffab",
      },
      bgGradientDeg: {
        50: '50deg',
      }
    },
    screens: {
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
    }
  },
  plugins: [],
}