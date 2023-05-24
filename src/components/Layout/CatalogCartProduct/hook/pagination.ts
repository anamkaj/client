import { useState, useEffect, useRef } from 'react'
import { useGetProductAll } from './product.query.hook'
import { useParams } from 'react-router-dom'
import { useStore } from '@nanostores/react'
import {
  changePageCountDefault,
  countPage,
  headerFilter,
} from '../../../../store/NanoStore/CatalogStore/header.filter.state'
import { selectValue } from '../helper/filter.header'

export type hookParam = {
  skip: number
  take: number
  id: number
  filter: string
}

export const usePagination = () => {
  const { id } = useParams()
  const refIdCategory = useRef(id)

  // Состояние фильтра в хедере
  const stateFilterHeader = useStore(headerFilter)

  // Позиция пагинации в сторе
  const countStorePage = useStore(countPage)

  // начальное состаяние фильтра в шапку
  const [pagination, setPagination] = useState<hookParam>({
    id: Number(id),
    skip: countStorePage,
    take: 25,
    filter: stateFilterHeader === '' ? selectValue[0].sort : stateFilterHeader,
  })

  const { data: product, isLoading, refetch } = useGetProductAll(pagination)

  // Проверка количества товаров , если более 25 , показывает кнопку "Показать еще"
  const checkLength = product?.length! < 25 ? false : true
  // Увеличение страниц
  const nextPage = () => {
    setPagination((prev) => ({ ...prev, skip: (prev.skip = countPage.get()) }))
  }

  useEffect(() => {
    setPagination((prev) => ({ ...prev, skip: (prev.skip = countStorePage) }))
  }, [countStorePage])

  // Проверка есть ли в сторе состояния фильтра , если нет,  берется по умолчанию
  useEffect(() => {
    const onChange = () => {
      setPagination((prev) => ({
        ...prev,
        filter: (prev.filter =
          stateFilterHeader === '' ? selectValue[0].sort : stateFilterHeader),
      }))
    }
    onChange()
  }, [stateFilterHeader])

  // При переходе по группам меняется id категорий , переполучаем список товаров при переходе в новую группу. Если происходит переход в карточку товара и обратно в каталог , сохраняем позицию пагинации , если переход по группам , сбрасываем на default(25)
  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      id: (prev.id = Number(id)),
      skip:
        refIdCategory.current === id
          ? (prev.skip = countStorePage)
          : (prev.skip = 1),
    }))
    if (refIdCategory.current !== id) return changePageCountDefault()
  }, [id])

  return { product, isLoading, nextPage, checkLength, refetch }
}
