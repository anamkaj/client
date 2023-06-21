import { addCartStore } from '../Store/Redux/type.product'

export type FormReq = {
  phone: number
  name: string
  email?: string
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

export interface IFormOneProductPost extends FormReq {
  article: number
  title: string
  price: number
  id: number
}
