// Отправка заявки из "Быстрый Заказ"

import { useMutation } from 'react-query'
import { FormServices } from '../../../../../services/POST/FORM/post.form'
import { SubmitHandler } from 'react-hook-form'
import { IGProduct } from '../../../../../helpers/Model/GetServer/model.products'
import {
  FormReq,
  IFormOneProductPost,
} from '../../../../../helpers/Model/PostServer/post.req.form'
import { Person } from '../type.form'

type PropFormHook = {
  product?: IGProduct[]
  price?: number
}

export const useFormRequest = ({ product, price }: PropFormHook) => {
  const mutation = useMutation({
    mutationKey: ['contactForm'],
    mutationFn: (data: FormReq) => FormServices.postFormFeedback(data),
  })

  const consultation = useMutation({
    mutationKey: ['FormOneProduct'],
    mutationFn: (data: IFormOneProductPost) =>
      FormServices.postFormOneProduct(data),
  })
  // Отправка обычной формы с контактами и чек боксоми
  const onSubmitOneProduct: SubmitHandler<Person> = (data: Person) => {
    if (data) {
      mutation.mutate({
        phone: Number(data.phone),
        name: data.name,
        email: data.email,
        objectCity: data.objectCity,
        internetTrue: data.internetTrue,
      })
    }
  }
  //Отправка быстрой покупки одного товара
  const onSubmitFastOrder: SubmitHandler<Person> = (data: Person) => {
    if (data && product && price) {
      consultation.mutate({
        article: product[0].article,
        title: product[0].title,
        price: price,
        phone: Number(data.phone),
        name: data.name,
        email: data.email,
        id: product[0].id,
      })
    } else {
      onSubmitOneProduct(data)
    }
  }
  return { mutation, consultation, onSubmitFastOrder, onSubmitOneProduct }
}
