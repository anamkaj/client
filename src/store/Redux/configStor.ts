import { configureStore } from '@reduxjs/toolkit'

import { cartReducer } from './Product/cartSlise'
import { categoryReducer } from './category.slice'

const reducer = {
  cartReducer: cartReducer,
  // categoryReducer: categoryReducer,
}

export const store = configureStore({
  reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
