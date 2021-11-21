import dayjs from 'dayjs'

export const dateFormat = (date, format = 'YYYY-DD-MM hh:mm:ss') => dayjs(date).format(format)
