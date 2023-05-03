import { useState, useEffect } from 'react'
import { useGetProductAll } from './product.query.hook'
import { useParams } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import { headerFilter } from '../../../../store/NanoStore/CatalogStore/header.filter.state'

export type hookParam = {
  skip: number
  take: number
  id: number
  filter: string
}

export const usePagination = () => {
  const { id } = useParams()
  const stateFilterHeader = useStore(headerFilter)
  const [pagination, setPagination] = useState<hookParam>({
    id: Number(id),
    skip: 1,
    take: 25,
    filter: stateFilterHeader,
  })
  const { data: product, isLoading, refetch } = useGetProductAll(pagination)

  const checkLength = product?.length! < 25 ? false : true

  const nextPage = () => {
    setPagination((prev) => ({ ...prev, skip: prev.skip + 1 }))
  }

  useEffect(() => {
    const onChange = () => {
      setPagination((prev) => ({
        ...prev,
        filter: (prev.filter = stateFilterHeader),
      }))
    }
    onChange()
  }, [stateFilterHeader])

  useEffect(() => {
    setPagination((prev) => ({ ...prev, id: (prev.id = Number(id)), skip: 1 }))
  }, [id])

  return { product, isLoading, nextPage, checkLength, refetch }
}
