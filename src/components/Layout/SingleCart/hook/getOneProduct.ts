import { useQuery } from 'react-query'
import { IGProduct } from '../../../../helpers/model/model.products'
import { ProductServices } from '../../../../services/catalogReq/get.product'

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
