const color = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
  'success',
  'processing',
  'error',
  'warning',
  'default'
]

export const getColor = () => color[Math.floor(Math.random() * color.length)]
