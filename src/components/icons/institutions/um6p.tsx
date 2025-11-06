import type { SVGProps } from 'react'

export const UM6PIcon = (props: SVGProps<HTMLImageElement>) => {
  const { className, ...restProps } = props
  return (
    <img
      src='/assets/icons/um6p.svg'
      alt='UM6P Logo'
      width={32}
      height={32}
      className={`flex-shrink-0 ${className ?? ''}`}
      {...restProps}
    />
  )
}
