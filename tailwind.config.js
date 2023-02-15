/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'sans' : "'Manrope', sans-serif"
      },
      colors: {
        'AGA-green' : 'hsl(150, 100%, 66%)',
        'AGA-light' : 'hsl(193, 38%, 86%)',
        'AGA-blue-dark' : 'hsl(218, 23%, 16%)',
        'AGA-blue-medium' : 'hsl(217, 19%, 24%)',
        'AGA-blue-ligth' : 'hsl(217, 19%, 38%)'
      },
      animation: {
        spin : 'spin 4s linear infinite'
      }
    },
  },
  plugins: [],
}
