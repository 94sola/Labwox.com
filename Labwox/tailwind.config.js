/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatSlow: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        floatFast: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-25px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-fast': 'floatFast 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
