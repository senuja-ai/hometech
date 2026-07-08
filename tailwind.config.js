/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        steel: {
          50:  '#f0f7fc',
          100: '#daeaf6',
          200: '#b5d5ec',
          300: '#84b8dd',
          400: '#5099cb',
          500: '#2f7db8',
          600: '#21639a',
          700: '#1c507d',
          800: '#1b4468',
          900: '#1a3857',
          950: '#111f33',
        },
        mint: {
          500: '#3da86a',
          600: '#2e9059',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
