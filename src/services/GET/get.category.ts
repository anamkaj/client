import axios from 'axios'
import { ICategory } from '../../helpers/Model/GetServer/query.category.model'

export const CategoryServices = {
  // Запрос всех групп !!! не продуктов , только категории

  async getAllCategory(id: number) {
    const { data } = await axios.get<ICategory[]>(
      `http://localhost:4000/api/category/all-category`,
      {
        params: {
          id: id,
        },
      },
    )

    return data
  },
}
