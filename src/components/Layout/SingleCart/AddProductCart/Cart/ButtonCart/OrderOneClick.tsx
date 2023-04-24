import React from 'react'
import { IGProduct } from '../../../../../../helpers/model/model.products'

type PropFastOrder = {
  product: IGProduct[]
  setFastOrderModel: React.Dispatch<React.SetStateAction<boolean>>
  setCountPopupProduct: React.Dispatch<React.SetStateAction<number>>
}

export const OrderOneClick = ({
  product,
  setFastOrderModel,
  setCountPopupProduct,
}: PropFastOrder) => {
  return (
    <div>
      <button
        onClick={() => setFastOrderModel(() => true)}
        className=' w-full  mt-5 uppercase text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-500  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 '
      >
        Быстрый заказ
      </button>
    </div>
  )
}
