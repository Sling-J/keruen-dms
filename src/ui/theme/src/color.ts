import { ThemeColor, ThemeColors, ThemeColorTools } from './types'

interface RGB {
  r: number
  g: number
  b: number
}

type HexToRgb = (hex: string | string[]) => RGB | null
type GetRGBa = (color: RGB, alpha?: number) => string

const hexToRgb: HexToRgb = hex => {
  if (typeof hex !== 'string') {
    return null
  }
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

const getRGBa: GetRGBa = ({ r, g, b }, alpha = 1) =>
  `rgba(${r}, ${g}, ${b}, ${alpha})`

const color: ThemeColor = {
  primary: '#8FC74A', // indigo
}

export const colorsList: ThemeColors = {
  primary: ['#4D77FB', '#81AAFF', '#DBE4FE', '#ECF1FE', '#F6F9FF'],
  secondary: [
    '#627D98',
    '#9fb3c8',
    '#D9E2EC',
    '#E6ECF3',
    '#F0F4F8',
    '#F7F9FB',
    '`#FFF',
  ],
  alert: [
    'rgba(252,83,104, 1)',
    'rgba(252,83,104, 0.75)',
    'rgba(252,83,104, 0.5)',
    'rgba(252,83,104, 0.25)',
    'rgb(253,239,240)',
  ], // temp
}

export const colorTools: ThemeColorTools = {
  getColor: (name, alpha) => {
    return getRGBa(hexToRgb(color[name]), alpha)
  },
  getPrimary: alpha => {
    return colorTools.getColor('primary', alpha)
  },
  getSecondary: alpha => {
    return colorTools.getColor('secondary', alpha)
  },
}

export default color
