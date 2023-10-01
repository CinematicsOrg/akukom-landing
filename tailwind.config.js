import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      'medium': '550px',
      "mdPro":"870px",
      "mdLite": "970px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}

