// Отправка заявки из "Быстрый Заказ"

import { useMutation } from 'react-query'
import { FormServices } from '../../../../../services/catalogReq/postForm/post.form'
import { SubmitHandler } from 'react-hook-form'
import { Person } from '../type.form'
import { IGProduct } from '../../../../../helpers/model/model.products'
import { FormReq } from '../../../../../services/catalogReq/postForm/models/post.req.form'

type PropFormHook = {
  product?: IGProduct[]
  price?: number
}

export const useFormRequest = ({ product, price }: PropFormHook) => {
  const mutation = useMutation({
    mutationFn: (data: FormReq) => FormServices.postForm(data),
  })

  const onSubmitFastOrder: SubmitHandler<Person> = (data: Person) => {
    if (data && product && price) {
      mutation.mutate({
        article: product[0].article,
        title: product[0].title,
        price: price,
        phone: Number(data.phone),
        name: data.name,
        email: data.email,
        id: product[0].id,
      })
    } else {
      mutation.mutate({
        phone: Number(data.phone),
        name: data.name,
        email: data.email,
        objectCity: data.objectCity,
        internetTrue: data.internetTrue,
      })
    }
  }
  return { mutation, onSubmitFastOrder }
}
