import * as React from 'react'
import { matchPath, useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import { rc, RouteKey, routeMap } from '@/routes'
import { Container } from './content.style'

const FrameContent: React.FC = props => {

  const location = useLocation()

  const currentRoute = Array.from(routeMap.values()).find(route => {
    return matchPath(route.path, location.pathname)
  })

  return (
    <Container>
      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item href={rc(RouteKey.Dashboard).path}>
          {rc(RouteKey.Dashboard).icon}
          <span>{rc(RouteKey.Dashboard).name}</span>
        </Breadcrumb.Item>
        {
          rc(RouteKey.Dashboard).path !== currentRoute?.path && (
            <Breadcrumb.Item href={currentRoute?.path}>
              {currentRoute?.icon}
              <span>{currentRoute?.name}</span>
            </Breadcrumb.Item>
          )
        }
      </Breadcrumb>
      <div className='content'>{props.children}</div>
    </Container>
  )
}

export default FrameContent
