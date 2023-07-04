import React from 'react'
import { ICategory } from '../../../../helpers/Model/GetServer/query.category.model'
import { FadeLoader } from 'react-spinners'
import { useCategoryFilter } from '../hook/filter.category'
import { Link } from 'react-router-dom'

type CategoryMobileProps = {
  category: ICategory[] | undefined
  id: string | undefined
  loadingCategory: boolean
}

export const MobileCatalog = ({
  category,
  id,
  loadingCategory,
}: CategoryMobileProps) => {
  const { mainCategory } = useCategoryFilter(Number(id))
  if (loadingCategory) {
    return (
      <div className=' container mx-auto '>
        <div className=' flex justify-center items-center'>
          <FadeLoader color='#757575' />
        </div>
      </div>
    )
  }
  return (
    <div className=' flex gap-2 flex-wrap justify-between w-full '>
      {mainCategory?.map((e) => {
        return (
          <Link
            to={`/category/${e.slug}/${e.id}`}
            key={e.id}
            className='  w-[43vw] h-[110px] flex flex-col rounded-lg  shadow-lg items-center '
          >
            <div className=' mt-2 '>
              <img
                className=' h-12 w-12 '
                src={`https://tmk-v.ru:8080/img/${e.folderImg}/${e.img}`}
                alt={''}
              />
            </div>

            <div className=' text-center text-xs mt-2 '>{e.name}</div>
          </Link>
        )
      })}
    </div>
  )
}
