/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('daisyui'),require('@tailwindcss/typography'),],
  
  content: ["./src/**/*.{html,js}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'
],
daisyui: {
  styled: true,
  themes: false,
  base: true,
  utils: true,
  logs: true,
  rtl: false,
  prefix: "",
},
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
};
