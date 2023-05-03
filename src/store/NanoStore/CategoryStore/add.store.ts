
import { Category, addCategory, catStore } from './category.store'

export const addCatStore = (data: Category[]) => {
  data.map((x) => {
    addCategory({
      id: x.id,
      name: x.name,
      parentCategoryId: x.parentCategoryId,
      slug: x.slug,
      img: x.img,
      description: x.description,
      folderImg: x.folderImg,
    })
  })
}
