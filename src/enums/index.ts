export enum PublishState {
  Publish = 1,
  Draft = 0
}

export enum OnlineState {
  Online = 1,
  Offline = 0
}

export enum OriginState {
  Original = 0,
  Reprint = 1,
  Hybrid = 2
}

export enum CommentState {
  Recycle = -1,
  Reject = 0,
  Pass = 1
}

export enum WeightSate {
  Large = 3,
  Medium = 2,
  Small = 1
}

export enum Paths {
  Login = '/auth/login',
  User = '/users',
  Post = '/articles',
  Category = '/categories',
  Tag = '/tags',
  Config = '/config',
  Wallpaper = '/wallpapers',
  Comment = '/comments'
}

export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

export const publishStateMap = new Map(
  [
    {
      value: PublishState.Draft,
      name: '草稿',
      color: 'orange'
    },
    {
      value: PublishState.Publish,
      name: '已发布',
      color: 'green'
    }
  ].map((item) => [item.value, item])
)

export const onlineStateMap = new Map(
  [
    {
      value: OnlineState.Online,
      name: '上线',
      color: 'green'
    },
    {
      value: OnlineState.Offline,
      name: '下线',
      color: 'orange'
    }
  ].map((item) => [item.value, item])
)

export const OriginStateMap = new Map(
  [
    {
      value: OriginState.Reprint,
      name: '转载',
      color: 'error'
    },
    {
      value: OriginState.Original,
      name: '原创',
      color: 'success'
    },
    {
      value: OriginState.Hybrid,
      name: '混合',
      color: 'warning'
    }
  ].map((item) => [item.value, item])
)

export const CommentStateMap = new Map(
  [
    {
      value: CommentState.Recycle,
      name: '回收站',
      color: 'error'
    },
    {
      value: CommentState.Reject,
      name: '待审核',
      color: 'warning'
    },
    {
      value: CommentState.Pass,
      name: '审核通过',
      color: 'success'
    }
  ].map((item) => [item.value, item])
)

export const WeightStateMap = new Map(
  [
    {
      value: WeightSate.Large,
      name: '推荐',
      color: 'success'
    },
    {
      value: WeightSate.Medium,
      name: '热门',
      color: 'error'
    },
    {
      value: WeightSate.Small,
      name: '无权重',
      color: 'default'
    }
  ].map((item) => [item.value, item])
)

export const ps = (state: PublishState) => {
  return publishStateMap.get(state)!
}

export const oos = (state: OnlineState) => {
  return onlineStateMap.get(state)!
}

export const os = (state: OriginState) => {
  return OriginStateMap.get(state)!
}

export const cs = (state: CommentState) => {
  return CommentStateMap.get(state)!
}

export const ws = (state: WeightSate) => {
  return WeightStateMap.get(state)!
}

export const publishStates = Array.from<ReturnType<typeof ps>>(publishStateMap.values())

export const onlineStates = Array.from<ReturnType<typeof oos>>(onlineStateMap.values())

export const originStates = Array.from<ReturnType<typeof os>>(OriginStateMap.values())

export const commentStates = Array.from<ReturnType<typeof cs>>(CommentStateMap.values())

export const weightStates = Array.from<ReturnType<typeof ws>>(WeightStateMap.values())
