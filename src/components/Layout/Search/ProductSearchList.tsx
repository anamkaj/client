import React from 'react'
import { IGProduct } from '../../../helpers/Model/GetServer/model.products'
import { Link } from 'react-router-dom'
import urlSlug from 'url-slug'


type ProductListProp = {
  data: IGProduct[] | undefined
}

export const ProductSearchList = ({ data }: ProductListProp) => {
  return (
    <>
      {data?.map((x) => {
        return (
          <Link
            to={`/product/${urlSlug(x.title)}/${x.id}`}
            key={x.id}
            className=''
          >
            <div className=' flex items-center gap-4'>
              <p className=' font-light text-xs'>Артикул {x.article}</p>
              <span className=' text-sm'>{x.brend}</span>
              <span className=' text-sm'>{x.price} ₽</span>
            </div>
            <div className=' flex items-center gap-2'>
              <img
                className=' w-[60px]'
                src={`https://tmk-v.ru:8080/img/${x.imgFolder}/${x.imgLink[0]}`}
                alt={x.altImg}
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
