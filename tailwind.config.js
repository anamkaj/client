/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      mobile: '380px',
      // => @media (min-width: 640px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '800px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1366px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1920',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-animated')],
}
