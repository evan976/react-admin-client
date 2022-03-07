import * as React from 'react'

export interface ImageProps {
  className?: string
  alt?: string
  src: string
  loading?: string
  default?: string
  onClick?:() => void
}

const images = import.meta.globEager('../assets/images/**/*.*')

const Image: React.FC = () => {
  return <div></div>
}

export default Image
