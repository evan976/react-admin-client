import { BaseType } from '@/types'

export type Tag = BaseType & {
  label?: string
  value?: string
  color?: string
  icon?: string
  postCount?: number
  background?: string
}
