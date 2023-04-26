// Отправка заявки из "Быстрый Заказ"

import { useMutation } from 'react-query'
import { FormServices } from '../../../../../services/catalogReq/postForm/post.form'
import { SubmitHandler, UseFormReset } from 'react-hook-form'
import { Person } from '../type.form'
import { IGProduct } from '../../../../../helpers/model/model.products'
import { FormReq } from '../../../../../services/catalogReq/postForm/models/post.req.form'

type PropFormHook = {
  product: IGProduct[]
  reset: UseFormReset<Person>
  price: number
}

export const useFormRequest = ({ product, reset, price }: PropFormHook) => {
  const mutation = useMutation({
    mutationFn: (data: FormReq) => FormServices.postForm(data),
  })
  console.log(mutation.status)

  const onSubmit: SubmitHandler<Person> = (data: Person) => {
    mutation.mutate({
      article: product[0].article,
      title: product[0].title,
      price: price,
      tel: Number(data.phone),
      name: data.name,
      email: data.email,
      id: product[0].id,
    })
    reset()
  }
  return { mutation, onSubmit }
}
