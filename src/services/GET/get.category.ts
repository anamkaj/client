import axios from 'axios'
import { ICategory } from '../../helpers/Model/GetServer/query.category.model'

export const CategoryServices = {
  // Запрос всех групп !!! не продуктов , только категории

  async getAllCategory(id: number) {
    const { data } = await axios.get<ICategory[]>(
      `https://46.19.67.106:8080/api/category/all-category`,
      {
        params: {
          id: id,
        },
      },
    )

    return data
  },

  async getNullCategory() {
    const { data } = await axios.get<ICategory[]>(
      `https://46.19.67.106:8080/api/category/null-category`,
    )

    return data
  },
}
