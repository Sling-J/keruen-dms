import { createElement } from 'react'
import { styled } from 'ui/theme'
import Text, { TextProps } from './Text'

type StyledEllipsisProps = {
  title: string
} & TextProps

type EllipsisProps = {
  children: string
} & TextProps

const Component = styled(Text)<StyledEllipsisProps>({
  display: 'block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

const Ellipsis = ({ children, ...props }: EllipsisProps) =>
  createElement(Component, { title: children, ...props }, children)

export default Ellipsis
