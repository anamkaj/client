/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      mobile: '380px',
      // => @media (min-width: 380px) { ... }
      sm: '480',
      // => @media (min-width: 480px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1366px',
      // => @media (min-width: 1366px) { ... }

      // desktop: '1920px',
      // => @media (min-width: 1920px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-animated')],
}
