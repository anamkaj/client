import { useQuery } from 'react-query'
import { ReviewsServices } from '../../../../services/GET/get.reviews'
import { ReviewsQuery } from '../../../../helpers/Model/GetServer/query.reviws.model'

export const useReviews = (id: number) => {
  return useQuery<ReviewsQuery[]>(
    ['reviews', id],
    () => ReviewsServices.getReviews(Number(id)),
    {
      staleTime: 5000,
      keepPreviousData: true,
    },
  )
}
