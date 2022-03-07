import type { Categorize } from './categorize'

export type Meta = {
  views?: number
  comments?: number
}

export type Article = {
  _id?: string
  title?: string
  description?: string
  keywrods?: Array<string>
  thumb?: string
  content?: string
  state?: number
  origin?: number
  weight?: number
  category?: Categorize
  tags?: Categorize[]
  meta?: Meta
  created_at?: Date
  updated_at?: Date
}

export type ArticleList = {
  data: Article[]
  total: number
  page: number
  pageSize: number
  totalPage: number

}
