/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'chartreuse': {
          '50': '#feffe4',
          '100': '#fcffc4',
          '200': '#f7ff90',
          '300': '#ecff50',
          '400': '#daff01',
          '500': '#bfe600',
          '600': '#94b800',
          '700': '#6f8b00',
          '800': '#586d07',
          '900': '#4a5c0b',
          '950': '#263400',
        },
        'ultramarine': {
          '50': '#f0f1ff',
          '100': '#e4e5ff',
          '200': '#cdcfff',
          '300': '#a6a7ff',
          '400': '#7973ff',
          '500': '#4e3bff',
          '600': '#3914ff',
          '700': '#2601ff',
          '800': '#2001d6',
          '900': '#1c03af',
          '950': '#0c0077',
        },
      },
      
    },
  },
  plugins: [],
}

