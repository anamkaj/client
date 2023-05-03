import React from 'react'

import { CartOfPage } from '../components/Layout/PageCart/CartOfPage'
import { useAppSelector } from '../store/Redux/storeHook'
import { HeaderCartPay } from '../components/Layout/PageCart/HeaderCartPay'
import { PayTotal } from '../components/Layout/PageCart/PayTotal'
import { HeadTableTitle } from '../components/Layout/PageCart/HeadTableTitle'
import CartImg from '../images/component_img/Cart/header-cart-image.png'

export const ShopCardPage = () => {
  const totalCart = useAppSelector((state) => state.cartReducer.cart)
  return (
    <div className={'container mx-auto'}>
      <HeaderCartPay />
      {totalCart.length < 1 ? (
        <div className={'flex flex-col items-center'}>
          <h2 className={'font-bold text-lg text-center mt-20 w-full'}>
            Добавьте товары и они появятся в корзине
          </h2>
          <img className={'w-1/6 mt-5'} src={CartImg} alt='' />
        </div>
      ) : (
        <div
          className={
            'w-full flex xl:flex-nowrap justify-center gap-5 mobile:flex-wrap'
          }
        >
          <div className={'flex flex-col'}>
            <table>
              <HeadTableTitle />
              {totalCart?.map((orderCart) => {
                return (
                  <tbody
                    className={'xl:table-header-group mobile:flex'}
                    key={orderCart.id}
                  >
                    <CartOfPage key={orderCart.id} orderCart={orderCart} />
                  </tbody>
                )
              })}
            </table>
          </div>
          <PayTotal />
        </div>
      )}
    </div>
  )
}
