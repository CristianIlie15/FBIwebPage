/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        AR: ['AR One Sans', 'sans-serif'],
        Kanit: ['Kanit', 'sans-serif'],
      },
      backgroundImage: {
        BAU : ['./src/images/divisions/BAU.png'],
        CD : ['./src/images/divisions/CD.png'],
        CIRG: ['./src/images/divisions/CIRG.png'],
        ACTION: ['./src/images/action/action-bg.png']
      },
      screens: {
        md2: '1492px',
        lg: '1690px',
      },
    },
  },
  plugins: [],
}