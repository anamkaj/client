import React from 'react'
import { IGProduct } from '../../../../../helpers/Model/GetServer/model.products'
import { CounterProduct } from '../AddProductToStore/CounterProduct'
import { FormFastOrder } from './FormFastOrder'

type PropPopup = {
  product: IGProduct[]
  countFastOrderProduct: number
  setCountFastOrderProduct: React.Dispatch<React.SetStateAction<number>>
  setFastOrderModel: React.Dispatch<React.SetStateAction<boolean>>
}

export const FastOrderPopup = ({
  product,
  countFastOrderProduct,
  setCountFastOrderProduct,
  setFastOrderModel
}: PropPopup) => {
  return (
    <>
      <div className=' flex flex-col items-center '>
        <div className=' '>
          <img
            className=' w-[15vh]'
            src={`https://tmk-v.ru:8080/img/${product[0].imgFolder}/${product[0].imgLink[0]}`}
            alt={product[0].altImg}
          />
        </div>

        <div className=' text-center'>
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
          <div className=' flex justify-center'>
            <CounterProduct
              setCountPopupProduct={setCountFastOrderProduct}
              countPopupProduct={countFastOrderProduct}
              product={product}
            />
          </div>
        </div>
      </div>

      {/* Форма для быстрого заказа  */}

      <FormFastOrder product={product} setFastOrderModel={setFastOrderModel} />
    </>
  )
}
