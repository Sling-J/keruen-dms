import styled from 'ui/theme/styled'
import { theme } from 'ui/theme'
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
  flexbox,
  grid,
  space,
  layout,
  border,
  color,
  position,
} from 'styled-system'

const Box = styled('div', { shouldForwardProp })`
  box-sizing: border-box;
  min-width: 0;
  ${position}
  ${layout}
  ${grid}
  ${flexbox}
  ${space}
  ${border}
  ${color}
`

Box.defaultProps = {
  theme: {
    ...theme,
    colors: theme.colorsList,
  },
}

export default Box
