export enum PublishState {
  Publish = 1,
  Draft = 0
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

export const os = (state: OriginState) => {
  return OriginStateMap.get(state)!
}

export const ws = (state: WeightSate) => {
  return WeightStateMap.get(state)!
}

export const publishStates = Array.from<ReturnType<typeof ps>>(publishStateMap.values())

export const originStates = Array.from<ReturnType<typeof os>>(OriginStateMap.values())

export const weightStates = Array.from<ReturnType<typeof ws>>(WeightStateMap.values())
