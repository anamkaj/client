import axios from 'axios'

export const Counters = {
  async countViewInc(id: number) {
    const { data, status } = await axios.post(
      `https://tmk-v.ru:8080/api/countInc`,
      {
        id: id,
      },
    )

    return { data, status }
  },

  async countReviewInc(id: number) {
    const { data, status } = await axios.post(
      `https://tmk-v.ru:8080/api/ratingInc`,
      {
        id: id,
      },
    )

    return { data, status }
  },
}
