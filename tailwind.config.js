/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        sun: {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#ff6f00',
        },
        ocean: {
          400: '#29b6f6',
          500: '#03a9f4',
          600: '#0288d1',
          700: '#0277bd',
        },
        sand: {
          50: '#fdf6e3',
          100: '#f5e6c8',
          200: '#e8cc9a',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'sun-gradient': 'linear-gradient(135deg, #ff6f00 0%, #ffc107 50%, #ffecb3 100%)',
        'ocean-gradient': 'linear-gradient(135deg, #0277bd 0%, #29b6f6 100%)',
        'hero-gradient': 'linear-gradient(160deg, #0d47a1 0%, #1565c0 30%, #0288d1 60%, #ff6f00 100%)',
      },
    },
  },
  plugins: [],
};
