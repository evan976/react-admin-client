import request from '@/service'
import { List } from '@/types'
import { Comment } from '@/types/comment'
import { Methods, PathEnum } from './types'

class CommentService {
  findAll(data: Record<string, string | number>) {
    return request<Record<string, string | number>, List<Comment>>({
      url: PathEnum.Comment,
      method: Methods.GET,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findOne(id: string) {
    return request<string, Comment>({
      url: `${PathEnum.Comment}/${id}`,
      method: Methods.GET,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  create(data: Comment) {
    return request<Comment, Comment>({
      url: PathEnum.Comment,
      method: Methods.POST,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  update(id: string, data: Comment) {
    return request<Comment, Comment>({
      url: `${PathEnum.Comment}/${id}`,
      method: Methods.PUT,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  remove(id: string) {
    return request<string, Comment>({
      url: `${PathEnum.Comment}/${id}`,
      method: Methods.DELETE,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new CommentService()
