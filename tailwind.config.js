const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"noto sans"', ...defaultTheme.fontFamily.sans],
        'headers': ['"bakbak one"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

