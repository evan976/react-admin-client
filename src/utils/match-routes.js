import { matchPath, Router } from 'react-router-dom'

const matchRoutes = (routes, pathname, branch = []) => {
  routes.some(route => {
    const match = route.path
      ? matchPath(pathname, route)
      : branch.length
        ? branch[branch.length - 1].match
        : Router.computeRootMatch(pathname)

    if (match) {
      branch.push({ route, match })
      if (route.children) {
        matchRoutes(route.children, pathname, branch)
      }
    }
    return match
  })
  return branch
}

export default matchRoutes
