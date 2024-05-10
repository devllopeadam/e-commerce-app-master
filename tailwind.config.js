/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "pattern": "url(/src/assets/pattern/pattern-circles.svg)",
        "speaker": "url(/src/assets/images/speaker-table-overview.jpg)"
      },
      colors: {
        "accent-black": "#191919",
        "accent-black-gray": "#141414",
        "accent-orange": "#d87d4a",
        "accent-orange-hover": "#fbaf85",
        "accent-grey": "rgba(0,0,0,0.5)",
        "white-grey": "#f1f1f1"
      },
      borderRadius: {
        "radius": "0.5rem"
      }
    },
  },
  plugins: [],
};