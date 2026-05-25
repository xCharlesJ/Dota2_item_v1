/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        dota: {
          bg: '#0a0e17',
          card: '#111827',
          border: '#1e293b',
          gold: '#c89b3c',
          'gold-dim': '#8b6914',
          strength: '#e43b3b',
          agility: '#4caf50',
          intelligence: '#3b8ce4',
          universal: '#9b59b6',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Noto Sans SC', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(200, 155, 60, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(200, 155, 60, 0.6)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
