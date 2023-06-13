import React from 'react'
import { useAppSelector } from '../store/Redux/storeHook'
import { HeaderCartPay } from '../components/Layout/PageCart/HeaderCartPay'
import { EmptyBasket } from '../components/Layout/PageCart/EmptyBasket'
import { AddedProducts } from '../components/Layout/PageCart/Pay/AddedProducts'
import { FormCart } from '../components/Layout/UI/Form/FormCart/FormCart'

export const ShopCardPage = () => {
  const data = useAppSelector((state) => state.cartReducer.cart)

  return (
    <div className={'container mx-auto'}>
      <HeaderCartPay />
      {data.length < 1 ? (
        <EmptyBasket />
      ) : (
        <div className=' grid grid-cols-[1100px_1fr] gap-4'>
          <AddedProducts data={data} />
          <FormCart />
        </div>
      )}
    </div>
  )
}
