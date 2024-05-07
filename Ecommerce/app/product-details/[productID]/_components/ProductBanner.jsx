import Image from 'next/image'
import React from 'react'

export const ProductBanner = ({ banner }) => {
  return (
    <div className='rounded-xl group/item overflow-hidden relative'>
      {
        banner ?
        <Image
        src={banner}
        alt="banner"
        width={500}
        height={500}
        className="w-full transition-all h-full group-hover/item:scale-105"
      /> :
      <div className='w-full h-full animate-pulse bg-slate-200 '></div>}
    </div>
  )
}
