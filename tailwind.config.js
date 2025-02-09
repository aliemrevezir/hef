/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1976d2',
          dark: '#115293',
          light: '#4791db',
        },
        secondary: {
          DEFAULT: '#4caf50',
          dark: '#357a38',
          light: '#6fbf73',
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

