import axios from 'axios'
import {
  Like,
  SendReviews,
} from '../../../helpers/Model/PostServer/post.req.reviews'

export const ReviewsService = {
  async sendReviews(params: SendReviews) {
    const { data, status } = await axios.post(
      `https://46.19.67.106:8080/api/reviews`,
      {
        data: params,
      },
    )

    return { data, status }
  },

  async incLike(params: Like) {
    const { data, status } = await axios.post(
      `https://46.19.67.106:8080/api/likeInc`,
      {
        data: params,
      },
    )

    return { data, status }
  },

  async incDislike(params: Like) {
    const { data, status } = await axios.post(
      `https://46.19.67.106:8080/api/likeDec`,
      {
        data: params,
      },
    )

    return { data, status }
  },
}
