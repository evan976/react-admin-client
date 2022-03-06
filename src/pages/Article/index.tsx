import * as React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { rc, RouteKey } from '@/routes'
import ArticleList from './ArticleList'
import ArticleEdit from './ArticleEdit'

const ArticlePage: React.FC = () => {
  return (
    <Routes>
      <Route
        index
        element={<Navigate to={rc(RouteKey.ArticleList).subPath!} replace/>}
      />
      <Route path={rc(RouteKey.ArticleList).subPath} element={<ArticleList />} />
      <Route path={rc(RouteKey.ArticleCreate).subPath} element={<ArticleEdit />} />
      <Route path={rc(RouteKey.ArticleEdit).subPath} element={<ArticleEdit />} />
      <Route
        path='*'
        element={<Navigate to={rc(RouteKey.ArticleList).path} replace />}
      />
    </Routes>
  )
}

export default ArticlePage
