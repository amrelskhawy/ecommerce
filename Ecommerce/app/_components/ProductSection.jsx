"use client"
import React, { useEffect, useState } from 'react'
import { ProductList } from './ProductList'
import ProductApis from '../_utils/ProductApis'

export const ProductSection = () => {

  const [productList, setProductList] = useState([])

  const getLatestProducts_ = () => {
    ProductApis.getLatestProducts().then(res => {
      setProductList(res.data);
    })
  }

  useEffect(() => {
    getLatestProducts_()
  }, [])



  return (
    <div className='p-4'>
      {
        productList.length > 0 ?
        <ProductList List={productList} /> : 
        'There is no products added !'
      }
    </div>
  )
}
