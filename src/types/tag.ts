import { BaseType } from '@/types'

export type Tag = BaseType & {
  name?: string
  slug?: string
  color?: string
  icon?: string
  postCount?: number
  background?: string
}
