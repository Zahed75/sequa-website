/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    colors: {
      blue: '#0473EA',
      lightblue: '#ECF7FF',
      lightblue2: '#E3FFF5',
      lightsky: '#DFF7FF',
      lightpink: '#FFF4FF',
      lightpink2: '#FFF6E9',
      lightyellow: '#FFF6E9',
      white: '#fff',
      transparent: 'transparent',
      black: '#151515',
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
      xs: '0.9rem',
      sm: '1rem',
      md: '1.25rem',
      lg: '1.5rem',
      '2lg': '1.858rem',
      xl: '2.5rem',
      xxl: '4.5rem'
    },
    extend: {
      lineHeight: {
        96: '96px'
      },
      margin: {
        7: '30px',
        32: '120px',
      },
      dropShadow: {
        'lg': '0px 12px 44px rgba(16, 24, 40, 0.15)',
        'md': '0px 12px 44px rgba(16, 24, 40, 0.08)'
      }
    },
  },
  plugins: [],
}
