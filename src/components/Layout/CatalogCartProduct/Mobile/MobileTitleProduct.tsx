import React from 'react'
import { IGProduct } from '../../../../helpers/Model/GetServer/model.products'
import { Link } from 'react-router-dom'

interface MobileTitleProp {
  data: IGProduct
  URL: string
}

export const MobileTitleProduct = ({ data, URL }: MobileTitleProp) => {
  return (
    <Link
      to={URL}
      className=' flex font-light text-black text-sm text-center h-[70px]'
    >
      {data.title.length > 60 ? data.title.slice(0, 60) + '...' : data.title}
    </Link>
  )
}
