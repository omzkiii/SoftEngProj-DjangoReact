  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        colors:{
          'AgriAccessOrange' : '#de9c4b',
          'AgriAccessGreen' : '#29544B',
          'Lime':'#A4B07B'
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
