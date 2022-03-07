import dayjs from 'dayjs'

export const dateFormat = (timestamps?: number | Date, format?: string): string => {
  if (!format) {
    return dayjs(timestamps || Date.now()).format('YYYY-MM-DD HH:mm')
  }
  return dayjs(timestamps || Date.now()).format(format)
}
