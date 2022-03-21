import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

interface RequestInterceptors<T = AxiosResponse> {
  //请求成功
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  //请求失败
  requestInterceptorCatch?: (error: any) => any
  //响应成功
  responseInterceptor?: (response: T) => T
  //响应失败
  responseInterceptorCatch?: (error: any) => any
}

interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
}

export class Request {
  private instance: AxiosInstance
  private interceptors?: RequestInterceptors

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        console.log(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        return response.data
      },
      (error) => {
        console.log(error)
        return error
      }
    )

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  get<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'GET'
    })
  }

  post<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'POST'
    })
  }

  put<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'PUT'
    })
  }

  patch<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'PATCH'
    })
  }

  delete<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'DELETE'
    })
  }

  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
