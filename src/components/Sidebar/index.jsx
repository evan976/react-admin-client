import React, { useState, useMemo, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Avatar, Button, Menu } from 'antd'

import { getUserInfo } from '../../api/user'
import { setUserInfoSyncAction } from '../../store/actions/user'
import matchRoutes from '../../utils/match-routes'
import { Wrapper } from './sidebar.styles'

const { SubMenu } = Menu

function Siderbar({ route, history, location }) {

  const dispatch = useDispatch()

  const profile = useSelector(state => state.user.profile)
  const [openKeys, setOpenKeys] = useState([])
  const [selectedKeys, setSelectedKeys] = useState([])

  useEffect(async() => {
    if (!profile) {
      const result = await getUserInfo()
      dispatch(setUserInfoSyncAction(result.data))
    }
  }, [])

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
    <Wrapper>
      <div className="user-info">
        <div className="avatar">
          <Avatar size={52} src={profile?.avatarUrl} />
        </div>
        <div className="info" style={{ marginLeft: 10 }}>
          <div
            className="name"
            style={{ fontSize: 16, fontWeight: 600 }}
          >
            {profile?.nickname}
          </div>
          <div className="position">
            {profile?.position} @ {profile?.company}
          </div>
        </div>
      </div>
      <Button
        type="primary"
        block
        className="publish-btn"
        onClick={() => history.push('/content/article/create')}
      >
        发表文章
      </Button>
      {renderMenu}
    </Wrapper>
  )
}

export default Siderbar
