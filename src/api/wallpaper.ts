import request from '@/service'
import { List } from '@/types'
import { Wallpaper } from '@/types/wallpaper'
import { Methods, PathEnum } from './types'

class WallpaperService {
  findAll(data: Record<string, string | number>) {
    return request<Record<string, string | number>, List<Wallpaper>>({
      url: PathEnum.Wallpaper,
      method: Methods.GET,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findOne(id: string) {
    return request<string, Wallpaper>({
      url: `${PathEnum.Wallpaper}/${id}`,
      method: Methods.GET,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  create(data: Wallpaper) {
    return request<Wallpaper, Wallpaper>({
      url: PathEnum.Wallpaper,
      method: Methods.POST,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  update(id: string, data: Wallpaper) {
    return request<Wallpaper, Wallpaper>({
      url: `${PathEnum.Wallpaper}/${id}`,
      method: Methods.PUT,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  remove(id: string) {
    return request<string, Wallpaper>({
      url: `${PathEnum.Wallpaper}/${id}`,
      method: Methods.DELETE,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new WallpaperService()
