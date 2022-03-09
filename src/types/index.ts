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
export interface TableResult<T> {
  total: number
  list: T[]
}
