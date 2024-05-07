/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-black": "#191919",
        "accent-black-gray": "#141414",
        "accent-orange": "#d87d4a",
        "accent-orange-hover": "#fbaf85",
        "accent-grey": "rgba(0,0,0,0.5)",
      },
      borderRadius: {
        "radius": "0.5rem"
      }
    },
  },
  plugins: [],
};