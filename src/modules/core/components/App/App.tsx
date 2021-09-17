import React, { FC } from 'react'

import { Box, Wrapper } from 'ui'
import { Navigation, Header } from 'modules/common/components'

import { IRoute } from 'modules/common/types'

export interface AppProps {
  routes: IRoute[]
}

const App: FC<AppProps> = ({ children, routes }) => {
  return (
    <Box height='100%'>
      <Header />
      <Navigation routes={routes} />

      <Box mt='24px' height='100%'>
        <Wrapper>{children}</Wrapper>
      </Box>
    </Box>
  )
}

export default App
