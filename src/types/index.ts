export type BaseType = {
  id?: string
  createdAt?: Date
  updatedAt?: Date
}

export type List<T> = {
  data?: T[]
  total?: number
  page?: number
  pageSize?: number
  totalPage?: number
}

export type ResBaseList<T> = {
  code: number
  message: string
  data: List<T>
}
export interface TableResult<T> {
  total: number
  list: T[]
}
