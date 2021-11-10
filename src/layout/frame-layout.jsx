import React from 'react'
import { withRouter } from 'react-router-dom'
import FrameHeader from '../components/Header'
import Siderbar from '../components/Sidebar'
import './style.css'

function FrameLayout() {
  return (
    <div className="frame-layout">
      <FrameHeader />
      <main className="container main-container">
        <Siderbar />
      </main>
    </div>
  )
}

export default withRouter(FrameLayout)
