/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'space-black': '#0A0A0F',
        'gold': {
          DEFAULT: '#D4AF37',
          light: '#E6C458',
          dark: '#B39020'
        },
        'mystic': {
          100: '#F0EFE9',
          200: '#D1CFC0',
          300: '#A09E87',
          800: '#2C2C35',
          900: '#1A1A20'
        }
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      keyframes: {
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(212, 175, 55, 0)' },
        },
        'eye-blink': {
          '0%, 95%, 100%': { transform: 'scaleY(1)' },
          '97%': { transform: 'scaleY(0.1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        }
      },
      animation: {
        'pulse-gold': 'pulse-gold 3s infinite',
        'eye-blink': 'eye-blink 5s infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite linear'
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #D4AF37, #E6D690, #D4AF37)',
        'dark-gradient': 'linear-gradient(to bottom, #0A0A0F, #1A1A20)'
      }
    },
  },
  plugins: [],
};