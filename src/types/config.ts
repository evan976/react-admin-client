import { BaseType } from '@/types'

export type Config = BaseType & {
  title?: string
  subTitle?: string
  summary?: string
  description?: string
  copyright?: string
  icp?: string
  icpUrl?: string
  keywords?: string[]
  logo?: string
  favicon?: string
  siteUrl?: string
}

export type SiteData = {
  post: number
  category: number
  tag: number
  comment: number
}
