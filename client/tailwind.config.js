/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  // variants: {
  //   width: ["responsive", "hover", "focus"]
  // },
  theme: {
    extend: {
      variants: {
        width: ["responsive", "hover", "focus"]
      },
      borderWidth: {
        max: "20px"
      },
      width: {
        max: "40rem"
      },
      height: {
        banner: "30rem"
      },
      animation: {
        fade: "fadeOut 5s ease-in-out",
        ping: "ping 2s linear infinite",
        upto: "upto 2s linear infinite",
        "fade-down": "fade-down linear",
        "fade-up": "fade-up 0.3s linear"
      },
      transformOrigin: {
        "center-left": "center left",
        "center-right": "center right"
      },

      keyframes: (theme) => ({
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(-5px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" }
        },
        "fade-down": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" }
        },
        fadeOut: {
          "0%": { backgroundColor: theme("colors.red.300") },
          "100%": { backgroundColor: theme("colors.transparent") }
        },
        ping: {
          "0%": {
            transform: "scale(0.95)",
            opacity: "1"
          },
          "75%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.95)", opacity: "1" }
        },

        upto: {
          "0%": {
            transform: "translateY(0px)"
          },
          "25%": {
            transform: "translateY(-5px)"
          },
          "50%": {
            transform: "translateY(0px)"
          },
          "75%": {
            transform: "translateY(5px)"
          },
          "100%": {
            transform: "translateY(0px)"
          }
        }
      })
    }
  },
  plugins: []
}
