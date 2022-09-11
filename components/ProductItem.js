/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const ProductItem = ({ product }) => {
  return (
    <>
      <section className='card'>
        <Link href={`/product/${product.slug}`}>
          <a>
            <img
              src={product.image}
              alt={product.name}
              className='rounded-t shadow'
            />
          </a>
        </Link>
        <div className='flex flex-col p-4'>
          <Link href={`/product/${product.slug}`}>
            <a>
              <h2 className='text-lg'>{product.name}</h2>
            </a>
          </Link>
          <p className='mb-2'>{product.brand}</p>
          <p>${product.price}</p>
          <button className='primary-button' type='button'>
            Add to cart
          </button>
        </div>
      </section>
    </>
  )
}

export default ProductItem
