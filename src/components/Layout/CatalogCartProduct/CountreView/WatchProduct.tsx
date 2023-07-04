import React from 'react'
import { FaEye } from 'react-icons/fa'
import { IGProduct } from '../../../../helpers/Model/GetServer/model.products'

type WatchProductProp = {
  data: IGProduct
}

export const WatchProduct = ({ data }: WatchProductProp) => {
  return (
    <div className=' flex items-center'>
      <div className=' font-light text-xs rounded-l-lg  flex items-center'>
        <span className=' mr-2 '>
          <FaEye className=' w-5 h-5' />
        </span>
      </div>
      <div className='bg-white font-light text-xs rounded-r-lg hover:text-blue-500'>
        {data.watchProduct}
      </div>
    </div>
  )
}
