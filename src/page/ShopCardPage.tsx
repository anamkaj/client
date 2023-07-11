import React from 'react'
import { useAppSelector } from '../store/Redux/storeHook'
import { HeaderCartPay } from '../components/Layout/PageCart/HeaderCartPay'
import { EmptyBasket } from '../components/Layout/PageCart/EmptyBasket'
import { AddedProducts } from '../components/Layout/PageCart/Pay/AddedProducts'
import { FormCart } from '../components/Layout/UI/Form/FormCart/FormCart'
import { Head } from '../components/Layout/Head/Head'

export const ShopCardPage = () => {
  const data = useAppSelector((state) => state.cartReducer.cart)

  return (
    <div className='container mx-auto p-2'>
      <Head title='Корзина' />
      <HeaderCartPay />
      {data.length < 1 ? (
        <EmptyBasket />
      ) : (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
          <div className=' col-span-1 lg:col-span-2 xl:col-span-3'>
            <AddedProducts data={data} />
          </div>
          <div>
            <FormCart />
          </div>
        </div>
      )}
    </div>
  )
}
