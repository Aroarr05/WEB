/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./webs/**/*.{html,js}"], /* webs es una carpeta en el nivel de tailwind.config.js */
  theme: {
  extend: {
    colors:{
      'azul-claro':'#00ffff',
      'azul-oscuro':'#0011ff'
    },
    spacing:{
      '41':'800px;'
    },
    width:{
      '39':'430px'
    },
    height:{
      '39':'333px'
    }
  },
  },
  plugins: [],
 }
 
