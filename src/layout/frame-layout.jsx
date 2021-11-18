import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FrameHeader from '../components/Header'
import Siderbar from '../components/Sidebar'
import FrameFooter from '../components/Footer'
import renderRoutes from '../utils/render-routes'
import './style.css'

function FrameLayout({ route, history, location }) {

  const token = useSelector(state => state.user.token)

  return !token ? <Redirect to="/login" /> : (
    <div className="frame-layout">
      <FrameHeader />
      <main className="container main-container">
        <Siderbar route={route} history={history} location={location} />
        <section className="content">{renderRoutes(route.children)}</section>
      </main>
      {/* <FrameFooter /> */}
    </div>
  )
}

export default FrameLayout
