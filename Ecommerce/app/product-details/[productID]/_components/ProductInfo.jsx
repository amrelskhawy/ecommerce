import { AlertOctagon, BadgeCheck, ShoppingCart } from 'lucide-react'
import React from 'react'

export const ProductInfo = ({ product }) => {
  const { title, instantDelivery, description, category, price } = product?.attributes
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-medium">{title}</h2>
      <p className="font-bold text-slate-400 w-fit  ">
        {category}</p>
      <p className='text-lg font-medium  text-slate-800'>{description}</p>
      
      <p className='flex items-center text-slate-600 font-medium gap-2'>
        {
          instantDelivery ?
          <BadgeCheck className='text-green-500' size={18} />
          :
          <AlertOctagon className='text-red-500' size={18} />
        }
        {
          !instantDelivery &&
          'Not '
        }
        Eligible for instant delivery
      </p>
      <p className='text-2xl'>Amout:
        <span className='text-primary font-bold '> ${price}</span>
      </p>
      <button className='bg-primary hover:bg-primary/90 transition-all flex justify-center items-center gap-2 text-white p-3 rounded-lg mt-4'>
        <ShoppingCart />
        Add to cart
      </button>
    </div>
  )
}
