/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
    keyframes: {
      "bubble":{
        "0%":{transform: "translateY(0)",opacity:"0"},
        "100%":{transform:"translateY(-100vh)" , opacity: "0"},

      },
      animation:{
        "bubble": "bubble 0.1s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
      }
    },

    },
  },
  plugins: [],
}

