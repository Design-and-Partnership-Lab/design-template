/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        edsightpink: {
          100: "#E66279",
          200: "#E13D58",
          300: "#D4213F",
          400: "#F1A7B3",
          500: "#FCEDF0",
        },
        edsightyellow: {
          100: "#FFAF40",
          200: "#FFA21F",
          300: "#CC7700",
          400: "#FFD599",
          500: "#FFEED6",
        },
        edsightpurple: {
          100: "#A46E9C",
          200: "#975E8E",
          300: "#7D4F76",
          400: "#C8A7C3",
          500: "#E7D9E5",
        },
        edsightteal: {
          100: "#40B0A6",
          200: "#36968E",
          300: "#2B7872",
          400: "#78CEC7",
          500: "#D2EFEC",
        },
        edsightblue: {
          100: "#2F80ED",
          200: "#146DE1",
          300: "#105BBC",
          400: "#69A4F2",
          500: "#B4D2F8",
        },
        edsightnavy: {
          100: "#2D4B66",
          200: "#253F55",
          300: "#192A39",
          400: "#44739C",
          500: "#719CC1",
        },
        edsightgray: {
          100: "#829BBD",
          200: "#89A0BD",
          300: "#6F8CAE",
          400: "#D8E0E9",
          500: "#F2F5F8",
        },
        edsightperiwinkle: {
          100: "#8799EC",
          200: "#6079E6",
          300: "#3D5BE1",
          400: "#DCE1F9",
          500: "#B8C3F4",
        },
        edsightlightgray: {
          100: "#DEE1EE",
          200: "#D7DAEA",
          300: "#BCC1DC",
          400: "#E4E7F1",
          500: "#F2F3F8",
        },
        // Value Colors (black, gray, white)
        black: "#0F0F0F",
        white: "#FFFFFF",
        darkgray: {
          100: "#333333",
          200: "#292929",
          300: "#424242",
          400: "#5C5C5C",
        },
        lightgray: {
          100: "#757575",
          200: "#FAFAFA",
          300: "#F2F2F2",
          400: "#E8E8E8",
          500: "#E0E0E0",
          600: "#D1D1D1",
        },
      },
      screens: {
        md: "768px",
        lg: "1024px",
        xl: "1400px",
        "2xl": "2000px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F2F3F8",
          secondary: "#40B0A6",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
