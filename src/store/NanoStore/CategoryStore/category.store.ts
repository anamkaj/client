import { atom } from 'nanostores'

export type Category = {
  id: number
  name: string
  parentCategoryId: number
  slug: string
  img: string
  description: string
  folderImg: string
}
// Стор для формирования хлебных крошек
export const catStore = atom<Category[]>([])

export const addCategory = (category: Category) => {
  if (!catStore.get().find((x) => x.id === category.id)) {
    catStore.set([...catStore.get(), category])
  }
}

// Стор для кнопки каталог в хедере

export const allNullCatalogGroup = atom<Category[]>([])
