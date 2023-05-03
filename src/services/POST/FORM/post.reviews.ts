import axios from 'axios'
import {
  Like,
  SendReviews,
} from '../../../helpers/Model/PostServer/post.req.reviews'

export const ReviewsService = {
  async sendReviews(params: SendReviews) {
    const { data, status } = await axios.post(
      `http://localhost:4000/api/reviews`,
      {
        data: params,
      },
    )

    return { data, status }
  },

  async incLike(params: Like) {
    const { data, status } = await axios.post(
      `http://localhost:4000/api/likeInc`,
      {
        data: params,
      },
    )

    return { data, status }
  },

  async incDislike(params: Like) {
    const { data, status } = await axios.post(
      `http://localhost:4000/api/likeDec`,
      {
        data: params,
      },
    )

    return { data, status }
  },
}
