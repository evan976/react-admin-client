import * as React from 'react'
import { Avatar, Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { rc, RouteKey } from '@/routes'
import SvgIcon from '@/plugins/SvgIcon'
import { Container } from './index.style'
import { useSelector } from 'react-redux'
import { menuItems } from './menuItems'

type Props = {
  collapsed: boolean
}

const AwesomeSider: React.FC<Props> = (props) => {
  const navigate = useNavigate()
  const location = useLocation()

  const { user } = useSelector(state => state.account)

  return (
    <Container>
      <div className="logo">
        <SvgIcon symbolId="logo" width="32px" height="32px" />
        {!props.collapsed && <span className="logo-title">ADMIN SYSTEM</span>}
      </div>
      <div className="user-info">
        <div className="avatar">
          <Avatar size={52} src={user?.avatar} />
        </div>
        {!props.collapsed && (
          <div className="info" style={{ marginLeft: 10 }}>
            <div className="name" style={{ fontSize: 16, fontWeight: 600 }}>
              { user?.name }
            </div>
            <div>{ user?.role === 'admin' ? '管理员' : '普通用户'}</div>
          </div>
        )}
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={[rc(RouteKey.Dashboard).path]}
        onClick={(e) => navigate(e.key)}
        selectedKeys={[location.pathname]}
        items={menuItems}
      />
    </Container>
  )
}

export default AwesomeSider
