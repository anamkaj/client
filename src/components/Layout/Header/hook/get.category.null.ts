import { useQuery } from 'react-query'
import { ICategory } from '../../../../helpers/Model/GetServer/query.category.model'
import { CategoryServices } from '../../../../services/GET/get.category'

export const useGetNullCategory = () => {
  return useQuery<ICategory[]>(
    ['categoryNull'],
    () => CategoryServices.getNullCategory(),
    {
      staleTime: 10000,
      keepPreviousData: true,
    },
  )
}
