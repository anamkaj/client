import { useQuery } from 'react-query'
import { ICategory } from '../../../../helpers/Model/GetServer/query.category.model'
import { CategoryServices } from '../../../../services/GET/get.category'

// Запрос все категории и подкатегории

export const useGetAllCategory = (id: number) => {
  return useQuery<ICategory[]>(
    ['categoryAll'],
    () => CategoryServices.getAllCategory(id),
    {
      staleTime: 5000,
      keepPreviousData: true,
    },
  )
}
