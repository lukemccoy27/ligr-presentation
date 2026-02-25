/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { jakarta: ['"Plus Jakarta Sans"', "sans-serif"] },
      colors: {
        ligr: {
          bg: "#05060A",
          surface: "#0D1117",
          surface2: "#131821",
          red: "#FF3B3B",
          redSoft: "#FF3B3B22",
          cyan: "#22F0FF",
          cyanSoft: "#22F0FF22",
          border: "rgba(255,255,255,0.12)",
          textDim: "rgba(255,255,255,0.6)",
          textSoft: "rgba(255,255,255,0.75)"
        }
      }
    }
  },
  plugins: []
};
