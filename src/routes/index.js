import {
  HomeOutlined,
  CodeOutlined,
  RadarChartOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons'
import withLoadable from '../utils/with-loadable'

const Index = withLoadable(() => import('../views/Index'))
const Login = withLoadable(() => import('../views/Login'))
const Content = withLoadable(() => import('../views/Content'))
const Article = withLoadable(() => import('../views/Content/article'))
const Category = withLoadable(() => import('../views/Content/category'))
const Data = withLoadable(() => import('../views/Data'))
const ContentData = withLoadable(() => import('../views/Data/content-data'))
const SiteData = withLoadable(() => import('../views/Data/site-data'))
const Profile = withLoadable(() => import('../views/Profile'))
const UserInfo = withLoadable(() => import('../views/Profile/user-info'))
const ModifyPassword = withLoadable(() => import('../views/Profile/modify-password'))
const Setting = withLoadable(() => import('../views/Setting'))
const SiteOption = withLoadable(() => import('../views/Setting/site-option'))
const Others = withLoadable(() => import('../views/Setting/others'))
const FrameLayout = withLoadable(() => import('../layout/frame-layout'))
const EditorArticle = withLoadable(() => import('../components/EditorArticle'))

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/content/article/create',
    component: EditorArticle
  },
  {
    path: '/content/article/edit/:id',
    component: EditorArticle
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
