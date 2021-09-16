import React, { FC } from 'react'

import { Image, Wrapper } from 'ui'
import { LogoIcon } from 'ui/icons'
import { styled } from 'ui/theme'

const HeaderWrap = styled(Wrapper)`
  box-shadow: 0 6px 12px -6px rgba(24, 39, 75, 0.12),
    0 8px 24px -4px rgba(24, 39, 75, 0.08);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-bottom: 1px;
`

const Header: FC = () => {
  return (
    <HeaderWrap>
      <LogoIcon width={106} height={30} />

      <Image
        src='https://www.w3schools.com/howto/img_avatar2.png'
        border='1px solid #8C8C8C'
        borderRadius='r'
      />
    </HeaderWrap>
  )
}

export default Header
