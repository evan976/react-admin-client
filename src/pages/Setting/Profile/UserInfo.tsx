import * as React from 'react'
import * as Icon from '@ant-design/icons'
import profile from '@/assets/images/profile-bg.png'
import logo from '@/assets/images/profile.png'
import { Container } from '../styles/profile.style'

const UserInfo: React.FC = () => {
  return (
    <Container>
      <img src={profile} />
      <div className="user-info">
        <img src={logo} alt="avatar" />
        <span className="name">admin</span>
        <div className="other">
          <div>
            <Icon.EnvironmentOutlined />
            <span className="item">成都</span>
          </div>
          <div className="job">
            <Icon.HomeOutlined />
            <span className="item">前端工程师</span>
          </div>
          <div>
            <Icon.UserOutlined />
            <span className="item">管理员</span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default UserInfo
