import React, { useEffect, useState } from 'react'
import { addCartStore } from '../../../../helpers/Model/Store/Redux/type.product'
import { CounterProduct } from '../CounterCart/CounterProduct'
import { ProductSum } from '../CounterCart/ProductSum'
import { OrderAmount } from './OrderAmount'
import { TotalPrice } from './TotalPrice'
import { useCalcPriceProduct } from './hook/calc.prise.cart'

type TotalCartProp = {
  data: addCartStore[]
}

export const AddedProducts = ({ data }: TotalCartProp) => {
  // расчет скидки

  const { totalCartPrice, totalSale } = useCalcPriceProduct({
    data,
  })

  return (
    <div>
      <div className=' grid grid-cols-3 p-4 justify-center bg-slate-100 rounded-t-lg '>
        <div className=' flex justify-center'>
          <p className=' font-semibold'>Товар</p>
        </div>
        <div className=' flex justify-center'>
          <p className=' font-semibold'>Количество</p>
        </div>
        <div className=' flex justify-center'>
          <p className=' font-semibold'>Стоимость</p>
        </div>
      </div>
      <div>
        {data.map((x) => {
          return (
            <div className=' p-2 grid grid-cols-3 gap-4 items-center border border-slate-100 '>
              <div className=' flex flex-col items-center'>
                <img
                  className=' w-[100px]'
                  src={`https://tmk-v.ru:8080/img/${x.imgFolder}/${x.img}`}
                  alt=''
                />
                <p className=' text-center font-thin'>{x.title}</p>
              </div>
              <div className=' flex justify-center'>
                <CounterProduct key={x.id} product={x} />
              </div>
              <div>
                <ProductSum product={x} />
              </div>
            </div>
          )
        })}

        <div className=' border-slate-100 mb-2 mt-4 rounded-sm shadow-sm'>
          <div>
            <OrderAmount
              totalCartPrice={totalCartPrice}
              data={data}
              totalSale={totalSale}
            />
          </div>
          <hr className='my-4' />
          <div className=' mt-4 p-4'>
            <TotalPrice totalCartPrice={totalCartPrice} totalSale={totalSale} />
          </div>
        </div>
      </div>
    </div>
  )
}
