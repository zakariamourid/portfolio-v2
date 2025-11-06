import type { SVGProps } from 'react'

export const OFPPTIcon = (props: SVGProps<HTMLImageElement>) => {
  const { className, ...restProps } = props
  return (
    <img
      src='/assets/icons/ofppt.svg'
      alt='OFPPT Logo'
      width={24}
      height={24}
      className={`flex-shrink-0 ${className ?? ''}`}
      {...restProps}
    />
  )
}
