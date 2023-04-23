import { useQuery } from 'react-query'
import { ICategory } from '../../../../helpers/model/query.category.model'
import { CategoryServices } from '../../../../services/catalogReq/get.category'


// Запрос все категории и подкатегории

export const useGetAllCategory = (id: number) => {
  return useQuery<ICategory[]>(['categoryAll'], () =>
    CategoryServices.getAllCategory(id),
  )
}
