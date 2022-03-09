import { Categorize } from '@/types/categorize'
import request, { RequestParams, Response } from '@/utils/request'

export const tag = {
  getTagList (query: RequestParams): Promise<Response<Categorize[]>> {
    return request.get('/tags', { params: query })
  },
  getTagDetail (id: string): Promise<Response<Categorize>> {
    return request.get(`/tags/${id}`)
  },
  createTag (body: Categorize): Promise<Response<Categorize>> {
    return request.post('/tags', body)
  },
  updateTag (id: string, body: Categorize): Promise<Response<Categorize>> {
    return request.put(`/tags/${id}`, body)
  },
  removeTag (id: string): Promise<Response<void>> {
    return request.delete(`/tags/${id}`)
  }
}
