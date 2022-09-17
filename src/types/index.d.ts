type BaseType = {
  id: string
  created_at: Date
  updated_at: Date
}

type List<T> = {
  data?: T[]
  total?: number
  page?: number
  page_size?: number
  total_page?: number
}

type ResBaseList<T> = {
  code: number
  message: string
  result: List<T>
}

interface TableResult<T> {
  total: number
  list: T[]
}

type Article = BaseType & {
  title: string
  summary: string
  thumb: string
  content: string
  status: number
  origin: number
  weight: number
  category: Category
  tags: Tag[]
  likes: number
  views: number
  comments: number
}

type Category = BaseType & {
  name: string
  slug: string
  icon: string
  description: string
  article_count: number
  background: string
}

type Tag = BaseType & {
  name: string
  slug: string
  color: string
  icon: string
  article_count: number
  background: string
}

type IComment = BaseType & {
  article_id: number
  parent_id: number
  name: string
  email: string
  site: string
  avatar: string
  content: string
  html: string
  url: string
  status: number
  address: string
  browser: string
  ip: string
  os: string
  replyUserName: string
  replyUserEmail: string
}

type Config = BaseType & {
  title: string
  subTitle: string
  summary: string
  description: string
  copyright: string
  icp: string
  icpUrl: string
  keywords: string[]
  logo: string
  favicon: string
  siteUrl: string
}

export type SiteData = {
  article: number
  category: number
  tag: number
  comment: number
}

type UserInfo = BaseType & {
  name: string
  password: string
  newPassword: string
  relNewPassword: string
  email: string
  role: string
  avatar: string
  siteUrl: string
  position: string
  address: string
}

export type Token = {
  token: string
}

type Wallpaper = BaseType & {
  name: string
  description: string
  url: string
  link: string
  status: number
  weight: number
}
