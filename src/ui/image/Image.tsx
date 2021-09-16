import React from 'react'
import { styled } from 'ui/theme'

import { ifProp } from 'styled-tools'
import { layout } from 'styled-system'

import { Condition } from 'ui'

type StyledImageProps = {
  width?: number | string
  height?: number | string
  isBg?: boolean
  src: string
  borderRadius?: string
  bgColor?: boolean
  border?: string
}

type ImageProps = StyledImageProps & {
  alt?: string
}

const StyledImage = styled.div<StyledImageProps>`
  border-radius: ${props => props.theme.borderRadius[props.borderRadius]};
  background-color: ${props => (props.bgColor ? props.bgColor : 'transparent')};
  border: ${props => (props.border ? props.border : 'none')};
  overflow: hidden;
  ${layout};

  ${ifProp(
    'isBg',
    props => `
    background-image: url(${props.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  `,
  )}
  img {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`

const Image: React.FC<ImageProps> = ({
  width,
  height,
  isBg,
  alt,
  src,
  borderRadius,
  bgColor,
  border,
}) => {
  return (
    <StyledImage
      width={width}
      height={height}
      isBg={isBg}
      src={isBg && src}
      borderRadius={borderRadius}
      border={border}
      bgColor={bgColor}
    >
      <Condition match={!isBg && src}>
        <img src={src} alt={alt} width={width} height={height} />
      </Condition>
    </StyledImage>
  )
}

Image.defaultProps = {
  width: 32,
  height: 32,
  borderRadius: 'xs',
}

export default Image
