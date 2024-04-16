/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sans:['Inter','sans-serif'], 
                rale:['Raleway','sans-serif'], 
              },
      },
    },
    daisyui: {
        themes: ["light", "dark", "cupcake"],
      },
    plugins: [],
  }