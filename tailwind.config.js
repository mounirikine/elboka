/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "Bricolage":["Bricolage Grotesque", "sans-serif"]
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

