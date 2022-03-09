import type { UserInfo, Token } from '@/types/user'
import request, { RequestParams, Response } from '@/utils/request'

export const user = {
  login (params: RequestParams): Promise<Response<Token>> {
    return request.post('/users/login', params)
  },
  register (params: RequestParams): Promise<Response> {
    return request.post('/users/register', params)
  },
  getUserInfo (): Promise<Response<UserInfo>> {
    return request.get('/users')
  }
}
