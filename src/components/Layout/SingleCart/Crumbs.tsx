import React, { useEffect } from 'react'
import { BreadCrumbs } from '../Category/BreadСrumbs'
import { addCatStore } from '../Category/categoryStore/add.store'
import { useGetAllCategory } from '../Category/hook/category.query.hook'
import { MiniSpinner } from '../LazyLoad/LazyLoad'

type Props = {
  id: number
}

export const Crumbs = ({ id }: Props) => {
  const { data: category, isLoading } = useGetAllCategory(id)

  useEffect(() => {
    if (category) addCatStore(category)
  }, [category])

  if (isLoading) {
    return <MiniSpinner />
  }

  return (
    <div>
      <BreadCrumbs id={id} />
    </div>
  )
}