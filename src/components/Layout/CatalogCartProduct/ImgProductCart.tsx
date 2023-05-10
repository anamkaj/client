import React from 'react'
import { Link } from 'react-router-dom'
import { IGProduct } from '../../../helpers/Model/GetServer/model.products'
import { useCountViewInc } from './hook/count.view.inc'

interface ImgProp {
  data: IGProduct
  URL: string
}
export const ImgProductCart = ({ data, URL }: ImgProp) => {
  const { countViewInc } = useCountViewInc(data.id)
  return (
    <>
      <Link
        onClick={() => countViewInc()}
        to={URL}
        className='mb-4 w-[150px] h-[150px]'
      >
        <img
          className='block object-cover object-center w-full h-full rounded-lg'
          src={`http://localhost:4000/img/${data.imgFolder}/${data.imgLink[0]}`}
          alt={data.altImg}
        />
      </Link>
    </>
  )
}
