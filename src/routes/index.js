import Index from '../views/Index'
import Login from '../views/Login'
import FrameLayout from '../layout/frame-layout'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: FrameLayout,
    children: [
      {
        path: '/index',
        component: Index
      }
    ]
  }
]

export default routes
