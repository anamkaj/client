import axios from 'axios'
import { ReviewsQuery } from '../../helpers/Model/GetServer/query.reviws.model'

export const ReviewsServices = {
  // Запрос всех групп отзывов о товаре для Tab

  async getReviews(id: number) {
    const { data } = await axios.get<ReviewsQuery[]>(
      `http://localhost:4000/api/reviews`,
      {
        params: {
          id: id,
        },
      },
    )

    return data
  },
}
