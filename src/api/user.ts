import request from '@/service'
import { Token, UserInfo } from '@/types/user'
import { AxiosRequestConfig } from 'axios'
import { Methods, PathEnum } from './types'

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

  getUserInfo() {
    return request<any, UserInfo>({
      url: PathEnum.User,
      method: Methods.GET,
      interceptors: {
        requestInterceptor: (config) => this.setToken(config),
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new UserService()
