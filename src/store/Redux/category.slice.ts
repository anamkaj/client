import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export type Store = {
  id: number
  name: string
  parentCategoryId: number
  slug: string
}
type StoreCategory = {
  category: Store[]
}

const initialState: StoreCategory = {
  category: [],
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    categoryAdd: (state: StoreCategory, action: PayloadAction<Store>) => {
      const { id, name, parentCategoryId, slug } = action.payload
      state.category.push({
        id: id,
        slug: slug,
        name: name,
        parentCategoryId: parentCategoryId,
      })
    },
  },
})

export const categoryReducer = categorySlice.reducer
export const { categoryAdd } = categorySlice.actions
