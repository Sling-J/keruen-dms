import React, { FC } from 'react'
import { Icon, IconProps } from 'ui/icons'

const ArrowBack: FC<IconProps> = ({
  originalWidth,
  originalHeight,
  color,
  ...props
}) => (
  <Icon
    originalHeight={originalHeight}
    originalWidth={originalWidth}
    {...props}
  >
    <path
      d='M18.7915 11.0046H7.62148L12.5015 6.12459C12.8915 5.73459 12.8915 5.09459 12.5015 4.70459C12.3147 4.51734 12.061 4.41211 11.7965 4.41211C11.532 4.41211 11.2783 4.51734 11.0915 4.70459L4.50148 11.2946C4.11148 11.6846 4.11148 12.3146 4.50148 12.7046L11.0915 19.2946C11.4815 19.6846 12.1115 19.6846 12.5015 19.2946C12.8915 18.9046 12.8915 18.2746 12.5015 17.8846L7.62148 13.0046H18.7915C19.3415 13.0046 19.7915 12.5546 19.7915 12.0046C19.7915 11.4546 19.3415 11.0046 18.7915 11.0046Z'
      fill={color}
    />
  </Icon>
)

ArrowBack.defaultProps = {
  originalWidth: 24,
  originalHeight: 24,
  width: 24,
  height: 24,
  color: 'grey',
}

export default ArrowBack
