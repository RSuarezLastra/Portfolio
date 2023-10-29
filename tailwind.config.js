/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        seance: {
          '50': '#fbf5ff',
          '100': '#f6e7ff',
          '200': '#efd4ff',
          '300': '#e3b2ff',
          '400': '#d180ff',
          '500': '#bf50fc',
          '600': '#ae2df0',
          '700': '#971dd3',
          '800': '#841eb3',
          '900': '#67198a',
          '950': '#490467',
        },
        shark: {
          '50': '#f7f7f8',
          '100': '#f0eef0',
          '200': '#dcdadd',
          '300': '#bdb9c0',
          '400': '#9a939d',
          '500': '#7d7681',
          '600': '#675f6a',
          '700': '#544e56',
          '800': '#474349',
          '900': '#3e3a40',
          '950': '#2f2c30',
      },
      },
    },
  },
  plugins: [],
}

