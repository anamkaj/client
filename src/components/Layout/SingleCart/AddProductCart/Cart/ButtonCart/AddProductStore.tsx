import React from 'react'
import { IGProduct } from '../../../../../../helpers/model/model.products'
import { addToCart } from '../../../../../../store/Product/cartSlise'
import { useAppDispatch } from '../../../../../../store/storeHook'

type PropBtn = {
  product: IGProduct[]
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  price: number
}

export const AddStore = ({ product, setActive, price }: PropBtn) => {
  const dispatch = useAppDispatch()
  const addProduct = () => {
    dispatch(
      addToCart({
        id: product[0].id,
        title: product[0].title,
        price: price,
        img: product[0].imgLink[0],
        totalCount: 1,
      }),
    )
    setActive(() => true)
  }

  return (
    <button
      className=' uppercase mt-10 rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50'
      onClick={() => addProduct()}
    >
      Добавить в корзину
    </button>
  )
}
