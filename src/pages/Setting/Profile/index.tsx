import * as React from 'react'
import { Col, Row } from 'antd'
import UserInfo from './UserInfo'
import ProjectList from './ProjectList'
import UserList from './UserList'

const Profile: React.FC = () => {
  return (
    <div>
      <UserInfo />
      <Row gutter={[16, 8]}>
        <Col span={10}>
          <ProjectList />
        </Col>
        <Col span={14}>
          <UserList />
        </Col>
      </Row>
    </div>
  )
}

export default Profile
