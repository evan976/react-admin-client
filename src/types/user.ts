import { BaseType } from '@/types'

export type UserInfo = {
  name?: string
  email?: string
  role?: string
  avatar_url?: string
  blog?: string
} & BaseType

export type Token = {
  token: string
}
