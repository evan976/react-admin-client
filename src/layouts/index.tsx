import * as React from 'react'
import { Layout } from 'antd'
import { Navigate } from 'react-router-dom'
import { rc, RouteKey } from '@/routes'
import AwesomeHeader from '@/components/Header'
import AwesomeSider from '@/components/Sider'
import AwesomeContent from '@/components/Content'
import { Container } from './index.style'

const AwesomeLayout: React.FC = props => {

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
        <AwesomeSider collapsed={collapsed} />
      </Layout.Sider>
      <Layout>
        <Layout.Header className='frame-header'>
          <AwesomeHeader
            collapsed={collapsed}
            setCollapsed={() => setCollapsed(!collapsed)}
          />
        </Layout.Header>
        <Layout.Content>
          <AwesomeContent>
            {props.children}
          </AwesomeContent>
        </Layout.Content>
      </Layout>
    </Layout>
    </Container>
  )
}

export default AwesomeLayout
