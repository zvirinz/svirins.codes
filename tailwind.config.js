/** @type {import('tailwindcss').Config} */

const { spacing } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
// TODO: add fallback fonts
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      active: 'rgb(255 49 46 / 95%)',
      gray: colors.slate,
      transparent: 'rgb(255 255 255 / 0%)',
      message: '#1e293b',
      wakatime: {
        blue: '#2563EB',
        amber: '#D97706',
        fuchsia: '#A21CAF',
        indigo: '#4338CA'
      },
      code: {
        emerald: '#10b981',
        yellow: '#eab308',
        pink: '#EC4899',
        blue: '#3b82f6',
        purple: '#A855F7',
        green: '#22c55e'
      }
    },
    screens: {
      xs: '480px',
      sm: '660px',
      md: '820px',
      lg: '980px',
      xl: '1280px'
    },
    fontFamily: {
      sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      mono: ['var(--font-mono)', 'monospace']
    },
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
