import type { ArticleList } from '@/types/article'
import request, { RequestParams, Response } from '@/utils/request'

export const article = {
  getArticleList(query: RequestParams): Promise<Response<ArticleList>> {
    return request.get('/posts', { params: query })
  }
}
