import axios from 'axios'
import { FormReq } from '../../../helpers/Model/PostServer/post.req.form'

export const FormServices = {
  async postForm(params: FormReq) {
    const { data, status } = await axios.post(
      `http://46.19.67.106:8080/api/form/order`,
      {
        data: params,
      },
    )

    return { data, status }
  },

  // async postFormSpecialist(params: FormSpecialist) {
  //   const { data, status } = await axios.post(
  //     `http://46.19.67.106:8080/api/form/order`,
  //     {
  //       data: params,
  //     },
  //   )

  //   return { data, status }
  // },
}
