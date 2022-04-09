import request from '@/service'
import { Tag } from '@/types/tag'
import { Methods, PathEnum, QueryParams } from './types'

class TagService {
  findAll(data: QueryParams = {}) {
    return request<QueryParams, Tag[]>({
      url: PathEnum.Tag,
      method: Methods.GET,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findOne(id: string) {
    return request<string, Tag>({
      url: `${PathEnum.Tag}/${id}`,
      method: Methods.GET,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  create(data: Tag) {
    return request<Tag, Tag>({
      url: PathEnum.Tag,
      method: Methods.POST,
      data,
      interceptors: {

        responseInterceptor: (res) => res
      }
    })
  }

  update(id: string, data: Tag) {
    return request<Tag, Tag>({
      url: `${PathEnum.Tag}/${id}`,
      method: Methods.PUT,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  remove(id: string) {
    return request<string, Tag>({
      url: `${PathEnum.Tag}/${id}`,
      method: Methods.DELETE,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new TagService()
