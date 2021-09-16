import React from 'react'

import { RenderRoutes, App } from 'modules/core/components'

const RenderMainRoutes = ({ routes }) => {
  return (
    <App routes={routes}>
      <RenderRoutes routes={routes} />
    </App>
  )
}

export default RenderMainRoutes
