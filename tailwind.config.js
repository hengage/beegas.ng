/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    './objectives.html', 
    './about.html'
  ],

  theme: {
    extend: {
      colors: {
        "primary": "#2d3191" ,
        "secondary": "#e78e26",
        "textcolor1": "#3b3333",
        "textcolor2": "#606060",
      },
      screens: {
        'mdlg': '915px'
      }
    },
  },
  plugins: [],
}
