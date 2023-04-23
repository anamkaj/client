import { IPropStore, Increment, addCartStore } from './model/type.product'

export const storeFun = {
  // Проверка сушествования товара в корзине

  checkId: (store: addCartStore[], payload: addCartStore) => {
    const check = store.find((x) => x.id === payload.id)
    if (check) return true
    if (!check) return false
  },
  //Стоимость всех товаров в корзине

  sum: (store: addCartStore[], total: number) => {
    const sumPrice = store.reduce((prev, curr) => {
      return prev + curr.price * curr.totalCount
    }, 0)
    return sumPrice
  },
  // Удаление товара из корзины

  remove: (store: addCartStore[], payload: addCartStore) => {
    const removeProduct = store.filter((item) => item.id !== payload.id)
    return removeProduct
  },
}

export const changeCounter = {
  increment: (store: addCartStore[], action: Increment) => {
    const increment = store.map((x) => {
      if (x.id == action.id) {
        x.totalCount += 1
      }
      return x
    })
    return increment
  },

  decrement: (store: addCartStore[], action: Increment) => {
    const increment = store.map((x) => {
      if (x.id == action.id) {
        x.totalCount -= 1
      }
      return x
    })
    return increment
  },
}
