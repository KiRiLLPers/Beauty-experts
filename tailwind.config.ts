import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    colors: {
      'green': '#415C52',
      'white': '#FCFCF4',
      'soft-light': '#DFE2D9',
      'base-black': '#242726',
      'grey': '#8C8F86',
      'soft-light2': 'rgba(150, 152, 136, 0.06)'
    },
    fontSize: {
      '12': '12px',
      '14': '14px',
      '16': '16px',
      '18': '18px',
      '24': '24px',
      '32': '32px',
      '40': '40px',
      '48': '48px',
      '56': '56px',
      '64': '64px',
      '120': '120px',
      '140': '140px'

    },
    lineHeight: {
      '20': '20px',
      '22': '22px',
      '24': '24px',
      '26': '26px',
      '30': '30px',
      '36': '36px',
      '44': '44px',
      '54': '54px',
      '60': '60px',
      '66': '66px',
      '70': '70px',
      '140': '140px'
    },
    screens: {
      '2xl-max': {'max': '1439px'},
      'xl-max': {'max': '1279px'},
      'lg-max': {'max': '743px'},
      'md-max': {'max': '429px'},
      '2xl-min': {'min': '1440px'},
      'xl-min': {'min': '1280px'},
      'lg-min': {'min': '744px'},
      'md-min': {'min': '430px'}
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        manrope: ['Manrope, san-serif'],
        felidae: ['Felidae, san-serif']
      },
    },
  },
  plugins: [],
};
export default config;
