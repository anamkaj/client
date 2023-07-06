import React, { useState } from 'react'
import { BsArrowLeftCircle, BsChevronRight, BsXLg } from 'react-icons/bs'
import { TableParamsProduct } from '../TableParamsProduct'
import { IGProduct } from '../../../../../../helpers/Model/GetServer/model.products'
import { TablePropsProduct } from '../../../TablePropsProduct'

type MobileParamProduct = {
  product: IGProduct[]
}

export const MobileTableParams = ({ product }: MobileParamProduct) => {
  const [paramsProduct, setParamsProduct] = useState(false)
  return (
    <div>
      <div>
        <TablePropsProduct product={product} />
      </div>
      <div className=' flex justify-end mt-0'>
        <button
          className=' flex items-center gap-2 text-sm font-semibold text-slate-500 mt-2'
          onClick={() => setParamsProduct(true)}
        >
          Полное описание
          <BsChevronRight className=' h-4 w-4' />
        </button>
      </div>
      {paramsProduct && (
        <div className='fixed bg-white top-0 left-0 h-[100%] w-[100%] overflow-scroll p-4 '>
          <div className='flex justify-between items-center mt-2 mb-2 w-full'>
            <BsArrowLeftCircle
              className=' w-5 h-5'
              onClick={() => setParamsProduct(false)}
            />
            <span className=' text-lg font-semibold'>Параметры</span>
            <BsXLg
              className=' w-5 h-5'
              onClick={() => setParamsProduct(false)}
            />
          </div>
          <hr className=' mb-2 border border-slate-400' />
          <div>
            <TableParamsProduct product={product} />
          </div>
        </div>
      )}
    </div>
  )
}
