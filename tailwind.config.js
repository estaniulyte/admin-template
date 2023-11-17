/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      colors: {
        background: '#f8f8f8',
        primary: {
          50: '#e2edff',
          100: '#b1caff',
          200: '#7fa6ff',
          300: '#4d82fe',
          400: '#0B63F8',
          500: '#013CC6',
          600: '#0136b2',
          700: '#002680',
          800: '#00174f',
          900: '#00081f',
        },
        accent: {
          500: '#FFBC0F',
        },
      },
    },
  },
  plugins: [],
};
