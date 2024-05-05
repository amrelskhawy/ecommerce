import React from 'react'

export const ProductInfo = ({ product }) => {
  const { title, description, category, price } = product?.attributes
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-medium">{title}</h2>
      <p className="font-bold text-slate-400 w-fit  ">
        {category}</p>
      <p className='text-lg text-slate-700'>{description}</p>
      <p className='text-2xl'>Amout:
      <span className='text-primary font-bold '> ${price}</span>
      </p>
    </div>
  )
}
