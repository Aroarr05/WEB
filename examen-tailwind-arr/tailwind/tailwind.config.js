/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./webs/**/*.{html,js}"], /* webs es una carpeta en el nivel de tailwind.config.js */
  theme: {
    extend: {
      colors: {
        'azulado': '#1f64e5',
        'morado': '#712c76'
      },
      screens:{
        pm:'500px',
      },
    },
  },
  plugins: [],
}

