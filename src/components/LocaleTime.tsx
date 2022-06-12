import * as React from 'react'
import distanceInWords from 'date-fns/formatDistance'
import dateFormat from 'date-fns/format'
import zh from 'date-fns/locale/zh-CN'

interface LocaleTimeProps {
  date: string | number | Date
  format?: string
  form?: boolean
  className?: string
  style?: React.CSSProperties
}

let callbacks: (() => void)[] = []

setInterval(() => {
  callbacks.forEach((cb) => cb());
}, 1000 * 60)

const eachMinute = (fn: () => void) => {
  callbacks.push(fn)

  return () => {
    callbacks = callbacks.filter((cb) => cb !== fn)
  }
}

const getTimeago = (date: string | number | Date) => {
  let content = distanceInWords(new Date(date), new Date(), {
    addSuffix: true,
    locale: zh
  })

  content = content
    .replace('about', '')
    .replace('less than a minute ago', 'just now')
    .replace('minute', 'min')

  return content
}

const LocaleTime: React.FC<LocaleTimeProps> = ({
  date,
  form = true,
  format = 'yyyy-MM-dd HH:mm',
  ...rest
}) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setMinutesMounted] = React.useState<number>(0)
  const callback = React.useRef<() => void>()

  React.useEffect(() => {
    callback.current = eachMinute(() => {
      setMinutesMounted((state) => ++state)
    })

    return () => {
      if (callback.current) {
        callback.current()
      }
    }
  }, [])

  const formated = dateFormat(new Date(date), format!)

  return <time {...rest} dateTime={formated}>{form ? getTimeago(date) : formated}</time>
}

export default LocaleTime
