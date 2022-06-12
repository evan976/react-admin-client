import { ItemType } from 'antd/lib/menu/hooks/useItems'
import { rc, RouteKey } from '@/routes'

export const menuItems: ItemType[] = [
  {
    key: rc(RouteKey.Dashboard).path,
    icon: rc(RouteKey.Dashboard).icon,
    label: rc(RouteKey.Dashboard).name
  },
  {
    key: rc(RouteKey.Article).path,
    icon: rc(RouteKey.Article).icon,
    label: rc(RouteKey.Article).name,
    children: [
      {
        key: rc(RouteKey.ArticleList).path,
        label: rc(RouteKey.ArticleList).name
      },
      {
        key: rc(RouteKey.ArticleCreate).path,
        label: rc(RouteKey.ArticleCreate).name
      }
    ]
  },
  {
    key: rc(RouteKey.Category).path,
    icon: rc(RouteKey.Category).icon,
    label: rc(RouteKey.Category).name
  },
  {
    key: rc(RouteKey.Tag).path,
    icon: rc(RouteKey.Tag).icon,
    label: rc(RouteKey.Tag).name
  },
  {
    key: rc(RouteKey.Comment).path,
    icon: rc(RouteKey.Comment).icon,
    label: rc(RouteKey.Comment).name
  },
  {
    key: rc(RouteKey.Advertisement).path,
    icon: rc(RouteKey.Advertisement).icon,
    label: rc(RouteKey.Advertisement).name
  },
  {
    key: rc(RouteKey.Setting).path,
    icon: rc(RouteKey.Setting).icon,
    label: rc(RouteKey.Setting).name,
    children: [
      {
        key: rc(RouteKey.Profile).path,
        label: rc(RouteKey.Profile).name
      },
      {
        key: rc(RouteKey.SiteOption).path,
        label: rc(RouteKey.SiteOption).name
      }
    ]
  }
]
