/** @type {import('tailwindcss').Config} */


const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /bg-(mtc|housemate|simpliscreen|createroom|gallery)/,
      variants: ['group-hover'],
    },
    {
      pattern: /col-span./,
      variants: ['lg', 'md']
    },
    {
      pattern: /row-span./,
      variants: ['lg', 'md']
    },
    {
      pattern: /grid-cols-(1|2|3|4|5)/,
      variants: ['md']
    },
  ],
  theme: {
    extend: {
      animation: {
        'cycleList': 'cycle 15s linear infinite',
      },
      keyframes: {
        cycle: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.900'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            h2: {
              color: theme('colors.slate.900'),
            },
            h3: {
              color: theme('colors.slate.900'),
            },
            blockquote: {
              color: theme('colors.slate.900'),
              borderLeftColor: theme('colors.slate.200'),
            },
            'ol > li::before': {
              color: theme('colors.slate.500'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.slate.500'),
            },
            hr: {
              borderColor: theme('colors.slate.200'),
            },
            strong: {
              color: theme('colors.slate.900'),
            },
            code: {
              color: theme('colors.slate.900'),
            },
            figcaption: {
              color: theme('colors.slate.500'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.100'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
            h1: {
              color: theme('colors.slate.100'),
            },
            h2: {
              color: theme('colors.slate.100'),
            },
            h3: {
              color: theme('colors.slate.100'),
            },
            blockquote: {
              color: theme('colors.slate.100'),
              borderLeftColor: theme('colors.slate.700'),
            },
            'ol > li::before': {
              color: theme('colors.slate.400'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.slate.400'),
            },
            hr: {
              borderColor: theme('colors.slate.700'),
            },
            strong: {
              color: theme('colors.slate.100'),
            },
            code: {
              color: theme('colors.slate.100'),
            },
            figcaption: {
              color: theme('colors.slate.400'),
            },
          },
        },
      }),
      colors: {
        "mtc": "#4D6594",
        "housemate": "#E67E22",
        "simpliscreen": "#13C094",
        "createroom": "#e9a9a0",
        "gallery": "#F5B700",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-spectral)', ...defaultTheme.fontFamily.serif],
      },
      lineHeight: {
        'tighter': '1.15',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
}
