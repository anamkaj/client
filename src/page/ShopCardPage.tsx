import React from 'react'
import { useAppSelector } from '../store/Redux/storeHook'
import { HeaderCartPay } from '../components/Layout/PageCart/HeaderCartPay'
import { PayTotal } from '../components/Layout/PageCart/Pay/PayTotal'
import { EmptyBasket } from '../components/Layout/PageCart/EmptyBasket'
import { AddedProducts } from '../components/Layout/PageCart/AddedProducts'

export const ShopCardPage = () => {
  const totalCart = useAppSelector((state) => state.cartReducer.cart)

  return (
    <div className={'container mx-auto'}>
      <HeaderCartPay />
      {totalCart.length < 1 ? (
        <EmptyBasket />
      ) : (
        <div className=' grid grid-cols-[900px_1fr] gap-4'>
          <AddedProducts totalCart={totalCart} />
          <PayTotal />
        </div>
      )}
    </div>
  )
}
