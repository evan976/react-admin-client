import request from '@/service'
import { List, Token, UserInfo } from '@/types'
import { Methods, Paths } from '@/enums'

class UserService {
  login(data: Pick<UserInfo, 'name' | 'password'>) {
    return request<Pick<UserInfo, 'name' | 'password'>, Token>({
      url: Paths.Login,
      data,
      method: Methods.POST,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  create(data: Pick<UserInfo, 'name' | 'email' | 'password'>) {
    return request<Pick<UserInfo, 'name' | 'email' | 'password'>, UserInfo>({
      url: Paths.User,
      method: 'POST',
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findAll(data: Record<string, string | number> = {}) {
    return request<Record<string, string | number>, List<UserInfo>>({
      url: Paths.User,
      method: Methods.GET,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findOne() {
    return request<any, UserInfo>({
      url: Paths.User,
      method: Methods.GET,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  fetchAdmin() {
    return request<any, UserInfo>({
      url: `${Paths.User}/admin`,
      method: Methods.GET,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  updatePassword(id: string, data: Pick<UserInfo, 'password' | 'newPassword' | 'relNewPassword'>) {
    return request<Pick<UserInfo, 'password' | 'newPassword' | 'relNewPassword'>, UserInfo>({
      url: `${Paths.User}/${id}`,
      method: Methods.PATCH,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  update(id: string, data: Partial<Omit<UserInfo, 'password' | 'newPassword' | 'relNewPassword'>>) {
    return request<Partial<Omit<UserInfo, 'password' | 'newPassword' | 'relNewPassword'>>, UserInfo>({
      url: `${Paths.User}/${id}`,
      method: Methods.PUT,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  remove(id: string) {
    return request<any, UserInfo>({
      url: `${Paths.User}/${id}`,
      method: Methods.DELETE,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new UserService()
