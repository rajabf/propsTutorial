/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sfPro: 'SF Pro Display',
      },
      padding: {
        165: '165px',
      },
      colors: {
        allBtnClr: 'rgb(83, 109, 253)',
        categoryBg: 'rgb(229, 229, 229)',
        courseBtn: 'rgb(29, 209, 161)'
      },
    },
  },
  plugins: [],
}