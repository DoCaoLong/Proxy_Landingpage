/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
import { SCREENS } from "./configs";

function screenToPx(screen) {
  return `${screen}px`;
}

function screenUp(screen) {
  return { min: screenToPx(screen) };
}

function screenDown(screen) {
  return { max: screenToPx(screen - 1) };
}

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        1200: "1200px",
        1440: "1440px",
      },
      boxShadow: {
        pricing: "0px 18px 53.8px 0px #E9E9E9",
        buttonBy: "0px 8px 24px -4px rgba(0, 0, 0, 0.12)",
        locationBox: "0px 18px 53.8px 0px #E9E9E9",
      },
      backgroundImage: {
        "button-gradient": "linear-gradient(90deg, #F53255 0%, #FF8000 100%)",
        "hero-pattern": "url('./src/assets/section-hero-warp.png')",
        "section-download": "url('./src/assets/section- download.png')",
      },

      fontFamily: {
        primary: ["Inter", ...defaultTheme.fontFamily.sans],
        sans: ["var(--font-verdana)"],
        Inter: "Inter",
      },
      colors: {
        customRed: "#F63155",
        customOrange: "#F6892F",
        white: "#FFF",
      },

      backgroundColor: {
        RedViolet: {
          100: "#F53255",
          200: "var(--Colors-testing-red---color-red-200, #F5BFBF) !important",
        },
      },
      screens: {
        xl: screenUp(SCREENS.lg),
        xlDown: screenDown(SCREENS.xl),
        "2xl": screenUp(SCREENS.xl),
        "2xlDown": screenDown(SCREENS["2xl"]),
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".text-gradient-1": {
          "@apply font-Inter": {},
          background: "linear-gradient(90deg, #F63155 0%, #F6892F 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "150%",
          letterSpacing: "0.64px",
          ["@screen 2xlDown"]: {
            fontSize: "13px",
          },
        },
        ".text-gradient-2": {
          "@apply font-Inter": {},
          background: "linear-gradient(90deg, #F53255 0%, #FF8000 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "150%",
          letterSpacing: "0.64px",
          ["@screen 2xlDown"]: {
            fontSize: "13px",
          },
        },
        ".text-size-normal": {
          "@apply font-Inter": {},
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: " 400",
          textSize: "normal",
          lineHeight: "150%" /* 24px */,
          letterSpacing: "0.16px",
          ["@screen 2xlDown"]: {
            fontSize: "13px",
          },
        },
        ".gradient-text": {
          "@apply font-Inter": {},
          background: "linear-gradient(90deg, #F53255 0%, #FF8000 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".text-size-large": {
          "@apply font-Inter": {},
          color: "var(--vn-bn-m, #091327)",
          fontSize: "39px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "120%" /* 46.8px */,
          letterSpacing: "-1.17px",
          ["@screen 2xlDown"]: {
            fontSize: "30px",
          },
        },
        ".text-button-1": {
          "@apply font-Inter": {},
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "150%" /* 24px */,
          letterSpacing: "0.32px",
          ["@screen 2xlDown"]: {
            fontSize: "13px",
          },
        },
        ".text-H6": {
          "@apply font-Inter": {},
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "120%",
          ["@screen 2xlDown"]: {
            fontSize: "18px",
          },
        },
        ".text-H3": {
          "@apply font-Inter": {},
          fontSize: "39px",
          fontStyle: "normal",
          fontSeight: " 600",
          lineHeight: "120%",
          letterSpacing: "-1.17px",
          ["@screen 2xlDown"]: {
            fontSize: "30px",
          },
        },
        ".text-H2": {
          "@apply font-Inter": {},
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: " 700",
          lineHeight: "160%",
          ["@screen 2xlDown"]: {
            fontSize: "14px",
          },
        },
        ".text-Mac-H2": {
          "@apply font-Inter": {},
          fontSize: "49px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "120%" /* 58.8px */,
          letterSpacing: "-1.96px",
          ["@screen 2xlDown"]: {
            fontSize: "40px",
          },
        },
        ".text-small": {
          "@apply font-Inter": {},
          fontSize: "13px",
          fontStyle: "normal",
          fontWeight: " 400",
          lineHeight: "160%",
          ["@screen 2xlDown"]: {
            fontSize: "11px",
          },
        },
        ".text-H1": {
          "@apply font-Inter": {},
          fontSize: "61px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "108%" /* 65.88px */,
          letterSpacing: "-1.22px",
          ["@screen 2xlDown"]: {
            fontSize: "55px",
          },
        },
        ".text-H5": {
          "@apply font-Inter": {},
          fontSize: "25px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: " 120%",
          ["@screen 2xlDown"]: {
            fontSize: "20px",
          },
        },
        ".text-H4": {
          fontSize: "31px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: " 120%",
          letterSpacing: "-0.31px",
          ["@screen 2xlDown"]: {
            fontSize: "28px",
          },
        },
      });
    }),
  ],
};
