import * as React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { rc, RouteKey } from '@/routes'
import FrameLayout from '@/layouts'
import Dashboard from '@/pages/Dashboard'
import Category from '@/pages/Category'
import Login from '@/pages/Login'

import { GlobalStyle } from '@/styles/global'

const App: React.FC = () => {


  return (
    <div className='app'>
      <GlobalStyle />
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
            <Route path={rc(RouteKey.Category).path} element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
