import request from '@/service'
import { List } from '@/types'
import { Token, UserInfo } from '@/types/user'
import { Methods, PathEnum, QueryParams } from './types'

export interface LoginDTO {
  name: string
  password: string
}

export interface RegisterDTO {
  name: string
  email: string
  password: string
}

class UserService {
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

  create(data: RegisterDTO) {
    return request<RegisterDTO, any>({
      url: PathEnum.User,
      method: 'POST',
      data,
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
        responseInterceptor: (res) => res
      }
    })
  }

  fetchAdmin() {
    return request<any, UserInfo>({
      url: `${PathEnum.User}/admin`,
      method: Methods.GET,
      interceptors: {
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
        responseInterceptor: (res) => res
      }
    })
  }

  update(id: string, data: QueryParams) {
    return request<QueryParams, UserInfo>({
      url: `${PathEnum.User}/${id}`,
      method: Methods.PUT,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  remove(id: string) {
    return request<any, UserInfo>({
      url: `${PathEnum.User}/${id}`,
      method: Methods.DELETE,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new UserService()
