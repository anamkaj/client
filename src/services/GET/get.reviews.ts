import axios from 'axios'
import { ReviewsQuery } from '../../helpers/Model/GetServer/query.reviws.model'

export const ReviewsServices = {
  // Запрос всех групп отзывов о товаре для Tab

  async getReviews(id: number) {
    const { data } = await axios.get<ReviewsQuery[]>(
      `http://46.19.67.106:8080/api/reviews`,
      {
        params: {
          id: id,
        },
      },
    )

    return data
  },

  async getReviewsCarousel() {
    const { data } = await axios.get<ReviewsQuery[]>(
      `http://46.19.67.106:8080/api/reviewsAll`,
    )

    return data
  },
}
