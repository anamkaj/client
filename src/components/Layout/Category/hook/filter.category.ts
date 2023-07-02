import { useStore } from '@nanostores/react'
import { catStore } from '../../../../store/NanoStore/CategoryStore/category.store'

export const useCategoryFilter = (id: number) => {
  const storeCat = useStore(catStore)
  const mainCategory = storeCat.filter((x) => x.parentCategoryId == Number(id))

  return { mainCategory }
}
