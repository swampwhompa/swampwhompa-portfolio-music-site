/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        'grey-green': '#72817c',
        'yellow': '#fde46b',
        'background': '#adb4ac',
        'text': '#2a2f2d',
        'border': '#d4dad7',
        },
        fontFamily: {
            'heading': ['Super Mellow', 'sans-serif'],
            'body': ['Outfit', 'sans-serif'],
        },
    },
  },
  plugins: [],
}