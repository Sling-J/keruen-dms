import React from 'react'
import { Switch, Route } from 'react-router-dom'

const RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  )
}

const RenderRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map(route => (
        <RouteWithSubRoutes key={route.key} {...route} />
      ))}
      <Route component={() => <div>Not Found</div>} />
    </Switch>
  )
}

export default RenderRoutes
