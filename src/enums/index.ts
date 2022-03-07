export enum PublishState {
  Published = 1,
  Draft = 0
}

export enum OriginState {
  Original = 1,
  Reprint = 0
}

export const publishStateMap = new Map(
  [
    {
      value: PublishState.Draft,
      name: '草稿',
      color: 'orange'
    },
    {
      value: PublishState.Published,
      name: '已发布',
      color: 'green'
    }
  ].map(item => [item.value, item])
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
    }
  ].map(item => [item.value, item])
)

export const ps = (state: PublishState) => {
  return publishStateMap.get(state)!
}

export const os = (state: OriginState) => {
  return OriginStateMap.get(state)!
}

export const publishStates = Array.from<ReturnType<typeof ps>>(publishStateMap.values())

export const OriginStates = Array.from<ReturnType<typeof os>>(OriginStateMap.values())
