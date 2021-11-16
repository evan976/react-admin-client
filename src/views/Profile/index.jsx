import renderRoutes from '../../utils/render-routes'

function Profile({ route }) {
  return renderRoutes(route.children)
}

export default Profile
