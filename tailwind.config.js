export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6EC',
        sand: '#F1E7D4',
        bark: {
          100: '#E6DCCB',
          200: '#CFC0A6',
          400: '#8C7454',
          600: '#5C4830',
          800: '#3A2C1B',
          900: '#241A0F',
        },
        leaf: {
          100: '#DDEBD6',
          200: '#BBD8AE',
          400: '#5A9B4E',
          600: '#2F7A3A',
          700: '#24602D',
          900: '#143A1B',
        },
        clay: {
          100: '#F6DFCE',
          500: '#C4622D',
          700: '#9A4A1E',
        },
        gold: {
          100: '#F8E9C4',
          500: '#C98A12',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans"', '"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        tile: '0 2px 0 0 rgba(58,44,27,0.18)',
        lift: '0 8px 24px -8px rgba(58,44,27,0.35)',
      },
    },
  },
  plugins: [],
}
