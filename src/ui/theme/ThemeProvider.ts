import { createElement } from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { theme } from './src'

export const ThemeProvider = props =>
  createElement(EmotionThemeProvider, {
    ...props,
    theme,
  })
