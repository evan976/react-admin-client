type BaseType = {
  id: string
  created_at: number
  updated_at: number
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
  status: number
  address: string
  browser: string
  ip: string
  os: string
  reply_user_email: string
  reply_user_name: string
  reply_user_site: string
  replys: Array<IComment>
}

type Config = BaseType & {
  title: string
  subTitle: string
  summary: string
  description: string
  copyright: string
  icp: string
  icp_url: string
  keywords: string[]
  logo: string
  favicon: string
  site_url: string
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
  new_password: string
  rel_new_password: string
  email: string
  role: string
  avatar: string
  site_url: string
  position: string
  address: string
}

export type Token = {
  token: string
}
