import { ResBaseList } from '@/types'
import { Category } from '@/types/category'
import request, { RequestParams, Response } from '@/utils/request'

export const category = {
  getCategoryList(query: RequestParams): Promise<ResBaseList<Category>> {
    return request.get('/categories', { params: query })
  },
  getCategoryDetail(id: string): Promise<Response<Category>> {
    return request.get(`/categories/${id}`)
  },
  createCategory(body: Category): Promise<Response<Category>> {
    return request.post('/categories', body)
  },
  updateCategory(id: string, body: Category): Promise<Response<Category>> {
    return request.put(`/categories/${id}`, body)
  },
  removeCategory(id: string): Promise<Response<void>> {
    return request.delete(`/categories/${id}`)
  }
}
