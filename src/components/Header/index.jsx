import React, { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Avatar, Menu, Dropdown } from 'antd'
import {
  UserOutlined,
  LinkOutlined,
  BellOutlined,
  UnlockOutlined,
  PoweroffOutlined
} from '@ant-design/icons'
import logo from '../../assets/images/logo.svg'
import { logoutSyncAction } from '../../store/actions/user'
import { resetCategorySyncAction } from '../../store/actions/category'
import { resetArticleSyncAction } from '../../store/actions/article'
import { resetTagSyncAction } from '../../store/actions/tag'
import './style.css'

function FrameHeader(props) {

  const dispatch = useDispatch()

  const handleHeaderMenuClick = useCallback(({ key }) => {
    switch (key) {
    case '/logout':
      dispatch(logoutSyncAction())
      dispatch(resetCategorySyncAction())
      dispatch(resetArticleSyncAction())
      dispatch(resetTagSyncAction())
      break
    default:
      break
    }
  }, [])

  const headerMenu = useMemo(
    () => (
      <Menu onClick={handleHeaderMenuClick}>
        <Menu.Item key="/profile" icon={<UserOutlined />}>
          个人信息
        </Menu.Item>
        <Menu.Item key="/option" icon={<UnlockOutlined />}>
          修改密码
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="/logout" icon={<PoweroffOutlined />}>
          退出登录
        </Menu.Item>
      </Menu>
    ),
    []
  )

  return (
    <header className="header">
      <div className="header-container main-container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span style={{ marginLeft: 20, color: '#1890FF' }}>
            生之宇宙，归之殊途
          </span>
        </div>
        <div className="right">
          <div className="link">
            <LinkOutlined />
          </div>
          <div className="notice">
            <BellOutlined />
          </div>
          <Dropdown overlay={headerMenu} placement="bottomRight" arrow>
            <Avatar icon={<UserOutlined />} />
          </Dropdown>
        </div>
      </div>
    </header>
  )
}

export default FrameHeader
