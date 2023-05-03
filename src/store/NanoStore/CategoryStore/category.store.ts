import { atom } from 'nanostores'

export type Category = {
  id: number
  name: string
  parentCategoryId: number
  slug: string
  img: string
  description:string
  folderImg:string
  
}

export const catStore = atom<Category[]>([])

export const addCategory = (obj: Category) => {
  if (!catStore.get().find((x) => x.id === obj.id)) {
    catStore.set([...catStore.get(), obj])
  }
}
