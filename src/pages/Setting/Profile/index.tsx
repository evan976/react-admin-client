import * as React from 'react'
import UserInfo from './UserInfo'
import UserList from './UserList'

const Profile: React.FC = () => {
  return (
    <div>
      <UserInfo />
      <UserList />
    </div>
  )
}

export default Profile
