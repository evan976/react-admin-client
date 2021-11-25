import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FrameHeader from '../components/Header'
import Siderbar from '../components/Sidebar'
import renderRoutes from '../utils/render-routes'
import { Wrapper } from './layout.styles'

function FrameLayout({ route, history, location }) {

  const token = useSelector(state => state.user.token)

  return !token ? <Redirect to="/login" /> : (
    <Wrapper>
      <FrameHeader history={history} />
      <main className="container">
        <Siderbar
          route={route}
          history={history}
          location={location}
        />
        <section className="content">
          {renderRoutes(route.children)}
        </section>
      </main>
    </Wrapper>
  )
}

export default FrameLayout
