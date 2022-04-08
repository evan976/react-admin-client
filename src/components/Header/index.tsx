import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Icon from '@ant-design/icons'
import { Menu, Avatar, Dropdown, Modal, notification } from 'antd'
import { Container } from './index.style'
import { useSessionStorageState } from 'ahooks'
import { UserInfo } from '@/types/user'

type Props = {
  collapsed: boolean
  setCollapsed: () => void
}

const AwesomeHeader: React.FC<Props> = props => {

  const navigate = useNavigate()

  const [user] = useSessionStorageState<UserInfo>('user')

  const handleHeaderMenuClick = React.useCallback(({ key }) => {
    if (key === 'logout') {
      Modal.confirm({
        title: '提示',
        icon: <Icon.ExclamationCircleOutlined />,
        content: '确认退出登录吗？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
          notification.success({ message: '退出登录成功' })
          sessionStorage.removeItem('token')
          navigate('/login')
        }
      })
    } else {
      navigate('/setting/profile')
    }
  }, [])

  const headerMenu = React.useMemo(() => (
    <Menu onClick={handleHeaderMenuClick}>
      <Menu.Item key='profile' icon={<Icon.UserOutlined />}>个人中心</Menu.Item>
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
          <div className='github'>
            <Icon.GithubOutlined />
          </div>
          <Dropdown overlay={headerMenu} placement='bottomRight' arrow>
            <Avatar src={user?.avatar} className='user' />
          </Dropdown>
        </div>
    </Container>
  )
}

export default AwesomeHeader
