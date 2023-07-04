import React from 'react'
import { Link } from 'react-router-dom'
import { IGProduct } from '../../../helpers/Model/GetServer/model.products'
import { useCountViewInc } from './hook/count.view.inc'

interface TitleProp {
  data: IGProduct
  URL: string
}

export const TitleProductCart = ({ data, URL }: TitleProp) => {
  const { countViewInc } = useCountViewInc(data.id)
  
  return (
    <>
      <Link
        onClick={() => countViewInc()}
        to={URL}
        className=' flex font-light text-black text-sm text-center mb-2 h-8'
      >
        {data.title.length > 70
          ? data.title.slice(0, 75) + '...'
          : data.title}
      </Link>
    </>
  )
}
