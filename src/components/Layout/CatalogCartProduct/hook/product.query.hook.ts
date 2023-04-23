import { useQuery } from 'react-query'
import { hookParams } from '../../../../helpers/model/hook.model.request'
import { IGProduct } from '../../../../helpers/model/model.products'
import { ProductServices } from '../../../../services/catalogReq/get.product'

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
