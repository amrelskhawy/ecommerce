import React from 'react'

export const ProductList = ({ List }) => {
  return (
    <div className='container mx-auto grid grid-cols-2 sm:grid-cols-3  gap-4 mt-12'>
      {
        List.map(prod => (
          <Product key={prod.id} product={prod} />
        ))
      }
    </div>
  )
}


const Product = ({ product }) => {
  const { title, description, price, banner } = product.attributes
  const { url } = banner?.data?.attributes?.formats?.thumbnail
  return <div>
    <a href="#" className="group relative rounded-xl block overflow-hidden">
      <button
        className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <img
        src={url}
        alt={title + ' Course banner'}
        className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-48"
      />

      <div className="relative border border-gray-100 bg-white p-6">
        <span className="whitespace-nowrap bg-primary text-white px-3 py-1.5 text-xs font-medium"> New </span>

        <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>

        <p className="mt-1.5 text-sm text-gray-700">$
          {price}</p>

        <form className="mt-4">
          <button
            className="block w-full rounded bg-primary text-white p-4 text-sm font-medium transition hover:scale-105"
          >
            Add to Cart
          </button>
        </form>
      </div>
    </a>
  </div>
}