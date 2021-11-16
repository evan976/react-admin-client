import React from 'react'
import FrameHeader from '../components/Header'
import Siderbar from '../components/Sidebar'
import FrameFooter from '../components/Footer'
import renderRoutes from '../utils/render-routes'
import './style.css'

function FrameLayout({ route, history, location }) {
  return (
    <div className="frame-layout">
      <FrameHeader />
      <main className="container main-container">
        <Siderbar route={route} history={history} location={location} />
        <section className="content">{renderRoutes(route.children)}</section>
      </main>
      <FrameFooter />
    </div>
  )
}

export default FrameLayout
