import React, { useState, useMemo, useCallback, useEffect } from 'react'
import { Avatar, Button, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import matchRoutes from '../../utils/match-routes'
import './style.css'

const { SubMenu } = Menu

function Siderbar({ route, history, location }) {
  const [openKeys, setOpenKeys] = useState([])
  const [selectedKeys, setSelectedKeys] = useState([])

  const handleMenuChange = useCallback(({ key }) => history.push(key), [])

  const handleOpenChange = useCallback(openKeys => setOpenKeys(openKeys), [])

  const renderMenu = useMemo(() => {
    const renderMenuItem = menus =>
      menus.map(menu => {
        if (menu.children) {
          return (
            <SubMenu
              key={menu.path}
              icon={menu.meta.icon ? <menu.meta.icon /> : null}
              title={menu.meta.title}
            >
              {renderMenuItem(menu.children)}
            </SubMenu>
          )
        }
        return (
          <Menu.Item
            key={menu.path}
            icon={menu.meta.icon ? <menu.meta.icon /> : null}
          >
            {menu.meta.title}
          </Menu.Item>
        )
      })
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={['/index']}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onClick={handleMenuChange}
        onOpenChange={handleOpenChange}
      >
        {renderMenuItem(route.children)}
      </Menu>
    )
  }, [route, selectedKeys, openKeys])

  useEffect(() => {
    const matches = matchRoutes(route.children, location.pathname)
    if (matches.length > 1) {
      setSelectedKeys([matches.pop().route.path])
      setOpenKeys(matches.map(item => item.route.path))
    } else {
      setSelectedKeys([matches.pop()?.route.path ?? '/index'])
    }
  }, [location])

  return (
    <div className="sidebar">
      <div className="user-info">
        <div className="avatar">
          <Avatar size={52} icon={<UserOutlined />} />
        </div>
        <div className="info" style={{ marginLeft: 10 }}>
          <div className="name" style={{ fontSize: 16, fontWeight: 600 }}>
            Evan
          </div>
          <div className="position">前端 @ undefined</div>
        </div>
      </div>
      <Button type="primary" block className="publish-btn" onClick={() => history.push('/content/article/create')}>
        发表文章
      </Button>
      {renderMenu}
    </div>
  )
}

export default Siderbar
