/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#2b7c5f',
        tertiary: '#091913'
      },
      fontFamily: {
        'opensans': ["Open Sans", " sans-serif"],
        'titiliumweb': ["Titillium Web", " sans-serif"]
      },

    },
  },

  plugins: [],
}

