import { useQuery } from 'react-query'
import { IGProduct } from '../../../../helpers/Model/GetServer/model.products'
import { ProductServices } from '../../../../services/GET/get.product'

export const useOneProduct = (id: number) => {
  return useQuery<IGProduct[]>(
    ['oneProduct', id],
    () => ProductServices.getOneProduct(id),
    {
      staleTime: 5000,
      keepPreviousData: true,
    },
  )
}
