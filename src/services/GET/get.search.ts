import axios from 'axios'
import { IGProduct } from '../../helpers/Model/GetServer/model.products'
import { ICategory } from '../../helpers/Model/GetServer/query.category.model'

export const SearchServices = {
  async productSearch(params: string | undefined) {
    try {
      const { data } = await axios.get<IGProduct[]>(
        `https://tmk-v.ru:8080/api/searchProduct`,
        {
          params: {
            input: params,
          },
        },
      )

      return data
    } catch (error) {
      throw new Error('ошибка от сервера')
    }
  },

  async categorySearch(params: string | undefined) {
    try {
      const { data } = await axios.get<ICategory[]>(
        `https://tmk-v.ru:8080/api/searchCategory`,
        {
          params: {
            input: params,
          },
        },
      )

      return data
    } catch (error) {
      throw new Error('ошибка от сервера')
    }
  },
}
