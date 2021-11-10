import React from 'react'
import { Button, Menu } from 'antd'
import './style.css'

const { SubMenu } = Menu

function Siderbar() {
  return (
    <div className="sidebar">
      <div className="user-info">user info</div>
      <Button type="primary" block className="publish-btn">发表文章</Button>
      <Menu mode="inline">
        <Menu.Item key="/">index</Menu.Item>
        <SubMenu key="/a" title="content management">
          <Menu.Item key="/article">article</Menu.Item>
          <Menu.Item key="/category">category</Menu.Item>
          <Menu.Item key="/tag">tag</Menu.Item>
        </SubMenu>
        <SubMenu key="/b" title="system management">
          <Menu.Item key="/option">option</Menu.Item>
          <Menu.Item key="/userinfo">userinfo</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default Siderbar
