import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RequestInterceptors {
  // 请求拦截
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  // 响应拦截
  responseInterceptor?: <T = AxiosResponse>(response: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors
}

export interface CancelRequestSource {
  [index: string]: () => void
}
