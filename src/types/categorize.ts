import { BaseType } from '@/types'

export type Extension = {
  name?: string
  value?: string
}

export type Categorize = BaseType & {
  name?: string
  slug?: string
  description?: string
  extension?: Extension
}
