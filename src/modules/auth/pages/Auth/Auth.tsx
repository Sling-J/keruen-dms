import React, { FC } from 'react'
import { useTheme } from 'emotion-theming'
import { Link as BaseLink } from 'react-router-dom'

import { Box, Text } from 'ui'
import { styled, Theme } from 'ui/theme'
import { AuthAdminIcon, AuthTenantIcon } from 'ui/icons'

const Link = styled(BaseLink)`
  display: block;
  width: 50%;
  height: 100%;
`

const Auth: FC = () => {
  const theme: Theme = useTheme()

  return (
    <Box display='flex' height='100vh'>
      <Link to='/auth/admin/sign-in'>
        <Box
          backgroundColor='#55C6F7'
          height='100%'
          display='flex'
          justifyContent='space-between'
          flexDirection='column'
        >
          <Box padding='15% 10%'>
            <Text
              color='#ffffff'
              fontSize={8}
              fontWeight={theme.fontWeight.medium}
            >
              Администрация
            </Text>
          </Box>
          <Box display='flex' justifyContent='flex-end'>
            <AuthAdminIcon/>
          </Box>
        </Box>
      </Link>
      <Link to='/auth/tenant/sign-in'>
        <Box
          backgroundColor='#8FC74A'
          height='100%'
          display='flex'
          justifyContent='space-between'
          flexDirection='column'
        >
          <Box padding='15% 10%'>
            <Text
              color='#ffffff'
              fontSize={8}
              fontWeight={theme.fontWeight.medium}
            >
              Арендатор
            </Text>
          </Box>
          <Box display='flex' justifyContent='flex-end'>
            <AuthTenantIcon/>
          </Box>
        </Box>
      </Link>
    </Box>
  )
}

export default Auth
