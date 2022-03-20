import { BaseType } from '@/types'
import type { Category } from './category'
import { Tag } from './tag'

export type Article = BaseType & {
  title?: string
  summary?: string
  thumb?: string
  content?: string
  status?: number
  origin?: number
  weight?: number
  category?: Category
  tags?: Tag[]
  likes?: number
  views?: number
  comments?: number
}
