import Image from 'next/image'
import React from 'react'

export const ProductBanner = ({ banner }) => {
  return (
    <div className='rounded-xl group/item overflow-hidden'>
      <Image
        src={banner}
        alt="banner"
        width={500}
        height={500}
        className="w-full transition-all h-full group-hover/item:scale-105"
      />
    </div>
  )
}
