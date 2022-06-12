import * as React from 'react'
import { useSelector } from 'react-redux'
import * as Icon from '@ant-design/icons'
import profile from '@/assets/images/profile-bg.png'
import { Container } from '../styles/profile.style'

const UserInfo: React.FC = () => {

  const { user } = useSelector(state => state.account)

  return (
    <Container>
      <img src={profile} />
      <div className="user-info">
        <img src={user.avatar} alt="avatar" />
        <span className="name">{user.name}</span>
        <div className="other">
          <div>
            <Icon.EnvironmentOutlined />
            <span className="item">{user.address}</span>
          </div>
          <div className="job">
            <Icon.HomeOutlined />
            <span className="item">{user.position}</span>
          </div>
          <div>
            <Icon.UserOutlined />
            <span className="item">
              {user.role === 'admin' ? '管理员' : '普通用户'}
            </span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default UserInfo
