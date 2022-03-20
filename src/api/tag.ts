import { Category } from '@/types/category'
import request, { RequestParams, Response } from '@/utils/request'

export const tag = {
  getTagList(query: RequestParams): Promise<Response<Category[]>> {
    return request.get('/tags', { params: query })
  },
  getTagDetail(id: string): Promise<Response<Category>> {
    return request.get(`/tags/${id}`)
  },
  createTag(body: Category): Promise<Response<Category>> {
    return request.post('/tags', body)
  },
  updateTag(id: string, body: Category): Promise<Response<Category>> {
    return request.put(`/tags/${id}`, body)
  },
  removeTag(id: string): Promise<Response<void>> {
    return request.delete(`/tags/${id}`)
  },
}
