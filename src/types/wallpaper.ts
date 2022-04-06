import { BaseType } from '@/types'

export type Wallpaper = BaseType & {
  name?: string
  description?: string
  url?: string
  link?: string
  status?: number
  weight?: number
}
