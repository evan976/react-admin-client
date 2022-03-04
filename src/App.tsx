import * as React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { rc, RouteKey } from '@/routes'
import FrameLayout from '@/layouts/FrameLayout'
import Dashboard from '@/pages/Dashboard'
import Login from '@/pages/Login'

const App: React.FC = () => {


  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path={rc(RouteKey.Login).path} element={<Login />} />
          <Route
            path='/'
            element={
              <FrameLayout>
                <Outlet />
              </FrameLayout>
            }
          >
            <Route index={true} element={<Navigate to={rc(RouteKey.Dashboard).path} replace />} />
            <Route path={rc(RouteKey.Dashboard).path} element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
