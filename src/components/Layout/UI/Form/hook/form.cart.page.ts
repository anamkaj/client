import { useMutation } from 'react-query'
import { FormServices } from '../../../../../services/POST/FORM/post.form'
import { IFormReq } from '../../../../../helpers/Model/PostServer/post.req.form'
import { SubmitHandler } from 'react-hook-form'
import { IFormCartPage } from '../type.form'
import { useAppSelector } from '../../../../../store/Redux/storeHook'


export const useFormCartPage = () => {
  const storCart = useAppSelector((state) => state.cartReducer.cart)
  const totalPriceCart = useAppSelector((state) => state.cartReducer.total)

  const cart = storCart.map((x) => {
    return {
      title: x.title,
      count: x.totalCount,
      price: x.price,
      sale: x.sale,
    }
  })
  

  const mutation = useMutation({
    mutationFn: (data: IFormReq) => FormServices.postFormCartPage(data),
  })

  const onSubmitOrderCart: SubmitHandler<IFormCartPage> = (
    data: IFormCartPage,
  ) => {
    if (data && storCart) {
      mutation.mutate({
        phone: Number(data.phone),
        name: data.name,
        surname: data.surname,
        email: data.email,
        price: totalPriceCart,
        data: cart,
      })
    }
  }
  return { onSubmitOrderCart, mutation }
}
