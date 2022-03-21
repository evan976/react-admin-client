import * as React from 'react'

export type Response<T> = [T, React.Dispatch<React.SetStateAction<T>>]

function useStorage<T>(key: string, initialValue: any): Response<T> {
  const [state, setState] = React.useState(() => {
    const storageValue = localStorage.getItem(key)
    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialValue
    }
  })

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default useStorage
