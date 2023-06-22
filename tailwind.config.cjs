/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/spring-time.html",
    "./src/*.js",
  ],
  theme: {
    extend: {
      rotate: {
        '40': '40deg',
        '80': '80deg',
        '120': '120deg',
        '160': '160deg',
        '200': '200deg',
        '240': '240deg',
        '280': '280deg',
      }
    },
  },
  plugins: [],
}
