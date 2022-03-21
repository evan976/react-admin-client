import request from '@/service'
import { List } from '@/types'
import { Category } from '@/types/category'
import { AxiosRequestConfig } from 'axios'
import { Methods, PathEnum, QueryParams } from './types'

class CategoryService {
  private token: string | null
  constructor() {
    this.token = localStorage.getItem('token')
  }

  private setToken(config: AxiosRequestConfig) {
    if (this.token) {
      config.headers = config.headers || {}
      config.headers['Authorization'] = `Bearer ${this.token}`
    }
    return config
  }

  findAll(data: QueryParams) {
    return request<QueryParams, List<Category>>({
      url: PathEnum.Category,
      method: Methods.GET,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findOne(id: string) {
    return request<string, Category>({
      url: `${PathEnum.Category}/${id}`,
      method: Methods.GET,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  create(data: Category) {
    return request<Category, Category>({
      url: PathEnum.Category,
      method: Methods.POST,
      data,
      interceptors: {
        requestInterceptor: (config) => this.setToken(config),
        responseInterceptor: (res) => res
      }
    })
  }

  update(id: string, data: Category) {
    return request<Category, Category>({
      url: `${PathEnum.Category}/${id}`,
      method: Methods.PUT,
      data,
      interceptors: {
        requestInterceptor: (config) => this.setToken(config),
        responseInterceptor: (res) => res
      }
    })
  }

  remove(id: string) {
    return request<string, Category>({
      url: `${PathEnum.Category}/${id}`,
      method: Methods.DELETE,
      interceptors: {
        requestInterceptor: (config) => this.setToken(config),
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new CategoryService()
