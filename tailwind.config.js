/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#21c063',
        dark: '#0b151a',
        light: '#f7f8fa',
        'support-dark': '#103629',
        'support-light': '#d9fdd3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}