/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        'LightTheme': {                         
          'primary': '#5FB4F9',                     // Light blue
          'secondary': '#466AA8',                   // Dark blue
          'neutral': '#F3F4F6',                     // Light gray for neutral surfaces
          'base-100': '#FFFFFF',                    // White base color
        },
      },
    ],
  },
}

