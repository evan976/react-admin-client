import request from '@/service'
import { Config, SiteData } from '@/types/config'
import { Methods, PathEnum } from './types'

class ConfigService {
  fetchSiteData() {
    return request<any, SiteData>({
      url: `${PathEnum.Config}/site/data`,
      method: Methods.GET,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  fetchSiteConfig() {
    return request<any, Config>({
      url: `${PathEnum.Config}/option`,
      method: Methods.GET,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  updateSiteConfig(data: Config) {
    return request<any, Config>({
      url: `${PathEnum.Config}/option`,
      method: Methods.PUT,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new ConfigService()
