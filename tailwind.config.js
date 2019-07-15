module.exports = {
  theme: {
    extend: {
      colors: {
              'navy': '#0F1B2A',
            },
      lineHeight: {
            sub: 0.1
      }
    },
    customForms: theme => ({
      default: {
        checkbox: {
          '&:focus': {
            boxShadow: undefined,
            borderColor: undefined,
          },
        },
        },
      },
    })
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]
}
