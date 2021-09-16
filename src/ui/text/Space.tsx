import { createElement } from 'react'
import { styled } from 'ui/theme'

type SpaceProps = {
  count?: number
}

const Span = styled.span<{}>(() => ({
  display: 'inline-flex',
}))

const Space = ({ count = 1 }: SpaceProps) =>
  createElement(Span, {
    children: '\u00A0'.repeat(count),
  })

export default Space
