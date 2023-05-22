/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        linear1: 'linear-gradient(82.96deg, #2938C0 0%, #5480F4 100%);',
        primary: {
          950: '#040e2f',
          900: '#081e48',
          800: '#0f316f',
          700: '#194a9d',
          600: '#2362c7',
          500: '#2370f2',
          400: '#5b84e7',
          300: '#82a0ed',
          200: '#a9bcf3',
          100: '#d0d9f9',
          50: '#e5e9fc',
        },
        secondary: {
          500: '#F1C40F'
        }
      }
    },
    screens: {
      desktop: { max: "1735px" },
      notbook: { max: "1530px" },
      tablet: { max: "1000px" },
      mobile: { max: "740px" },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        mobile: "100%",
        notbook: "80rem",
        tablet: "61.5rem",
        desktop: "85rem",
      },
    },
    fontFamily: {
      sans: "'Poppins', sans-serif"
    },
  },
  plugins: [],
}
