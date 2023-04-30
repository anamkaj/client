import { useQuery } from 'react-query'
import { ReviewsServices } from '../../../../services/GET/REVIEWS/get.reviews'
import { ReviewsQuery } from '../../../../helpers/model/query.reviws.model'
import { useParams } from 'react-router-dom'

export const useReviews = () => {
  const { id } = useParams()
  return useQuery<ReviewsQuery[]>(
    ['reviews', id],
    () => ReviewsServices.getReviews(Number(id)),
    {
      staleTime: 5000,
      keepPreviousData: true,
    },
  )
}
