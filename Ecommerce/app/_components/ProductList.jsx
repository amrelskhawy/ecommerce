import React from 'react'
import { Product } from './Product'

export const ProductList = ({ List }) => {
  return (
    <div className='container mx-auto mt-12'>
      <h2 className='text-2xl font-bold mb-5'>Our Latest Products</h2>
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 '>
      {
        List.map(prod => (
          <Product key={prod.id} product={prod} />
        ))
      }
    </div>
    </div>
  )
}


