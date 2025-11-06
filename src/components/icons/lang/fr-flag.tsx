import { type SVGProps } from 'react'

export function FrFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
    >
      <rect x='1' y='4' width='30' height='24' rx='4' ry='4' fill='#fff'></rect>
      <path
        d='M1,4h10.667v24H1c-1.105,0-2-.895-2-2V6c0-1.105,.895-2,2-2Z'
        fill='#002654'
      ></path>
      <path
        d='M11.667,4h8.667v24h-8.667V4Z'
        fill='#fff'
      ></path>
      <path
        d='M20.333,4H31c1.105,0,2,.895,2,2v20c0,1.105-.895,2-2,2H20.333V4Z'
        fill='#ce1126'
      ></path>
      <path
        d='M27,4H5c-1.654,0-3,1.346-3,3v18c0,1.654,1.346,3,3,3H27c1.654,0,3-1.346,3-3V7c0-1.654-1.346-3-3-3Zm2,21c0,1.105-.895,2-2,2H5c-1.105,0-2-.895-2-2V7c0-1.105,.895-2,2-2H27c1.105,0,2,.895,2,2v18Z'
        opacity='.15'
      ></path>
    </svg>
  )
}
