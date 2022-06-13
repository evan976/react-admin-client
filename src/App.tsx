import * as React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { rc, RouteKey } from '@/routes'
import AwesomeLayout from '@/layouts'
import DashboardPage from '@/pages/Dashboard'
import CategoryPage from '@/pages/Category'
import TagPage from '@/pages/Tag'
import ArticlePage from '@/pages/Article'
import CommentPage from '@/pages/Comment'
import LoginPage from '@/pages/Login'
import AdvertisementPage from './pages/Advertisement'
import SettingPage from '@/pages/Setting'
import { GlobalStyle } from '@/styles/global'

const App: React.FC = () => {
  return (
    <div className="app">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={rc(RouteKey.Login).path} element={<LoginPage />} />
          <Route
            path="/"
            element={
              <AwesomeLayout>
                <Outlet />
              </AwesomeLayout>
            }
          >
            <Route index element={<Navigate to={rc(RouteKey.Dashboard).path} replace />} />
            <Route path={rc(RouteKey.Dashboard).path} element={<DashboardPage />} />
            <Route path={rc(RouteKey.Category).path} element={<CategoryPage />} />
            <Route path={rc(RouteKey.Tag).path} element={<TagPage />} />
            <Route path={rc(RouteKey.Comment).path} element={<CommentPage />} />
            <Route path={rc(RouteKey.Advertisement).path} element={<AdvertisementPage />} />
            <Route path={`${rc(RouteKey.Article).path}/*`} element={<ArticlePage />} />
            <Route path={`${rc(RouteKey.Setting).path}/*`} element={<SettingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
