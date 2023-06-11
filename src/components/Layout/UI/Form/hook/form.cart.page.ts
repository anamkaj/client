import { useMutation } from 'react-query'
import { FormServices } from '../../../../../services/POST/FORM/post.form'
import { IFormReq } from '../../../../../helpers/Model/PostServer/post.req.form'
import { SubmitHandler } from 'react-hook-form'
import { IFormCartPage } from '../type.form'
import { useAppSelector } from '../../../../../store/Redux/storeHook'

export const useFormCartPage = () => {
  const storData = useAppSelector((state) => state.cartReducer.cart)
  const totalPriceCart = useAppSelector((state) => state.cartReducer.total)

  const mutation = useMutation({
    mutationFn: (data: IFormReq) => FormServices.postForm(data),
  })

  const onSubmitOrderCart: SubmitHandler<IFormCartPage> = (
    data: IFormCartPage,
  ) => {
    if (data && storData) {
      mutation.mutate({
        phone: Number(data.phone),
        name: data.name,
        surname: data.surname,
        email: data.email,
        price: totalPriceCart,
        data: JSON.stringify(storData),
      })
    }
  }
  return { onSubmitOrderCart }
}
