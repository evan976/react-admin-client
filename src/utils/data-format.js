import dayjs from 'dayjs'

export const dateFormat = (date, format = 'YYYY-MM-DD hh:mm:ss') => dayjs(date).format(format)
