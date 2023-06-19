// Отправка заявки из "Быстрый Заказ"

import { useMutation } from 'react-query'
import { FormServices } from '../../../../../services/POST/FORM/post.form'
import { SubmitHandler } from 'react-hook-form'
import { Person } from '../type.form'
import { FormReq } from '../../../../../helpers/Model/PostServer/post.req.form'

export const useFormHeaderBtn = () => {
  const mutation = useMutation({
    mutationFn: (data: FormReq) => FormServices.postFormFeedback(data),
  })

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

  return { mutation, onSubmitOneProduct }
}
