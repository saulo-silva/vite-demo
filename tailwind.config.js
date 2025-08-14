/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '5000': '5000ms',
      },
      keyframes: {
        'status-card-1': {
          '0%': { opacity: '0', transform: 'translateY(20px)', backgroundColor: 'rgb(254 226 226 / 0.9)' },
          '15%': { opacity: '1', transform: 'translateY(0)', backgroundColor: 'rgb(254 226 226 / 0.9)' },
          '37.5%': { opacity: '1', transform: 'translateY(0)', backgroundColor: 'rgb(219 234 254 / 0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0)', backgroundColor: 'rgb(219 234 254 / 0.9)' }
        },
        'status-card-2': {
          '0%': { opacity: '0', transform: 'translateY(20px)', backgroundColor: 'rgb(254 226 226 / 0.9)' },
          '30%': { opacity: '1', transform: 'translateY(0)', backgroundColor: 'rgb(254 226 226 / 0.9)' },
          '52.5%': { opacity: '1', transform: 'translateY(0)', backgroundColor: 'rgb(220 252 231 / 0.9)' },
          '82.5%': { opacity: '1', transform: 'translateY(0)', backgroundColor: 'rgb(219 234 254 / 0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0)', backgroundColor: 'rgb(219 234 254 / 0.9)' }
        },
        'status-card-3': {
          '0%': { opacity: '0', transform: 'translateY(20px)', backgroundColor: 'rgb(254 226 226 / 0.9)' },
          '45%': { opacity: '1', transform: 'translateY(0)', backgroundColor: 'rgb(254 226 226 / 0.9)' },
          '67.5%': { opacity: '1', transform: 'translateY(0)', backgroundColor: 'rgb(220 252 231 / 0.9)' },
          '97.5%': { opacity: '1', transform: 'translateY(0)', backgroundColor: 'rgb(219 234 254 / 0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0)', backgroundColor: 'rgb(219 234 254 / 0.9)' }
        },
        'status-text-1': {
          '0%': { color: 'rgb(185 28 28)' },
          '37.5%': { color: 'rgb(29 78 216)' },
          '100%': { color: 'rgb(29 78 216)' }
        },
        'status-text-2': {
          '0%': { color: 'rgb(185 28 28)' },
          '52.5%': { color: 'rgb(21 128 61)' },
          '82.5%': { color: 'rgb(29 78 216)' },
          '100%': { color: 'rgb(29 78 216)' }
        },
        'status-text-3': {
          '0%': { color: 'rgb(185 28 28)' },
          '67.5%': { color: 'rgb(21 128 61)' },
          '97.5%': { color: 'rgb(29 78 216)' },
          '100%': { color: 'rgb(29 78 216)' }
        },
        'status-icon-1': {
          '0%': { color: 'rgb(220 38 38)' },
          '37.5%': { color: 'rgb(37 99 235)' },
          '100%': { color: 'rgb(37 99 235)' }
        },
        'status-icon-2': {
          '0%': { color: 'rgb(220 38 38)' },
          '52.5%': { color: 'rgb(22 163 74)' },
          '82.5%': { color: 'rgb(37 99 235)' },
          '100%': { color: 'rgb(37 99 235)' }
        },
        'status-icon-3': {
          '0%': { color: 'rgb(220 38 38)' },
          '67.5%': { color: 'rgb(22 163 74)' },
          '97.5%': { color: 'rgb(37 99 235)' },
          '100%': { color: 'rgb(37 99 235)' }
        }
      },
      animation: {
        'status-card-1': 'status-card-1 4s ease-out forwards',
        'status-card-2': 'status-card-2 4s ease-out forwards',
        'status-card-3': 'status-card-3 4s ease-out forwards',
        'status-text-1': 'status-text-1 4s ease-out forwards',
        'status-text-2': 'status-text-2 4s ease-out forwards',
        'status-text-3': 'status-text-3 4s ease-out forwards',
        'status-icon-1': 'status-icon-1 4s ease-out forwards',
        'status-icon-2': 'status-icon-2 4s ease-out forwards',
        'status-icon-3': 'status-icon-3 4s ease-out forwards'
      }
    }
  },
  plugins: [],
}

