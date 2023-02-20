/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    colors: {
      blue: '#0473EA',
      lightblue: '#ECF7FF',
      lightpink: '#FFF4FF',
      lightyellow: '#FFF6E9',
      white: '#fff',
      transparent: 'transparent',
      black: '#000',
      green: '#38D200',
      lightgreen: '#E3FFF5',
      gray: '#4B4B4B',
      lightgray: '#9F9F9F',
      ash: '#D5D5D5',
      navyblue: '#001021'
    },
    fontFamily: {
      default: ['Manrope', 'sans-serif'],
    },
    fontWeight: {
      normal: '400',
      medium: '600',
      bold: '700',
      extrabold: '800',
    },
    fontSize: {
      xs: '1rem',
      sm: '1.25rem',
      md: '1.5rem',
      lg: '1.857rem',
      xl: '3.125rem',
      xxl: '5.3125rem'
    },
    extend: {
      lineHeight: {
        96: '96px'
      },
      margin: {
        7: '30px',
        32: '120px',
      }
      
    },
  },
  plugins: [require("daisyui")],
}
