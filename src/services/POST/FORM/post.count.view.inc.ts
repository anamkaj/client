import axios from 'axios'

export const Counters = {
  async countViewInc(id: number) {
    const { data, status } = await axios.post(
      `http://localhost:4000/api/countInc`,
      {
        id: id,
      },
    )

    return { data, status }
  },

  async countReviewInc(id: number) {
    const { data, status } = await axios.post(
      `http://localhost:4000/api/ratingInc`,
      {
        id: id,
      },
    )

    return { data, status }
  },
}
