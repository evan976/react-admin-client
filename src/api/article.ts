import request from '@/service'
import { List } from '@/types'
import { Article } from '@/types/article'
import { Methods, PathEnum } from './types'


class ArticleService {

  findAll(data: Record<string, string | number>) {
    return request<Record<string, string | number>, List<Article>>({
      url: PathEnum.Post,
      method: Methods.GET,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findOne(id: string) {
    return request<string, Article>({
      url: `${PathEnum.Post}/${id}`,
      method: Methods.GET,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  create(data: Article) {
    return request<Article, Article>({
      url: PathEnum.Post,
      method: Methods.POST,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  update(id: string, data: Article) {
    return request<Article, Article>({
      url: `${PathEnum.Post}/${id}`,
      method: Methods.PUT,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  remove(id: string) {
    return request<string, Article>({
      url: `${PathEnum.Post}/${id}`,
      method: Methods.DELETE,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new ArticleService()