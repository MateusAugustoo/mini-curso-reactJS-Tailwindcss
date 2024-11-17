/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      width: {
        'card': '28.25rem',
        'container-form': '36.688rem'
      },
      boxShadow: {
        'custom': '0px 1px 3px 5px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}

