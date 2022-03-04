import { rc, RouteKey } from '@/routes'
import * as React from 'react'
import { Navigate } from 'react-router-dom'

const FrameLayout: React.FC = (props) => {

  const token = localStorage.getItem('token')
  return !token ? <Navigate to={rc(RouteKey.Login).path} /> : (
    <>
      <div>Layout</div>
      <div>{props?.children}</div>
    </>
  )
}

export default FrameLayout
