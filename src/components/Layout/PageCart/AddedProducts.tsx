import React from 'react'
import { addCartStore } from '../../../helpers/Model/Store/Redux/type.product'
import { CounterProduct } from './CounterCart/CounterProduct'
import { ProductSum } from './CounterCart/ProductSum'

type TotalCartProp = {
  totalCart: addCartStore[]
}

export const AddedProducts = ({ totalCart }: TotalCartProp) => {
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
        {totalCart.map((x) => {
          return (
            <div className=' p-2 grid grid-cols-3 gap-4 items-center border border-slate-100 '>
              <div className=' flex flex-col items-center'>
                <img
                  className=' w-[100px]'
                  src={`http://46.19.67.106:8080/img/${x.imgFolder}/${x.img}`}
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
      </div>
    </div>
  )
}
