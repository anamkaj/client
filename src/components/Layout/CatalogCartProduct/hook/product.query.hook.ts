import { useQuery } from 'react-query'
import { hookParams } from '../../../../helpers/Model/GetServer/hook.model.request'
import { IGProduct } from '../../../../helpers/Model/GetServer/model.products'
import { ProductServices } from '../../../../services/GET/get.product'

//Запрос на все товары всех групп

export const useGetProductAll = (params: hookParams) => {
  return useQuery<IGProduct[]>(
    ['productDataAll', params],
    () => ProductServices.getProductAll(params),
    {
      staleTime: 5000,
      keepPreviousData: true,
    },
  )
}
