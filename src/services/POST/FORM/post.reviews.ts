import axios from 'axios'
import { SendReviews } from '../../../helpers/Model/PostServer/post.req.reviews'

export const ReviewsService = {
  async sendReviews(params: SendReviews) {
    console.log(params)
    const { data, status } = await axios.post(
      `http://localhost:4000/api/reviews`,
      {
        data: params,
      },
    )

    return { data, status }
  },
}
