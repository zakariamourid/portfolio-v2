import type { SVGProps } from 'react'

export const School1337Icon = (props: SVGProps<HTMLImageElement>) => {
  const { className, ...restProps } = props
  return (
    <img
      src='/assets/icons/1337.svg'
      alt='1337 Coding School Logo'
      width={32}
      height={32}
      className={`flex-shrink-0 ${className ?? ''}`}
      {...restProps}
    />
  )
}

