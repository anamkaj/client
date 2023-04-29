import axios from 'axios'
import { FormReq } from './models/post.req.form'

export const FormServices = {
  async postForm(params: FormReq) {
    const { data, status } = await axios.post(
      `http://localhost:4000/api/form/order`,
      {
        data: params,
      },
    )

    return { data, status }
  },

  // async postFormSpecialist(params: FormSpecialist) {
  //   const { data, status } = await axios.post(
  //     `http://localhost:4000/api/form/order`,
  //     {
  //       data: params,
  //     },
  //   )

  //   return { data, status }
  // },
}
