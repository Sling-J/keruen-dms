export type ThemeFontSizes = [
  '12px',
  '14px',
  '16px',
  '20px',
  '24px',
  '30px',
  '38px',
  '46px',
  '56px',
]

export type ThemeLineHeights = [
  '20px',
  '22px',
  '24px',
  '28px',
  '32px',
  '38px',
  '46px',
  '54px',
  '64px',
]

export interface ThemeBorderRadius {
  xxs: string
  xs: string
  s: string
  n: string
  m: string
  l: string
  xl: string
  r: string
}

export interface ThemeFontFamily {
  ms: string
}

export interface ThemeFontWeight {
  light: number
  regular: number
  medium: number
  semibold: number
  bold: number
  black: number
}

export interface ThemeColor {
  [color: string]: string
}
export interface ThemeColors {
  [color: string]: string | string[]
}

export interface ThemeColorTools {
  getColor: (name: string, alpha: number) => string
  getPrimary: (alpha: number) => string
  getSecondary: (alpha: number) => string
}

export interface Theme {
  fontWeight: ThemeFontWeight
  fontFamily: ThemeFontFamily
  fontSizes: ThemeFontSizes
  lineHeights: ThemeLineHeights
  borderRadius: ThemeBorderRadius
  color: ThemeColor
  colors?: ThemeColors
  colorsList?: ThemeColors
  colorTools: ThemeColorTools
}
