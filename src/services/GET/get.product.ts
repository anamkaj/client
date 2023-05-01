//Запросы к продуктам

import axios from 'axios'
import { IGProduct } from '../../helpers/Model/GetServer/model.products'

import { hookParams } from '../../helpers/Model/GetServer/hook.model.request'

// Запрос Всех продуктов (товаров)

export const ProductServices = {
  async getProductAll(params: hookParams) {
    
    const { data } = await axios.get<IGProduct[]>(
      `http://localhost:4000/api/all/${params.filter}`,
      {
        params: {
          id: params.id,
          skip: params.skip,
          take: params.take,
          filter: params.filter,
        },
      },
    )
    return data
  },

  async getOneProduct(id: number) {
    const { data } = await axios.get<IGProduct[]>(
      `http://localhost:4000/api/one`,
      {
        params: {
          id: id,
        },
      },
    )

    return data
  },
}
