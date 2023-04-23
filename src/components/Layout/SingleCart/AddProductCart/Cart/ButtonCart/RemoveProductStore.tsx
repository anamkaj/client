import React from 'react'
import { IGProduct } from '../../../../../../helpers/model/model.products'
import { removeToCart } from '../../../../../../store/Product/cartSlise'
import { useAppDispatch } from '../../../../../../store/storeHook'

type PropBtn = {
  product: IGProduct[]
  setPopup: React.Dispatch<React.SetStateAction<boolean>>
  setCountPopupProduct: React.Dispatch<React.SetStateAction<number>>
}

export const RemoveStore = ({
  product,
  setPopup,
  setCountPopupProduct,
}: PropBtn) => {
  const dispatch = useAppDispatch()
  const removeProduct = () => {
    dispatch(
      removeToCart({
        id: product[0].id,
        title: product[0].title,
        price: product[0].price,
        img: product[0].imgLink[0],
        totalCount: 1,
      }),
    )
    setPopup(() => false)
    setCountPopupProduct(1)
  }
  return (
    <button
      className='uppercase mt-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-base px-5 py-3 text-center '
      onClick={() => removeProduct()}
    >
      Удалить товар из корзины
    </button>
  )
}