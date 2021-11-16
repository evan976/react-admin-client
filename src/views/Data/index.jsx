import renderRoutes from '../../utils/render-routes'

function Data({ route }) {
  return (
    renderRoutes(route.children)
  )
}

export default Data
