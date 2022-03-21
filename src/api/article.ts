import request from '@/service'
import { List } from '@/types'
import { Article } from '@/types/article'
import { Methods, PathEnum, QueryParams } from './types'


class ArticleService {

  findAll(data: QueryParams) {
    return request<QueryParams, List<Article>>({
      url: PathEnum.Post,
      method: Methods.GET,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new ArticleService()
