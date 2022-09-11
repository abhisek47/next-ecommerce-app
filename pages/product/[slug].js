import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'
import data from '../../utils/data'

const ProductDetail = () => {
  const { query } = useRouter()
  const { slug } = query
  const product = data.products.find((x) => x.slug === slug)
  if (!product) {
    return <div>Product not found</div>
  }
  return (
    <Layout title={product.name}>
      <div className='py-2'>
        <Link href={'/'}>
          <a className='font-bold text-slate-500 hover:text-slate-800'>
            {' '}
            &larr; Back to products
          </a>
        </Link>
        <div className='grid md:grid-cols-4 gap-6 mt-6'>
          <div className='md:col-span-2'>
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
              layout='responsive'
              priority={true}
            />
          </div>
          <div>
            <ul className='flex flex-col gap-1.5'>
              <li>
                <h1 className='text-3xl font-medium'>{product.name}</h1>
              </li>
              <li>Category: {product.category}</li>
              <li>Brand: {product.brand}</li>
              <li>
                {product.rating} of {product.numReviews} reviews
              </li>
              <li>{product.description}</li>
            </ul>
          </div>
          <div>
            <div className='card p-4'>
              <div className='flex justify-between mb-2'>
                <div>Price</div>
                <div>${product.price}</div>
              </div>
              <div className='flex justify-between mb-2'>
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? 'Available' : 'Unavailable'}
                </div>
              </div>
              <button className='primary-button w-full'>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetail
