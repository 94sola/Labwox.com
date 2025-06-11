/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatxy: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(20px, -10px)' },
          '50%': { transform: 'translate(-15px, 20px)' },
          '75%': { transform: 'translate(10px, -15px)' },
        },
        colorRotate: {
          '0%, 100%': { stroke: 'teal' },
          '25%': { stroke: 'orange' },
          '50%': { stroke: 'purple' },
          '75%': { stroke: 'dodgerblue' },
        },
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        floatxy: 'floatxy 10s ease-in-out infinite',
        strokeColor: 'colorRotate 8s linear infinite',
        spinSlow: 'rotate360 20s linear infinite',
      },
    },
  },
  plugins: [],
};
