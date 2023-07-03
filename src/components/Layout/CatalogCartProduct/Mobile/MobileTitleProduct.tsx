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
      className=' flex font-light text-black text-sm text-center mb-2'
    >
      {data.title.length > 70 ? data.title.slice(0, 75) + '...' : data.title}
    </Link>
  )
}
