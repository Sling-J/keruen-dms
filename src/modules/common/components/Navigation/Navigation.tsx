import React, { FC, useState } from 'react'

import { styled } from 'ui/theme'
import { Box } from 'ui'

import { Menu } from 'antd'

import { IRoute } from 'modules/common/types'

interface NavigationProps {
  routes: IRoute[]
}

const NavigationWrap = styled.div`
  box-shadow: 0 6px 12px -6px rgba(24, 39, 75, 0.12),
    0 8px 24px -4px rgba(24, 39, 75, 0.08);
  background: #fff;

  .ant-menu-horizontal {
    border-bottom: none;

    li {
      font-weight: 600;
    }

    .ant-menu-submenu-selected,
    .ant-menu-item-selected {
      color: initial;
    }

    svg {
      vertical-align: middle;
    }

    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item,
    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu,
    .ant-menu-item,
    .ant-menu-submenu-title {
      padding: 0 24px;
    }
  }
`

const Navigation: FC<NavigationProps> = ({ routes }) => {
  const [current, setCurrent] = useState('mail')

  const handleClick = e => {
    setCurrent(e.key)
  }

  return (
    <NavigationWrap>
      <Box maxWidth='1440px' margin='0 auto'>
        <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
          {routes.map(route => {
            const Icon = route.nav.icon

            return (
              // @ts-ignore
              <Menu.Item key={route.key} icon={<Icon />}>
                {route.nav.name}
              </Menu.Item>
            )
          })}
        </Menu>
      </Box>
    </NavigationWrap>
  )
}

export default Navigation
