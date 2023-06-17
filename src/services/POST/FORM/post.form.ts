import axios from 'axios'
import {
  FormReq,
  IFormReq,
} from '../../../helpers/Model/PostServer/post.req.form'

export const FormServices = {
  async postForm(params: FormReq) {
    const { data, status } = await axios.post(
      `https://tmk-v.ru:8080/api/form/order`,
      {
        data: params,
      },
    )

    return { data, status }
  },

  async postFormCartPage(params: IFormReq) {
    const { data, status } = await axios.post(
      `https://tmk-v.ru:8080/api/form/order/cart`,
      {
        data: params,
      },
    )

    return { data, status }
  },

  // async postFormSpecialist(params: FormSpecialist) {
  //   const { data, status } = await axios.post(
  //     `https://tmk-v.ru:8080/api/form/order`,
  //     {
  //       data: params,
  //     },
  //   )

  //   return { data, status }
  // },
}
