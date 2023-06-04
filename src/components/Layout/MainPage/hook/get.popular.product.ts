import { ProductServices } from '../../../../services/GET/get.product'
import { useQuery } from 'react-query'
import { ReviewsServices } from '../../../../services/GET/get.reviews'

export const usePopularProduct = () => {
  return useQuery({
    queryKey: ['popular product'],
    queryFn: () => ProductServices.popularProduct(),
  })
}

export const useReviewsCarousel = () => {
  return useQuery({
    queryKey: ['reviews product'],
    queryFn: () => ReviewsServices.getReviewsCarousel(),
  })
}
