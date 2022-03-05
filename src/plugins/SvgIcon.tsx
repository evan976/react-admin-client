import * as React from 'react'

export interface SvgIconProps {
  symbolId: string
  prefix?: string
  color?: string
  className?: string
  width?: string
  height?: string
  onClick?: () => void
}

const SvgIcon: React.FC<SvgIconProps> = props => {
  return (
    <svg
      className={props.className}
      width={props.width ?? '24px'}
      height={props.height ?? '24px'}
      onClick={props.onClick}
      aria-hidden='true'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >
      <use
        xlinkHref={`#${props.prefix ?? 'icon'}-${props.symbolId}`}
        fill={props.color ?? '#ccc'}
      />
    </svg>
  )
}

export default SvgIcon
