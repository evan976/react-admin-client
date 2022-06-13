import request from '@/service'
import { List, Wallpaper } from '@/types'
import { Methods, Paths } from '@/enums'

class WallpaperService {
  findAll(data: Record<string, string | number> = {}) {
    return request<Record<string, string | number>, List<Wallpaper>>({
      url: Paths.Wallpaper,
      method: Methods.GET,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findOne(id: string) {
    return request<string, Wallpaper>({
      url: `${Paths.Wallpaper}/${id}`,
      method: Methods.GET,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  create(data: Partial<Wallpaper>) {
    return request<Partial<Wallpaper>, Wallpaper>({
      url: Paths.Wallpaper,
      method: Methods.POST,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  update(id: string, data: Partial<Wallpaper>) {
    return request<Partial<Wallpaper>, Wallpaper>({
      url: `${Paths.Wallpaper}/${id}`,
      method: Methods.PUT,
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  remove(id: string) {
    return request<string, Wallpaper>({
      url: `${Paths.Wallpaper}/${id}`,
      method: Methods.DELETE,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new WallpaperService()
