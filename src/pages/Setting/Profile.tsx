import * as React from 'react'
import profile from '@/assets/images/profile.png'

const Profile: React.FC = () => {
  return (
    <div>
      <img
        src={profile}
        width='100%'
        height='260px'
      />
    </div>
  )
}

export default Profile
