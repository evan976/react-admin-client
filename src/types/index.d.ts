type BaseType = {
  id: string
  createdAt: Date
  updatedAt: Date
}

type List<T> = {
  data?: T[]
  total?: number
  page?: number
  pageSize?: number
  totalPage?: number
}

type ResBaseList<T> = {
  code: number
  message: string
  data: List<T>
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
  postCount: number
  background: string
}

type Tag = BaseType & {
  name: string
  slug: string
  color: string
  icon: string
  postCount: number
  background: string
}

type IComment = BaseType & {
  postId: number
  parentId: number
  name: string
  email: string
  site: string
  avatar: string
  content: string
  html: string
  url: string
  userAgent: string
  status: number
  weight: number
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
  post: number
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
