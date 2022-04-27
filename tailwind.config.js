const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

let breakpoints = Object.assign({}, defaultTheme.screens)
delete breakpoints["2xl"] // delete the 2xl breakpoint

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: breakpoints,
        center: true,
      },
      colors: {
        action: {
          default: colors.sky["600"],
          base: colors.sky["600"],
          hover: colors.sky["700"],
        },
      },
      typography: {
        default: {
          css: {
            h1: {
              marginBottom: "1rem",
            },
            h2: {
              marginTop: "2rem",
              marginBottom: "1rem",
            },
            h3: {
              marginBottom: "1rem",
            },
            h4: {
              marginBottom: "1rem",
            },
            h5: {
              marginBottom: "1rem",
            },
            h6: {
              marginBottom: "1rem",
            },
            a: {
              textDecoration: "none",
            },
            p: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            },
            ul: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            },
            ol: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            },
            li: {
              marginTop: "0.25rem",
              marginBottom: "0.25rem",
            },
          },
        },
        lg: {
          css: {
            h1: {
              marginBottom: "1rem",
            },
            h2: {
              marginTop: "2rem",
              marginBottom: "1rem",
            },
            h3: {
              marginBottom: "1rem",
            },
            h4: {
              marginBottom: "1rem",
            },
            h5: {
              marginBottom: "1rem",
            },
            h6: {
              marginBottom: "1rem",
            },
            a: {
              textDecoration: "none",
            },
            p: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            },
            ul: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            },
            ol: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            },
            li: {
              marginTop: "0.25rem",
              marginBottom: "0.25rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
