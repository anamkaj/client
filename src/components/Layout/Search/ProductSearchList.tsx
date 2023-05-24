import React from 'react'
import { IGProduct } from '../../../helpers/Model/GetServer/model.products'
import { Link } from 'react-router-dom'
import { translate } from '../CatalogCartProduct/helper/translate.url'

type ProductListProp = {
  data: IGProduct[] | undefined
}

export const ProductSearchList = ({ data }: ProductListProp) => {
  return (
    <>
      {data?.map((x) => {
        return (
          <Link
            to={`/product/${translate(x.title)}/${x.id}`}
            key={x.id}
            className='m-2'
          >
            <div className=' flex items-center gap-4'>
              <p className=' font-light text-xs'>Артикул {x.article}</p>
              <span className=' text-sm'>{x.brend}</span>
              <span className=' text-sm'>{x.price} ₽</span>
            </div>
            <div className=' flex items-center gap-2'>
              <img
                className=' w-[60px]'
                src={`http://localhost:4000/img/${x.imgFolder}/${x.imgLink}`}
                alt=''
              />
              <h2 className=' p-2 hover:bg-slate-50 hover:p-2 hover:w-full text-sm'>
                {' '}
                {x.title}
              </h2>
            </div>
          </Link>
        )
      })}
    </>
  )
}
