import request from '@/service'
import { IComment, List } from '@/types'
import { Methods, Paths } from '@/enums'

class CommentService {
  findAll(data: Record<string, string | number> = {}) {
    return request<Record<string, string | number>, List<IComment>>({
      url: `${Paths.Comment}/list`,
      method: Methods.GET,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findOne(id: string) {
    return request<string, IComment>({
      url: `${Paths.Comment}/${id}`,
      method: Methods.GET,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  create(data: Partial<IComment>) {
    return request<Partial<IComment>, IComment>({
      url: Paths.Comment,
      method: Methods.POST,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  update(id: string, data: Partial<IComment>) {
    return request<Partial<IComment>, IComment>({
      url: `${Paths.Comment}/${id}`,
      method: Methods.PUT,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  remove(id: string) {
    return request<string, IComment>({
      url: `${Paths.Comment}/${id}`,
      method: Methods.DELETE,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new CommentService()
