import React, { useState, useEffect, useRef } from 'react'
import { IGProduct } from '../../../helpers/model/model.products'
import { HeaderFilter } from './HeaderFilter'
import { ProductsCart } from './ProductsCart'
import { Pagination } from './Pagination'
import { LazyLoad } from '../LazyLoad/LazyLoad'
import { usePagination } from './hook/pagination'
import { useStore } from '@nanostores/react'
import { catStore } from '../Category/categoryStore/category.store'
import { useParams } from 'react-router-dom'
import { gridState } from './nanoStore/grid.store'

export const ProductList = () => {
  const { id } = useParams()
  const { product, isLoading, nextPage, checkLength } = usePagination()
  const gridStore = useStore(gridState)
  const categoryStore = useStore(catStore)
  const filterCat = () => {
    const cat = categoryStore.filter((e) => e.id == Number(id))
    return cat
  }

  if (isLoading) {
    return <LazyLoad />
  }

  return (
    <div className='container mx-auto py-10'>
      <div className=' flex text-xl mb-5 '>
        <span className=' font-extralight text-'>{filterCat()[0].name}</span>
        <span> - </span>{' '}
        <span className=' font-bold text-gray-700'>
          {' '}
          {product?.length} Товара
        </span>
      </div>
      <HeaderFilter />
      <div className='flex gap-y-2 gap-x-2 flex-wrap '>
        {product?.map((product: IGProduct) => {
          return (
            <ProductsCart
              key={product.id}
              data={product}
              isLoading={isLoading}
              gridStore={gridStore}
            />
          )
        })}
      </div>

      <div className='  mt-5'>
        <Pagination checkLength={checkLength} nextPage={nextPage} />
      </div>
    </div>
  )
}
