import React from 'react'
import { useOneProduct } from '../../SingleCart/hook/get.one.product'
import { Link } from 'react-router-dom'
import { translate } from '../../CatalogCartProduct/helper/translate.url'

type TitleCarouselProp = {
  id: number
}
export const TitleProductCarousel = ({ id }: TitleCarouselProp) => {
  const { data } = useOneProduct(id)

  return (
    <>
      {data?.map((x) => {
        return (
          <Link
            to={`/product/${translate(x.title)}/${x.id}`}
            key={x.id}
            className=' flex gap-2 items-center'
          >
            <div className=' w-[80px]'>
              <img
                src={`https://tmk-v.ru:8080/img/${x.imgFolder}/${x.imgLink[0]}`}
                alt={x.altImg}
              />
            </div>
            <>
              <div className=' font-thin'>
                {x.title.length > 30 ? x.title.slice(0, 30) + '..' : x.title}
              </div>
            </>
          </Link>
        )
      })}
    </>
  )
}
