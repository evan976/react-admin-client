import * as React from 'react'
import { Menu, Avatar, Dropdown } from 'antd'
import * as Icon from '@ant-design/icons'
import { Container } from './index.style'

type Props = {
  collapsed: boolean
  setCollapsed: () => void
}

const FrameHeader: React.FC<Props> = props => {

  const handleHeaderMenuClick = React.useCallback(({ key }) => {
    switch (key) {
      case 'logout':
        console.log('logout')
        break
      default:
        console.log('other')
        break
    }
  }, [])

  const headerMenu = React.useMemo(() => (
    <Menu onClick={handleHeaderMenuClick}>
      <Menu.Item key='profile' icon={<Icon.UserOutlined />}>个人信息</Menu.Item>
      <Menu.Item key='logout' icon={<Icon.PoweroffOutlined />}>退出登录</Menu.Item>
    </Menu>
  ), [])

  return (
    <Container>
      <div
          className='trigger'
          onClick={props.setCollapsed}
        >
          {props.collapsed ? <Icon.MenuUnfoldOutlined /> : <Icon.MenuFoldOutlined />}
        </div>
        <div className='right'>
          <div className='link'>
            <Icon.LinkOutlined />
          </div>
          <div className='notice'>
            <Icon.BellOutlined />
          </div>
          <Dropdown overlay={headerMenu} placement='bottomRight' arrow>
            <Avatar icon={<Icon.UserOutlined />} className='user' />
          </Dropdown>
        </div>
    </Container>
  )
}

export default FrameHeader
