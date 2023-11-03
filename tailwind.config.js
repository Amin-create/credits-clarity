/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "green": "#09EC92",
        "dark-blue": "#0E1F3D",
        "gray-1": "#678CC0",
        "gray-2": "#D8DADC",
        "gray-3": "#D2E7E3",
        "gray-4": "#F4F4F4",      
        "gray-5": "#DFDFDF",          
        "gr-a-1": "#1988F1",
        "gr-a-2": "#09EC92",
        "gr-b-1": "#ffffff63",
        "gr-b-2": "#ffffff63",
        "gr-c-1": "#ffffffab",
        "gr-c-2": "#ffffff63",
        "white-1": "#F6FEFB",
      },
      bgGradientDeg: {
        50: '50deg',
      }
    },
  },
  plugins: [],
}