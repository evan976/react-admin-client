import axios, { AxiosResponse } from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { RequestConfig, RequestInterceptors, CancelRequestSource } from './types'

class Request {
  instance: AxiosInstance
  interceptors?: RequestInterceptors
  cancelRequestSourceList?: CancelRequestSource[]
  requestUrlList?: string[]

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.cancelRequestSourceList = []
    this.requestUrlList = []
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => config,
      (error: any) => error
    )

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error: any) => error
    )
  }

  private getSourceIndex(url: string): number {
    return this.cancelRequestSourceList?.findIndex(
      (item: CancelRequestSource) => {
        return Object.keys(item)[0] === url
      },
    ) as number
  }

  private removeUrl(url: string) {
    const urlIndex = this.requestUrlList?.findIndex(u => u === url)
    const sourceIndex = this.getSourceIndex(url)
    // 删除 url 和 cancel 方法
    urlIndex !== -1 && this.requestUrlList?.splice(urlIndex as number, 1)
    sourceIndex !== -1 &&
      this.cancelRequestSourceList?.splice(sourceIndex as number, 1)
  }

  request<T = any>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      const url = config.url
      if (url) {
        this.requestUrlList?.push(url)
        config.cancelToken = new axios.CancelToken(c => {
          this.cancelRequestSourceList?.push({
            [url]: c
          })
        })
      }

      this.instance
        .request<any, T>(config)
        .then(response => {
          if (config.interceptors?.responseInterceptor) {
            config = config.interceptors.responseInterceptor(response)
          }
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
        .finally(() => {
          url && this.removeUrl(url)
        })
    })
  }

  cancelRequest(url: string | string[]) {
    if (typeof url === 'string') {
      const sourceIndex = this.getSourceIndex(url)
      sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][url]()
    } else {
      url.forEach(u => {
        const sourceIndex = this.getSourceIndex(u)
        sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][u]()
      })
    }
  }

  cancelAllRequest() {
    this.cancelRequestSourceList?.forEach(source => {
      const key = Object.keys(source)[0]
      source[key]()
    })
  }
}

export default Request
