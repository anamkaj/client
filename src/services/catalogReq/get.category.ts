import axios from 'axios'

export const CategoryServices = {
  // Запрос всех групп !!! не продуктов , только категории

  async getAllCategory(id: number) {
    const { data } = await axios.get(
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
