/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./projects/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      sans: ['Sora', 'sans-serif'],
      display: ['Heebo', 'sans-serif'],
      mono: ['JetBrains Mono', 'mono'],
    },
    extend: {
      colors: {
        blue: {
          50: '#f6f8fd',
          100: '#eaeefb',
          200: '#dde4f8',
          300: '#bfcdf2',
          400: '#99afeb',
          500: '#7794e4',
          600: '#4c73db',
          700: '#2852c8',
          800: '#2144a6',
          900: '#1d3c91',
        },
      },
    },
  },
  plugins: [],
};
