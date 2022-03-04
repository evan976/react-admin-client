import * as React from 'react'
import * as Icon from '@ant-design/icons'
import { generatePath } from 'react-router-dom'

export enum RouteKey {
  Login,
  Dashboard,
  Category,
  Tag,
  Comment,
  Article,
  ArticleList,
  ArticleCreate,
  ArticleEdit
}

export interface RouteConfig {
  key: RouteKey
  name: string
  path: string
  subPath?: string
  icon?: React.ReactElement
  pather?(...args: Array<any>): string
}

export const routeMap: ReadonlyMap<RouteKey, RouteConfig> = new Map(
  [
    {
      key: RouteKey.Login,
      name: '登录',
      path: '/login'
    },
    {
      key: RouteKey.Dashboard,
      name: '仪表盘',
      path: '/dashboard',
      icon: <Icon.DashboardOutlined />
    },
    {
      key: RouteKey.Category,
      name: '分类管理',
      path: '/category',
      icon: <Icon.FolderOpenOutlined />
    },
    {
      key: RouteKey.Tag,
      name: '标签管理',
      path: '/tag',
      icon: <Icon.FolderOpenOutlined />
    },
    {
      key: RouteKey.Comment,
      name: '评论管理',
      path: '/comment',
      icon: <Icon.FolderOpenOutlined />
    },
    {
      key: RouteKey.Article,
      name: '文章管理',
      path: '/article',
      icon: <Icon.FolderOpenOutlined />
    },
    {
      key: RouteKey.ArticleList,
      name: '文章列表',
      path: '/article/list',
      subPath: 'list',
      icon: <Icon.FolderOpenOutlined />
    },
    {
      key: RouteKey.ArticleCreate,
      name: '发表文章',
      path: '/article/create',
      subPath: 'create',
      icon: <Icon.FolderOpenOutlined />
    },
    {
      key: RouteKey.ArticleEdit,
      name: '编辑文章',
      path: '/article/edit/:id',
      subPath: 'edit/:id',
      icon: <Icon.FolderOpenOutlined />,
      pather (id: string) {
        return generatePath(this.path, { id })
      }

    }
  ].map((route) => [route.key, route])
)

export const rc = (routeKey: RouteKey): RouteConfig => {
  return routeMap.get(routeKey)!
}

export const rcByPath = (routePath: string) => {
  return Array.from(routeMap.values()).find(route => route.path === routePath)
}

export const isRoute = (routePath: string, routeKey: RouteKey) => {
  return routeMap.get(routeKey)?.path === routePath
}
