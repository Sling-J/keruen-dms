import React, { FC } from 'react'

import { Box } from 'ui'
import { Navigation, Header } from 'modules/common/components'

import { IRoute } from 'modules/common/types'

export interface AppProps {
  routes: IRoute[]
}

const App: FC<AppProps> = ({ children, routes }) => {
  return (
    <Box>
      <Header />
      <Navigation routes={routes} />

      {children}
    </Box>
  )
}

export default App
