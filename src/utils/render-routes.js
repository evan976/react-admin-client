
import React from 'react'
import { Switch, Route } from 'react-router-dom'

const renderRoutes = routes => routes ? (
  <Switch>
    {
      routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          render={props => route.render
            ? (route.render({...props}))
            : (<route.component {...props} route={route} />)
          }
        />
      ))
    }
  </Switch>
) : null

export default renderRoutes
