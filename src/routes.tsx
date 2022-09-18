import * as React from 'react'
import * as Icon from '@ant-design/icons'
import { generatePath } from 'react-router-dom'

export enum RouteKey {
  Login,
  Dashboard,
  Category,
  Tag,
  Comment,
  User,
  Article,
  ArticleList,
  ArticleCreate,
  ArticleEdit,
  Setting,
  Profile,
  SiteOption
}

export interface RouteConfig {
  key: RouteKey
  path: string
  subPath?: string
  name?: string
  icon?: React.ReactElement
  pather?(...args: Array<any>): string
}

export const routeMap: ReadonlyMap<RouteKey, RouteConfig> = new Map(
  [
    {
      key: RouteKey.Login,
      path: '/login'
    },
    {
      key: RouteKey.Dashboard,
      name: '数据概览',
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
      icon: <Icon.TagOutlined />
    },
    {
      key: RouteKey.Comment,
      name: '评论管理',
      path: '/comment',
      icon: <Icon.CommentOutlined />
    },
    {
      key: RouteKey.User,
      name: '用户管理',
      path: '/user',
      icon: <Icon.UserOutlined />
    },
    {
      key: RouteKey.Article,
      name: '文章管理',
      path: '/article',
      icon: <Icon.FileTextOutlined />
    },
    {
      key: RouteKey.ArticleList,
      name: '文章列表',
      path: '/article/list',
      subPath: 'list'
    },
    {
      key: RouteKey.ArticleCreate,
      name: '发表文章',
      path: '/article/create',
      subPath: 'create'
    },
    {
      key: RouteKey.ArticleEdit,
      name: '编辑文章',
      path: '/article/edit/:id',
      subPath: 'edit/:id',
      pather(id: string) {
        return generatePath(this.path, { id })
      }
    },
    {
      key: RouteKey.Setting,
      name: '系统设置',
      path: '/setting',
      icon: <Icon.SettingOutlined />
    },
    {
      key: RouteKey.Profile,
      name: '个人中心',
      path: '/setting/profile',
      subPath: 'profile'
    },
    {
      key: RouteKey.SiteOption,
      name: '站点配置',
      path: '/setting/option',
      subPath: 'option'
    }
  ].map((route) => [route.key, route])
)

export const rc = (routeKey: RouteKey): RouteConfig => {
  return routeMap.get(routeKey)!
}

export const rcByPath = (routePath: string) => {
  return Array.from(routeMap.values()).find((route) => route.path === routePath)
}

export const isRoute = (routePath: string, routeKey: RouteKey) => {
  return routeMap.get(routeKey)?.path === routePath
}
