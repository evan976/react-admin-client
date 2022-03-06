import * as React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { rc, RouteKey } from '@/routes'
import Profile from './Profile'
import SiteOption from './SiteOption'

const SettingPage: React.FC = () => {
  return (
    <Routes>
      <Route
        index
        element={<Navigate to={rc(RouteKey.Profile).subPath!} replace/>}
      />
      <Route path={rc(RouteKey.Profile).subPath} element={<Profile />} />
      <Route path={rc(RouteKey.SiteOption).subPath} element={<SiteOption />} />
      <Route
        path='*'
        element={<Navigate to={rc(RouteKey.Profile).path} replace />}
      />
    </Routes>
  )
}

export default SettingPage
