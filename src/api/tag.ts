import request from '@/service'
import { Tag } from '@/types/tag'
import { AxiosRequestConfig } from 'axios'
import { Methods, PathEnum, QueryParams } from './types'

class TagService {
  private token: string | null
  constructor() {
    this.token = sessionStorage.getItem('token')
  }

  private setToken(config: AxiosRequestConfig) {
    if (this.token) {
      config.headers = config.headers || {}
      config.headers['Authorization'] = `Bearer ${this.token}`
    }
    return config
  }

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
        requestInterceptor: (config) => this.setToken(config),
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
        requestInterceptor: (config) => this.setToken(config),
        responseInterceptor: (res) => res
      }
    })
  }

  remove(id: string) {
    return request<string, Tag>({
      url: `${PathEnum.Tag}/${id}`,
      method: Methods.DELETE,
      interceptors: {
        requestInterceptor: (config) => this.setToken(config),
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new TagService()
