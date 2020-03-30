/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Nunito', ...defaultTheme.fontFamily.sans]
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',
      primary: '#01374c',
      secondary: '#3FE19B',
      tertiary: '#2ECAAF',
      dark: '#cbd5e0',
      grey: '#f9f9f9',
      light: '#666C7C',
      danger: '#f8444f',
      warning: '#D8AA00',
      success: '#5ed16a',
      info: '#012c3d'
    },
    extend: {
      borderColor: (theme) => ({
        default: theme('colors.dark', 'currentColor')
      }),
      maxHeight: {
        '0': '0',
        '1': '1rem',
        '5': '5rem',
        '8': '8rem',
        '10': '10rem',
        '20': '20rem'
      }
    },
    customForms: (theme) => ({
      default: {
        input: {
          borderColor: theme('colors.dark'),
          '&:focus': {
            boxShadow: undefined,
            borderColor: theme('colors.tertiary')
          }
        },
        select: {
          borderRadius: theme('borderRadius.lg'),
          boxShadow: undefined
        },
        checkbox: {
          width: theme('spacing.6'),
          height: theme('spacing.6')
        }
      }
    }),
    variants: {
      spinner: ['responsive']
    },
    spinner: (theme) => ({
      dark: {
        color: theme('colors.primary', 'currentColor'), // color you want to make the spinner
        size: '1em', // size of the spinner (used for both width and height)
        border: '2px', // border-width of the spinner (shouldn't be bigger than half the spinner's size)
        speed: '500ms' // the speed at which the spinner should rotate
      },
      light: {
        color: theme('colors.white', 'currentColor'), // color you want to make the spinner
        size: '1em', // size of the spinner (used for both width and height)
        border: '2px', // border-width of the spinner (shouldn't be bigger than half the spinner's size)
        speed: '500ms' // the speed at which the spinner should rotate
      }
    })
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-spinner')()
  ]
}
