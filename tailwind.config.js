/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        colors: {
          primary: '#1E1E2E',
          secondary: '#008CDB', // Blue
          accent: '#F15A4D',    // Red-orange
          'base-100': '#FFFFFF',
          'base-200': '#F3F4F6',
          'base-300': '#D1D5DB',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          mono: ['Fira Code', 'monospace'],
        },
        animation: {
          'gradient-x': 'gradient-x 3s ease infinite',
          'float': 'float 6s ease-in-out infinite',
        },
        keyframes: {
          'gradient-x': {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left center'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center'
            },
          },
          'float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          }
        },
      },
    },
    plugins: [],
    darkMode: 'class',
  }