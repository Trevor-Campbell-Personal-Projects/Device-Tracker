const defaultTheme = require('tailwindcss/defaultTheme')

const conicGradient = (theme, direction, colorList) => {
  const params = [direction, ...colorList.map((color) => theme(`colors.${color}`))]

  return `conic-gradient(${params.join(', ')})`
}

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        'conic-gradient': conicGradient(theme, 'from 300deg', [
          'red.400',
          'amber.100',
          'sky.500',
          'blue.300',
          'purple.600',
          'pink.500',
          'rose.600',
          'red.400',
        ]),
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
