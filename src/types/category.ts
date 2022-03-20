import { BaseType } from '@/types'

export type Category = BaseType & {
  name?: string
  slug?: string
  icon?: string
  description?: string
  postCount?: number
  background: string
}
