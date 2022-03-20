import { BaseType } from '@/types'

export type UserInfo = BaseType & {
  name?: string
  email?: string
  role?: string
  avatar?: string
}

export type Token = {
  token: string
}
