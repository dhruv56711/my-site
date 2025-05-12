// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3ba55d',           // dark emerald green
        'primary-dark': '#2e8b57',    // sea green
        secondary: '#88ffcc',         // soft teal
        dark: '#0f1e17',              // dark terminal background
        light: '#e6f2ec',             // light mint
        gray: '#4e5d4c',              // muted green-gray
        border: '#2f4f4f',            // dark slate border
      },
    },
  },
  plugins: [],
}
