/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Rajdhani": ['Rajdhani', 'sans-serif']
      },
      colors: {
        bgProject: 'linear-gradient(359deg, #000, transparent)'
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(.3, 0, .3, 1)'
      }
    },
  },
  plugins: [],
}
