import * as React from 'react'
import { Avatar, Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { rc, RouteKey } from '@/routes'
import SvgIcon from '@/plugins/SvgIcon'
import { Container } from './index.style'

type Props = {
  collapsed: boolean
}

const FrameSider: React.FC<Props> = props => {

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Container>
      <div className='logo'>
        <SvgIcon symbolId='logo' width='32px' height='32px' />
        {!props.collapsed && <span className='logo-title'>ADMIN SYSTEM</span>}
      </div>
      <div className='user-info'>
        <div className='avatar'>
          <Avatar size={52} src='https://admin.evanone.site/img/avatar.adf3a350.png' />
        </div>
        {
          !props.collapsed && (
            <div className='info' style={{marginLeft: 10}}>
              <div className='name' style={{fontSize: 16, fontWeight: 600}}>Evan</div>
              <div>成都 @ 海妖科技</div>
            </div>
          )
        }
      </div>
      <Menu
        mode='inline'
        defaultSelectedKeys={[rc(RouteKey.Dashboard).path]}
        onClick={(e) => navigate(e.key)}
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key={rc(RouteKey.Dashboard).path} icon={rc(RouteKey.Dashboard).icon}>
          {rc(RouteKey.Dashboard).name}
        </Menu.Item>
        <Menu.Item key={rc(RouteKey.Category).path} icon={rc(RouteKey.Category).icon}>
          {rc(RouteKey.Category).name}
        </Menu.Item>
        <Menu.Item key={rc(RouteKey.Tag).path} icon={rc(RouteKey.Tag).icon}>
          {rc(RouteKey.Tag).name}
        </Menu.Item>
        <Menu.SubMenu
          key={rc(RouteKey.Article).path}
          icon={rc(RouteKey.Article).icon}
          title={rc(RouteKey.Article).name}
        >
          <Menu.Item key={rc(RouteKey.ArticleList).path}>{rc(RouteKey.ArticleList).name}</Menu.Item>
          <Menu.Item key={rc(RouteKey.ArticleCreate).path}>{rc(RouteKey.ArticleCreate).name}</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key={rc(RouteKey.Comment).path} icon={rc(RouteKey.Comment).icon}>
          {rc(RouteKey.Comment).name}
        </Menu.Item>
      </Menu>
    </Container>
  )
}

export default FrameSider
