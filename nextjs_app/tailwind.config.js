  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      fontFamily: {
        "Mont": ['Montserrat', 'sans-serif'],
        "Bree": ['Bree Serif', 'serif'],
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        colors:{
          'AgriAccessOrange' : '#de9c4b',
          'AgriAccessGreen' : '#29544B',
          'Lime':'#A4B07B',
          'redfire': '#ed1b24',
          'green': '#29544b',
          'white': '#FFFFFF',
          'black': '#000000'
    },


      },
    },
    variants: {
      extend: {
        opacity: ['disabled'],
        transform: ['hover', 'focus'],
      },
    },
    plugins: [],
  }
