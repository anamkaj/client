export type Person = {
  name: string
  phone: number
  email?: string
  objectCity?: boolean
  internetTrue?: boolean
}

export interface IFormCartPage extends Person {
  surname?: string
  
}
