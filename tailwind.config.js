/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss");

const rotateY = plugin(function ({ addUtilities }) {
     const newUtilities = {
          ".rotate-y-90": {
               transform: "rotateY(90deg)",
          },
          ".rotate-y-180": {
               transform: "rotateY(180deg)",
          },
          ".rotate-y-270": {
               transform: "rotateY(270deg)",
          },
          ".rotate-y-360": {
               transform: "rotateY(360deg)",
          },
     };
     addUtilities(newUtilities);
});

module.exports = {
     content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
     theme: {
          extend: {
               colors: {
                    emerald: {
                         50: "#f8f3ff",
                         100: "#f1e9fe",
                         200: "#e6d6fe",
                         300: "#d1b5fd",
                         400: "#b68bfa",
                         500: "#985cf6",
                         600: "#803aed",
                         700: "#6d28d9",
                         800: "#5b21b6",
                         900: "#4c1d95",
                         950: "#311065",
                    },
               },
          },
     },
     plugins: [rotateY],
};
