/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk}"],
  theme: {
    extend: {
      container:{
        center:true,
      
        
      }
    },
  },plugins: [require('tailwindcss-motion')],
}