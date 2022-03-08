import { ResBaseList } from '@/types'
import { Categorize } from '@/types/categorize'
import request, { RequestParams, Response } from '@/utils/request'

export const category = {
  getCategoryList (query: RequestParams): Promise<ResBaseList<Categorize>> {
    return request.get('/categories', { params: query })
  },
  getCategoryDetail (id: string): Promise<Response<Categorize>> {
    return request.get(`/categories/${id}`)
  },
  createCategory (body: Categorize): Promise<Response<Categorize>> {
    return request.post('/categories', body)
  },
  updateCategory (id: string, body: Categorize): Promise<Response<Categorize>> {
    return request.put(`/categories/${id}`, body)
  },
  removeCategory (id: string): Promise<Response<void>> {
    return request.delete(`/categories/${id}`)
  }
}
