export type Person = {
  name: string
  phone: number
  email?: string
  surname?: string
  objectCity?: boolean
  internetTrue?: boolean
}

export interface IFormCartPage extends Person {
  price: number
  data: DataCart[]
}

export interface IFormOneProduct extends Person {
  article: number
  title: string
  price: number
  id: number
}

type DataCart = {
  title: string
  price: number
  count: number
  sale: number
}
