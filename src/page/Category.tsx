import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllCategory } from '../components/Layout/Category/hook/category.query.hook'
import { CategoryUpLevel } from '../components/Layout/Category/CategoryUpLevel'
import { BreadCrumbs } from '../components/Layout/Category/BreadСrumbs'
import { addCatStore } from '../store/NanoStore/CategoryStore/add.store'
import { Description } from '../components/Layout/Category/Description'
import { ProductList } from '../components/Layout/CatalogCartProduct/ProductList'
import { LazyLoad } from '../components/Layout/LazyLoad/LazyLoad'
import { MobileCatalog } from '../components/Layout/Category/Mobile/MobileCatalog'

type CategoryProp = {
  isMobileScreen: boolean
}

export const Category = ({ isMobileScreen }: CategoryProp) => {
  const { id } = useParams()
  const paramQuery = {
    count: 1000,
    id: Number(id),
  }
  const {
    data: category,
    isLoading: loadingCategory,
    isError: errorCategory,
    refetch: categoryRefresh,
  } = useGetAllCategory(paramQuery.id)

  useEffect(() => {
    categoryRefresh()
  }, [id])

  useEffect(() => {
    if (category) addCatStore(category)
  }, [category])

  if (loadingCategory) {
    return <LazyLoad />
  }

  return (
    <div className=' container mx-auto p-4 mt-5 mb-5'>
      <BreadCrumbs id={Number(id)} />
      <Description category={category} id={id} />

      {isMobileScreen ? (
        <MobileCatalog
          category={category}
          id={id}
          loadingCategory={loadingCategory}
        />
      ) : (
        <CategoryUpLevel
          category={category}
          id={id}
          loadingCategory={loadingCategory}
        />
      )}

      <div>
        <ProductList isMobileScreen={isMobileScreen} />
      </div>
    </div>
  )
}
