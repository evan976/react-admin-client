import { BaseType } from '@/types'
import type { Categorize } from './categorize'

export type Meta = {
  views?: number
  comments?: number
}

export type Article = BaseType & {
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
}

export type ArticleList = {
  data: Article[]
  total: number
  page: number
  pageSize: number
  totalPage: number
}
