import React from 'react'
import { IGProduct } from '../../../../../helpers/model/model.products'
import { CounterProduct } from '../AddProductToStore/CounterProduct'
import { FormFastOrder } from './FormFastOrder'

type PropPopup = {
  product: IGProduct[]
  countFastOrderProduct: number
  setCountFastOrderProduct: React.Dispatch<React.SetStateAction<number>>
}

export const FastOrderPopup = ({
  product,
  countFastOrderProduct,
  setCountFastOrderProduct,
}: PropPopup) => {
  return (
    <div className=' flex'>
      <div className=' flex flex-col'>
        <div className=' w-1/4'>
          <img
            src={`http://localhost:4000/img/${product[0].imgFolder}/${product[0].imgLink[0]}`}
            alt={product[0].altImg}
          />
        </div>

        <div className=' w-1/2'>
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
              setCountPopupProduct={setCountFastOrderProduct}
              countPopupProduct={countFastOrderProduct}
              product={product}
            />
          </div>
        </div>
      </div>

      {/* Форма для быстрого заказа  */}

      <FormFastOrder />
    </div>
  )
}
