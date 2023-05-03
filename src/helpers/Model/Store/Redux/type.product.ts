// Типы для добавления в корзину

export interface addCartStore {
  id: number
  title: string
  price: number
  img: string
  totalCount: number
  totalCart?: number
}

// Типы Стора и Счетчик общей стоимости корзины

export interface IPropStore {
  cart: addCartStore[]
  total: number
}

export type Increment = {
  id: number
  totalCount: number
}
