import React from 'react'
import { Redirect } from 'react-router-dom'

import { RenderRoutes, App } from 'modules/core/components'

const RenderMainRoutes = ({ routes }) => {
  const allRoutes = [
    {
      path: '/',
      key: 'stub',
      exact: true,
      skip: true,
      component: () => <Redirect to={routes[0].path} />,
      routes: [],
    },
    ...routes,
  ]

  return (
    <App routes={allRoutes.filter(route => !route.skip)}>
      <RenderRoutes routes={allRoutes} />
    </App>
  )
}

export default RenderMainRoutes
