import React, { useState } from 'react'
import { CounterProduct } from './CounterProduct'
import { ContinueShopping, LinkToCart } from './Button'
import { IGProduct } from '../../../../../helpers/Model/GetServer/model.products'
import { useAppSelector } from '../../../../../store/Redux/storeHook'

type PropPopup = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  product: IGProduct[]
  countPopupProduct: number
  setCountPopupProduct: React.Dispatch<React.SetStateAction<number>>
}

export const Popup = ({
  setActive,
  product,
  countPopupProduct,
  setCountPopupProduct,
}: PropPopup) => {
  const cartStore = useAppSelector((state) => state.cartReducer.cart)
  const totalStore = useAppSelector((state) => state.cartReducer.total)
  const sumProductInStore = cartStore.reduce(
    (acc, curr) => acc + curr.totalCount,
    0,
  )

  return (
    <>
      <div className=' flex my-2 mx-4 gap-2 '>
        <div className=' '>
          <img className=' w-[15vh]'
            src={`http://localhost:4000/img/${product[0].imgFolder}/${product[0].imgLink[0]}`}
            alt={product[0].altImg}
          />
        </div>
        <div className=' '>
          <h2>
            {product[0].title.length > 50
              ? product[0].title.slice(0, 50) + '...' 
              : product[0].title} 
          </h2>
          <div className=' mt-2'>
            <p className=' text-sm'>
              {Math.round(
                product[0].price * (product[0].discount / 11),
              ).toLocaleString('ru')}{' '}
              ₽
            </p>
          </div>
          <div>
            <CounterProduct
              setCountPopupProduct={setCountPopupProduct}
              countPopupProduct={countPopupProduct}
              product={product}
            />
          </div>
        </div>
        <div>
          <div className=' flex flex-col items-end'>
            <LinkToCart />
            <ContinueShopping setActive={setActive} />
          </div>
          <div className='  w-[250px] font-light px-2  mt-4 '>
            <p>
              В вашей корзине
              <span className=' font-bold'> {`${sumProductInStore}`} </span>
              товара на сумму{' '}
              <span className=' font-bold'>{`${totalStore.toLocaleString(
                'ru',
              )}`}</span>{' '}
              ₽.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
