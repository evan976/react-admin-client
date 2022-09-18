import { notification } from 'antd'
import Request from './request/index'
import type { RequestConfig } from './request/types'
import { accountApi, logout } from '@/store/features/acountSlice'
import store from '@/store'
import { AxiosResponse } from 'axios'

export interface CustomRequestConfig<T> extends RequestConfig {
  data?: T
}

export interface Response<T> extends AxiosResponse<any, any> {
  code: number
  message: string
  result: T
}

const request = new Request({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    requestInterceptor: (config) => {
      const token = accountApi.getToken()
      if (token) {
        config.headers = config.headers || {}
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    },
    responseInterceptor: (response) => response,
    responseInterceptorCatch: (error) => {
      switch (error.response.data.code) {
        case 400:
          notification.error({
            message: '请求错误',
            description: error.response.data.message
          })
          break

        case 401:
          store.dispatch(logout())
          notification.error({
            message: error.response.data.message
          })
          window.location.reload()
          break
        case 403:
          notification.error({ message: '非管理员暂无权限' })
          break
        default:
          notification.error({
            message: error.response.data.message
          })
          break
      }
    }
  }
})

const customRequest = <D = any, T = any>(config: CustomRequestConfig<D>) => {
  const { method = 'GET' } = config
  if (method.toUpperCase() === 'GET') {
    config.params = config.data
  }
  return request.request<Response<T>>(config)
}

// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url)
}

// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest()
}

export default customRequest
