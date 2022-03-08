export type BaseType = {
  _id?: string
  created_at?: Date
  updated_at?: Date
}

export type BaseList<T> = {
  data?: T[]
  total?: number
  page?: number
  pageSize?: number
  totalPage?: number
}

export type ResBaseList<T> = {
  code: number
  message: string
  data: BaseList<T>
}

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

export interface TableResult<T> {
  total: number
  list: T[]
}
