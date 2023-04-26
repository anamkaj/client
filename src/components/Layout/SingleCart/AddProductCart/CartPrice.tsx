import React, { useState } from 'react'
import { CallSingleCart } from '../CallSingleCart'
import { IGProduct } from '../../../../helpers/model/model.products'
import { OrderOneClick } from './Cart/ButtonCart/OrderOneClick'
import { useAppSelector } from '../../../../store/storeHook'
import { CartHeader } from './Cart/CartHeader'
import { BsGear } from 'react-icons/bs'
import { Price } from './Cart/Price'
import { AddStore } from './Cart/ButtonCart/AddProductStore'
import { RemoveStore } from './Cart/ButtonCart/RemoveProductStore'

type PropCartPrise = {
  product: IGProduct[]
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  setCountPopupProduct: React.Dispatch<React.SetStateAction<number>>
  setFastOrderModel: React.Dispatch<React.SetStateAction<boolean>>
  setCountFastOrderProduct: React.Dispatch<React.SetStateAction<number>>
}

export type PropCart = {
  product: IGProduct[]
}

export const CartPrice = ({
  product,
  setActive,
  setCountPopupProduct,
  setFastOrderModel,
  setCountFastOrderProduct,
}: PropCartPrise) => {
  const cartStore = useAppSelector((state) => state.cartReducer.cart)
  const price = Math.round(product[0].price / (product[0].discount * 0.11))

  const checkCartStore =
    cartStore.length > 0
      ? cartStore.find((e) => e.id === product[0].id)
      : undefined

  return (
    <div className='flex flex-wrap gap-6 justify-end'>
      <div className='flex flex-col mt-5 w-full shadow-lg border rounded-lg p-4 h-[400px]'>
        <>
          <CartHeader product={product} />
          <div className=' flex gap-1 items-center justify-end'>
            <BsGear className=' h-3 w-3' />
            <p className=' text-xs '>Производитель: {product[0].brend}</p>
          </div>
        </>

        {/*Цена со скидкой*/}

        <Price product={product} price={price} />

        {/*кнопка добавить в корзину */}

        {checkCartStore == undefined ? (
          <AddStore product={product} setActive={setActive} price={price} />
        ) : (
          <RemoveStore
            product={product}
            setActive={setActive}
            setCountPopupProduct={setCountPopupProduct}
            setCountFastOrderProduct={setCountFastOrderProduct}
          />
        )}

        {/* Заказ в один клик */}
        
        <OrderOneClick
          setFastOrderModel={setFastOrderModel}
          product={product}
          setCountPopupProduct={setCountPopupProduct}
        />
      </div>

      <CallSingleCart />
    </div>
  )
}
