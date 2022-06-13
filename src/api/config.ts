import request from '@/service'
import { Methods, Paths } from '@/enums'
import { Config, SiteData } from '@/types'

class ConfigService {
  fetchSiteData() {
    return request<any, SiteData>({
      url: `${Paths.Config}/site/data`,
      method: Methods.GET,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  fetchSiteConfig() {
    return request<any, Config>({
      url: `${Paths.Config}/option`,
      method: Methods.GET,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  updateSiteConfig(data: Partial<Config>) {
    return request<Partial<Config>, Config>({
      url: `${Paths.Config}/option`,
      method: Methods.PUT,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new ConfigService()
