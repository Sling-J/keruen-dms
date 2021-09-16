import {
  typography,
  space,
  color,
  layout,
  TypographyProps,
  SpaceProps,
  LayoutProps,
} from 'styled-system'
import { styled, theme } from '../theme'

export type TextProps = TypographyProps &
  SpaceProps &
  LayoutProps & {
    as?: string
    textOverflow?: string
    color?: string
  }

const Text = styled.span<TextProps>`
  ${typography};
  ${space};
  ${color};
  ${layout};
`

Text.defaultProps = {
  theme: {
    ...theme,
    colors: theme.colorsList,
  },
}

export default Text
