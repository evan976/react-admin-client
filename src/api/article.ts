import request from '@/service'
import { Article, List } from '@/types'
import { Methods, Paths } from '@/enums'

class ArticleService {

  findAll(data: Record<string, string | number> = {}) {
    return request<Record<string, string | number>, List<Article>>({
      url: Paths.Post,
      method: Methods.GET,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findOne(id: string) {
    return request<string, Article>({
      url: `${Paths.Post}/${id}`,
      method: Methods.GET,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  create(data: Partial<Article>) {
    return request<Partial<Article>, Article>({
      url: Paths.Post,
      method: Methods.POST,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  update(id: string, data: Partial<Article>) {
    return request<Partial<Article>, Article>({
      url: `${Paths.Post}/${id}`,
      method: Methods.PUT,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  remove(id: string) {
    return request<string, Article>({
      url: `${Paths.Post}/${id}`,
      method: Methods.DELETE,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new ArticleService()
