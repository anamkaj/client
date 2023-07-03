import React, { useState, useEffect, useRef } from 'react'
import { IGProduct } from '../../../helpers/Model/GetServer/model.products'
import { HeaderFilter } from './HeaderFilter'
import { ProductsCart } from './ProductsCart'
import { Pagination } from './Pagination'
import { LazyLoad } from '../LazyLoad/LazyLoad'
import { usePagination } from './hook/pagination'
import { useStore } from '@nanostores/react'
import { catStore } from '../../../store/NanoStore/CategoryStore/category.store'
import { useParams } from 'react-router-dom'
import { gridState } from '../../../store/NanoStore/CatalogStore/grid.store'
import { motion } from 'framer-motion'
import { variants } from '../UI/animation/category'
import { Description } from './Description'
import { MobileProductList } from './Mobile/MobileProductList'

type ProductListProp = {
  isMobileScreen: boolean
}

export const ProductList = ({ isMobileScreen }: ProductListProp) => {
  const { id } = useParams()
  const { product, isLoading, nextPage, checkLength } = usePagination()
  const gridStore = useStore(gridState)
  const categoryStore = useStore(catStore)
  const cat = categoryStore.filter((e) => e.id == Number(id))

  if (isLoading) {
    return <LazyLoad />
  }

  return (
    <div className='container mx-auto py-10'>
      <div className=' flex text-xl mb-5 '>
        <span className=' font-extralight'>{cat[0]?.name}</span>
        <span className=' font-bold text-gray-700'>
          - {product?.length} Товара(ов)
        </span>
      </div>
      <HeaderFilter isMobileScreen={isMobileScreen} />
      <div className='flex gap-y-2 flex-wrap justify-between'>
        {/* Рендеринг продуктовых карточек  */}

        {isMobileScreen ? (
          <>
            {product?.map((product: IGProduct) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  variants={variants}
                  initial='hidden'
                  animate='visible'
                  key={product.id}
                >
                  <MobileProductList
                    key={product.id}
                    data={product}
                    isLoading={isLoading}
                    nameCategory={cat[0]?.slug}
                  />
                </motion.div>
              )
            })}
          </>
        ) : (
          <>
            {product?.map((product: IGProduct) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  variants={variants}
                  initial='hidden'
                  animate='visible'
                  key={product.id}
                >
                  <ProductsCart
                    key={product.id}
                    data={product}
                    isLoading={isLoading}
                    gridStore={gridStore}
                    nameCategory={cat[0]?.slug}
                  />
                </motion.div>
              )
            })}
          </>
        )}
      </div>

      <div className='  mt-5'>
        <Pagination checkLength={checkLength} nextPage={nextPage} />
      </div>
      <Description />
    </div>
  )
}
