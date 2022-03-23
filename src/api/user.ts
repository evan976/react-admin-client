import request from '@/service'
import { List } from '@/types'
import { Token, UserInfo } from '@/types/user'
import { AxiosRequestConfig } from 'axios'
import { Methods, PathEnum, QueryParams } from './types'

export interface LoginDTO {
  name: string
  password: string
}

class UserService {
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

  login(data: LoginDTO) {
    return request<LoginDTO, Token>({
      url: PathEnum.Login,
      data,
      method: Methods.POST,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findAll(data: QueryParams) {
    return request<QueryParams, List<UserInfo>>({
      url: PathEnum.User,
      method: Methods.GET,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findOne() {
    return request<any, UserInfo>({
      url: PathEnum.User,
      method: Methods.GET,
      interceptors: {
        requestInterceptor: (config) => this.setToken(config),
        responseInterceptor: (res) => res
      }
    })
  }

  updatePassword(id: string, data: QueryParams) {
    return request<QueryParams, UserInfo>({
      url: `${PathEnum.User}/${id}`,
      method: Methods.PATCH,
      data,
      interceptors: {
        requestInterceptor: (config) => this.setToken(config),
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new UserService()
