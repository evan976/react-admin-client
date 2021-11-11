import {
  HomeOutlined,
  CodeOutlined,
  RadarChartOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons'
import Index from '../views/Index'
import Login from '../views/Login'
import Content from '../views/Content'
import Article from '../views/Content/article'
import Category from '../views/Content/category'
import Tag from '../views/Content/tag'
import Data from '../views/Data'
import ContentData from '../views/Data/content-data'
import SiteData from '../views/Data/site-data'
import Profile from '../views/Profile'
import UserInfo from '../views/Profile/user-info'
import ModifyPassword from '../views/Profile/modify-password'
import Setting from '../views/Setting'
import SiteOption from '../views/Setting/site-option'
import Others from '../views/Setting/others'
import FrameLayout from '../layout/frame-layout'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: FrameLayout,
    children: [
      {
        path: '/index',
        component: Index,
        meta: {
          title: '首页',
          icon: HomeOutlined
        }
      },
      {
        path: '/content',
        component: Content,
        meta: {
          title: '内容管理',
          icon: CodeOutlined
        },
        children: [
          {
            path: '/content/article',
            component: Article,
            meta: {
              title: '文章管理'
            }
          },
          {
            path: '/content/category',
            component: Category,
            meta: {
              title: '分类管理'
            }
          },
          {
            path: '/content/tag',
            component: Tag,
            meta: {
              title: '标签管理'
            }
          }
        ]
      },
      {
        path: '/data',
        component: Data,
        meta: {
          title: '数据中心',
          icon: RadarChartOutlined
        },
        children: [
          {
            path: '/data/content',
            component: ContentData,
            meta: {
              title: '内容数据'
            }
          },
          {
            path: '/data/site',
            component: SiteData,
            meta: {
              title: '站点数据'
            }
          }
        ]
      },
      {
        path: '/profile',
        component: Profile,
        meta: {
          title: '个人中心',
          icon: UserOutlined
        },
        children: [
          {
            path: '/profile/user-info',
            component: UserInfo,
            meta: {
              title: '个人信息'
            }
          },
          {
            path: '/profile/modify-password',
            component: ModifyPassword,
            meta: {
              title: '修改密码'
            }
          }
        ]
      },
      {
        path: '/setting',
        component: Setting,
        meta: {
          title: '系统设置',
          icon: SettingOutlined
        },
        children: [
          {
            path: '/setting/site-option',
            component: SiteOption,
            meta: {
              title: '站点配置'
            }
          },
          {
            path: '/setting/others',
            component: Others,
            meta: {
              title: '其它'
            }
          }
        ]
      }
    ]
  }
]

export default routes
