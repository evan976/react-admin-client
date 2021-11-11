import React from 'react'
import { Avatar, Button, Menu } from 'antd'
import {
  UserOutlined,
  HomeOutlined,
  CodeOutlined,
  SettingOutlined
} from '@ant-design/icons'
import './style.css'

const { SubMenu } = Menu

function Siderbar() {
  return (
    <div className="sidebar">
      <div className="user-info">
        <div className="avatar">
          <Avatar size={52} icon={<UserOutlined />} />
        </div>
        <div className="info" style={{marginLeft: 10}}>
          <div className="name" style={{fontSize: 16, fontWeight: 600}}>Evan</div>
          <div className="position">前端 @ undefined</div>
        </div>
      </div>
      <Button type="primary" block className="publish-btn">发表文章</Button>
      <Menu mode="inline">
        <Menu.Item key="/" icon={<HomeOutlined />}>首页</Menu.Item>
        <SubMenu key="/a" title="内容管理" icon={<CodeOutlined />}>
          <Menu.Item key="/article">文章管理</Menu.Item>
          <Menu.Item key="/category">分类管理</Menu.Item>
          <Menu.Item key="/tag">标签管理</Menu.Item>
        </SubMenu>
        <SubMenu key="/c" title="数据中心" icon={<SettingOutlined />}>
          <Menu.Item key="/option">内容数据</Menu.Item>
          <Menu.Item key="/userinfo">站点数据</Menu.Item>
        </SubMenu>
        <SubMenu key="/d" title="个人中心" icon={<SettingOutlined />}>
          <Menu.Item key="/option">个人信息</Menu.Item>
          <Menu.Item key="/userinfo">修改密码</Menu.Item>
        </SubMenu>
        <SubMenu key="/b" title="系统设置" icon={<SettingOutlined />}>
          <Menu.Item key="/option">站点配置</Menu.Item>
          <Menu.Item key="/userinfo">其他</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default Siderbar
