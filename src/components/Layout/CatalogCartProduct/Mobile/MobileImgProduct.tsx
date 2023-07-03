import React from 'react'
import { IGProduct } from '../../../../helpers/Model/GetServer/model.products'
import { useCountViewInc } from '../hook/count.view.inc'
import { Link } from 'react-router-dom'

interface MobileImgProp {
  data: IGProduct
  URL: string
}

export const MobileImgProduct = ({ data, URL }: MobileImgProp) => {
  return (
    <Link to={URL} className='mb-4 w-[100px] h-[100px]'>
      <img
        className='block object-cover object-center w-full h-full rounded-lg'
        src={`https://tmk-v.ru:8080/img/${data.imgFolder}/${data.imgLink[0]}`}
        alt={data.altImg}
      />
    </Link>
  )
}
