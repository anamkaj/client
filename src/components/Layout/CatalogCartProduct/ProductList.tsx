import React, { useState, useEffect, useRef } from 'react'
import { IGProduct } from '../../../helpers/Model/GetServer/model.products'
import { HeaderFilter } from './HeaderFilter'
import { ProductsCart } from './ProductsCart'
import { Pagination } from './Pagination'
import { LazyLoad } from '../LazyLoad/LazyLoad'
import { usePagination } from './hook/pagination'
import { useStore } from '@nanostores/react'
import { gridState } from '../../../store/NanoStore/CatalogStore/grid.store'
import { motion } from 'framer-motion'
import { variants } from '../UI/animation/category'
import { Description } from './Description'
import { MobileProductList } from './Mobile/MobileProductList'
import { usePositionScrollWindows } from './hook/scrollPosition'
import { useFilterCategory } from './hook/filter.category'

type ProductListProp = {
  isMobileScreen: boolean
}

export const ProductList = ({ isMobileScreen }: ProductListProp) => {
  const { product, isLoading, nextPage, checkLength } = usePagination()
  const gridStore = useStore(gridState)
  const { category } = useFilterCategory()
  const { changePositionScroll } = usePositionScrollWindows()

  if (isLoading) {
    return <LazyLoad />
  }

  return (
    <div className='container mx-auto py-10'>
      <div
        className={
          isMobileScreen ? ' flex text-xs mb-5 p-2 ' : ' flex text-lg mb-5 p-2 '
        }
      >
        <span className=' font-extralight'>{category[0]?.name}</span>
        <span className=' font-bold text-gray-700'>
          - {product?.length} Товара(ов)
        </span>
      </div>
      <HeaderFilter isMobileScreen={isMobileScreen} />
      <div className='grid grid-cols-2 gap-1 lg:gap-2 md:grid-cols-3 xl:grid-cols-4'>
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
                  onClick={() => changePositionScroll()}
                >
                  <MobileProductList
                    key={product.id}
                    data={product}
                    isLoading={isLoading}
                    nameCategory={category[0]?.slug}
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
                  onClick={() => changePositionScroll()}
                >
                  <ProductsCart
                    key={product.id}
                    data={product}
                    isLoading={isLoading}
                    gridStore={gridStore}
                    nameCategory={category[0]?.slug}
                  />
                </motion.div>
              )
            })}
          </>
        )}
      </div>

      <div className=' mt-5'>
        <Pagination checkLength={checkLength} nextPage={nextPage} />
      </div>
      <Description />
    </div>
  )
}
