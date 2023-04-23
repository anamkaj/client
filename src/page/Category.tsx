import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllCategory } from '../components/Layout/Category/hook/category.query.hook'
import { CategoryOne } from '../components/Layout/Category/CategoryOne'
import { BreadCrumbs } from '../components/Layout/Category/BreadСrumbs'
import { addCatStore } from '../components/Layout/Category/categoryStore/add.store'
import { Description } from '../components/Layout/Category/Description'
import { ProductList } from '../components/Layout/CatalogCartProduct/ProductList'
import { LazyLoad } from '../components/Layout/LazyLoad/LazyLoad'

export const Category = () => {
  const { id } = useParams()

  const paramQuery = {
    count: 1000,
    id: Number(id),
  }
  const {
    data: category,
    isLoading: loadingCategory,
    isError: errorCategory,
    refetch: categoryRef,
  } = useGetAllCategory(paramQuery.id)

  useEffect(() => {
    categoryRef()
  }, [id])

  useEffect(() => {
    if (category) addCatStore(category)
  }, [category])

  if (loadingCategory) {
    return <LazyLoad />
  }

  return (
    <div className=' container mx-auto mt-5 mb-5'>
      <BreadCrumbs id={Number(id)} />
      <Description category={category} id={id} />
      <div className=' flex gap-6 flex-wrap '>
        <CategoryOne
          category={category}
          id={id}
          loadingCategory={loadingCategory}
        />
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  )
}
