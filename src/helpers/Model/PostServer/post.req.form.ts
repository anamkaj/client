import { addCartStore } from '../Store/Redux/type.product'

export type FormReq = {
  article?: number
  title?: string
  price?: number
  phone: number
  name: string
  email?: string
  id?: number
  objectCity?: boolean
  internetTrue?: boolean
}

type DataCart = {
  title: string
  price: number
  count: number
  sale: number
}

export interface IFormReq extends FormReq {
  surname?: string
  data: DataCart[]
}
