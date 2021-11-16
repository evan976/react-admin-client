import React from 'react'
import renderRoutes from '../../utils/render-routes'

function Content({ route }) {
  return renderRoutes(route.children)
}

export default Content
