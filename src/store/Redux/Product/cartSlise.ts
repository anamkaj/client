import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { changeCounter, storeFun } from './checkStore'
import {
  addCartStore,
  Increment,
  IPropStore,
} from '../../../helpers/Model/Store/Redux/type.product'

const initialState: IPropStore = {
  cart: [],
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: IPropStore, action: PayloadAction<addCartStore>) => {
      if (storeFun.checkId(state.cart, action.payload)) {
        console.log('Товар уже есть в карзине')
      } else {
        state.cart.push({ ...action.payload })
        state.total = storeFun.sum(state.cart, state.total)
        localStorage.setItem('countCart', JSON.stringify(state.cart))
        localStorage.setItem('totalCart', JSON.stringify(state.total))
        console.log(`Товар добавлен в карзину`)
      }
    },

    removeToCart: (state: IPropStore, action: PayloadAction<addCartStore>) => {
      state.cart = storeFun.remove(state.cart, action.payload)
      localStorage.setItem('countCart', JSON.stringify(state.cart))
      console.log('товар удален')
    },

    getLocalStore: (state: IPropStore) => {
      if (JSON.parse(localStorage.getItem('countCart') || '{}').length == 0) {
        console.log('LocalHost == null')
      } else {
        state.cart = JSON.parse(localStorage.getItem('countCart') || '{}')
      }
    },
    /// Старый способ для подсчета корзины
    incrementCart: (state: IPropStore, action: PayloadAction<addCartStore>) => {
      const store = state.cart.map((e) => {
        return e.id == action.payload.id
          ? { ...e, totalCount: (e.totalCount! += 1) }
          : e
      })
      let incrementTotal = Object.values(
        state.cart.map((e) => {
          // @ts-ignore
          return e.price * e.totalCount
        }),
      )
      state.total = incrementTotal.reduce((prev, curr) => prev + curr)
      state.cart = store
      localStorage.setItem('countCart', JSON.stringify(state.cart))
      localStorage.setItem('totalCart', JSON.stringify(state.total))
    },
    decrementCart: (state: IPropStore, action: PayloadAction<addCartStore>) => {
      const store = state.cart.map((e) => {
        // @ts-ignore
        return e.id == action.payload.id
          ? { ...e, totalCount: (e.totalCount! -= 1) }
          : e
      })

      let totalDecrement = Object.values(
        state.cart.map((e) => {
          // @ts-ignore
          return e.price * e.totalCount
        }),
      )
      state.total = totalDecrement.reduce((prev, curr) => prev + curr)
      state.cart = store
      localStorage.setItem('countCart', JSON.stringify(state.cart))
      localStorage.setItem('totalCart', JSON.stringify(state.total))
    },
    // Новый спопоб увеличение одних и тех же товаров
    incrementCounter: (state: IPropStore, action: PayloadAction<Increment>) => {
      state.cart = changeCounter.increment(state.cart, action.payload)
      state.total = storeFun.sum(state.cart, state.total)
    },
    decrementCounter: (state: IPropStore, action: PayloadAction<Increment>) => {
      state.cart = changeCounter.decrement(state.cart, action.payload)
      state.total = storeFun.sum(state.cart, state.total)
    },
  },
})

export const cartReducer = cartSlice.reducer
export const {
  addToCart,
  removeToCart,
  getLocalStore,
  incrementCart,
  decrementCart,
  incrementCounter,
  decrementCounter,
} = cartSlice.actions
