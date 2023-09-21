/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        // Using legacy `rgba`
        primary: 'rgba(var(--color-primary), <alpha-value>)'
      },
      aspectRatio: {
        'rect': '2 / 1'
      }
    },
  },
  // ...
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/container-queries'),
  ],
}