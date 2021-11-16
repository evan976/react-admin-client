import renderRoutes from '../../utils/render-routes'

function Setting({ route }) {
  return (
    renderRoutes(route.children)
  )
}

export default Setting
