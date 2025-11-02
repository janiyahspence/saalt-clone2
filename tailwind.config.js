/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          50: '#f0f7f3',
          100: '#daeee0',
          200: '#b5ddc1',
          300: '#88c59e',
          400: '#5ba87b',
          500: '#3d8b60',
          600: '#2d6e4b',
          700: '#1a472a',
          800: '#163a23',
          900: '#12301d',
        },
        secondary: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#ebe1d1',
          300: '#e0d1b9',
          400: '#d4a574',
          500: '#c89356',
          600: '#b67d3e',
          700: '#9a6633',
          800: '#7d522a',
          900: '#664322',
        },
        accent: {
          50: '#f5f1ed',
          100: '#e8dfd5',
          200: '#d1bfab',
          300: '#ba9f81',
          400: '#a37f57',
          500: '#8B4513',
          600: '#7a3d10',
          700: '#68350e',
          800: '#562c0b',
          900: '#442309',
        },
      },
      lineHeight: {
        'heading': '1.2',
        'body': '1.5',
      },
    },
  },
  plugins: [],
};
