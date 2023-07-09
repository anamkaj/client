import { useStore } from '@nanostores/react'
import { useParams } from 'react-router-dom'
import { catStore } from '../../../../store/NanoStore/CategoryStore/category.store'

//Фильтрация категорий для формирования url  на транслите 

export const useFilterCategory = () => {
  const { id } = useParams()
  const categoryStore = useStore(catStore)
  const category = categoryStore.filter((e) => e.id == Number(id))

  return { category }
}
