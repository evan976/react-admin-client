import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as Icon from '@ant-design/icons'
import { Menu, Avatar, Dropdown, Modal, notification } from 'antd'
import { Container } from './index.style'
import { logout } from '@/store/features/acountSlice'
import { ItemType } from 'antd/lib/menu/hooks/useItems'

type Props = {
  collapsed: boolean
  setCollapsed: () => void
}

const menuItems: ItemType[] = [
  {
    key: 'profile',
    icon: <Icon.UserOutlined />,
    label: '用户信息'
  },
  {
    key: 'logout',
    icon: <Icon.LogoutOutlined />,
    label: '退出登录'
  }
]

const AwesomeHeader: React.FC<Props> = props => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.account)

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
          dispatch(logout())
        }
      })
    } else {
      navigate('/setting/profile')
    }
  }, [])

  const headerMenu = React.useMemo(() => (
    <Menu items={menuItems} onClick={handleHeaderMenuClick} />
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
            <a href={user.siteUrl} target='_blank'><Icon.LinkOutlined /></a>
          </div>
          <div className='github'>
            <a href="https://github.com/wujihua118" target='_blank'><Icon.GithubOutlined /></a>
          </div>
          <Dropdown overlay={headerMenu} placement='bottomRight' arrow>
            <Avatar src={user?.avatar} className='user' />
          </Dropdown>
        </div>
    </Container>
  )
}

export default AwesomeHeader
