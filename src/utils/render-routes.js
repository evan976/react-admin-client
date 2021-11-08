
import React from 'react'
import { Switch, Route } from 'react-router-dom'

const renderRoutes = (routes) => (
  <Switch>
    {routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        component={route.component}
      />
    ))}
  </Switch>
)

export default renderRoutes
