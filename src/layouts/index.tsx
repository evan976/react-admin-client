import * as React from 'react'
import { Layout } from 'antd'
import { Navigate } from 'react-router-dom'
import { rc, RouteKey } from '@/routes'
import FrameHeader from '@/components/FrameHeader'
import FrameSider from '@/components/FrameSider'
import FrameContent from '@/components/FrameContent'
import { Container } from './index.style'

const FrameLayout: React.FC = props => {

  const [collapsed, setCollapsed] = React.useState<boolean>(false)

  const token = sessionStorage.getItem('token')

  return !token ? <Navigate to={rc(RouteKey.Login).path} /> : (
    <Container>
      <Layout className='frame-layout'>
      <Layout.Sider
        theme='light'
        width={240}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <FrameSider collapsed={collapsed} />
      </Layout.Sider>
      <Layout>
        <Layout.Header className='frame-header'>
          <FrameHeader
            collapsed={collapsed}
            setCollapsed={() => setCollapsed(!collapsed)}
          />
        </Layout.Header>
        <Layout.Content>
          <FrameContent>
            {props.children}
          </FrameContent>
        </Layout.Content>
      </Layout>
    </Layout>
    </Container>
  )
}

export default FrameLayout
