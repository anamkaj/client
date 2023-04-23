import React, { useState } from 'react'
import {
  incrementCounter,
  decrementCounter,
} from '../../../../../../store/Product/cartSlise'
import { useAppDispatch } from '../../../../../../store/storeHook'
import { PropCount } from '../CounterProduct'

export const useCountProductStore = ({
  setCountPopupProduct,
  countPopupProduct,
  product,
}: PropCount) => {
  const dispatch = useAppDispatch()

  const incrementProduct = () => {
    dispatch(
      incrementCounter({
        id: product[0].id,
        totalCount: countPopupProduct,
      }),
    )
    setCountPopupProduct((prev) => prev + 1)
  }
  const decrementProduct = () => {
    dispatch(
      decrementCounter({
        id: product[0].id,
        totalCount: countPopupProduct,
      }),
    )
    setCountPopupProduct((prev) => prev - 1)
  }

  return { incrementProduct, decrementProduct }
}
