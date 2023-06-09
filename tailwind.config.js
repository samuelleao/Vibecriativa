/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        hide: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        },
        slideIn: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        hide: 'hide 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },

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
      desktop: { min: "1430px" },
      notbook1: { max: "1430px" },
      notbook2: { max: "1278px" },
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
        tablet: "70rem",
        notbook: "75rem",
        desktop: "80rem",
      },
    },
    fontFamily: {
      sans: "'Poppins', sans-serif"
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
