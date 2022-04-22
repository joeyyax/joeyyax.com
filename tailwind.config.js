const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        action: {
          DEFAULT: colors.teal["600"],
          600: colors.teal["700"],
        },
      },
    },
  },
  plugins: [],
}
