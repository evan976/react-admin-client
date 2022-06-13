import request from '@/service'
import { Category, List } from '@/types'
import { Methods, Paths } from '@/enums'

class CategoryService {

  findAll(data: Record<string, string | number> = {}) {
    return request<Record<string, string | number>, List<Category>>({
      url: Paths.Category,
      method: Methods.GET,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findOne(id: string) {
    return request<string, Category>({
      url: `${Paths.Category}/${id}`,
      method: Methods.GET,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  create(data: Partial<Category>) {
    return request<Partial<Category>, Category>({
      url: Paths.Category,
      method: Methods.POST,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  update(id: string, data: Partial<Category>) {
    return request<Partial<Category>, Category>({
      url: `${Paths.Category}/${id}`,
      method: Methods.PUT,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  remove(id: string) {
    return request<string, Category>({
      url: `${Paths.Category}/${id}`,
      method: Methods.DELETE,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new CategoryService()
