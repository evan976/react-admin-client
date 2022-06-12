import { BaseType } from '@/types'

export type UserInfo = BaseType & {
  name?: string
  email?: string
  role?: string
  avatar?: string
  siteUrl?: string
  position?: string
  address?: string
}

export type Token = {
  token: string
}
