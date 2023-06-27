import React from 'react'
import { ICategory } from '../../../helpers/Model/GetServer/query.category.model'
import { Link } from 'react-router-dom'

type CategoryProp = {
  category: ICategory[] | undefined
}

export const CategoryList = ({ category }: CategoryProp) => {
  return (
    <>
      {category?.length !== 0 ? (
        <div className='  flex flex-wrap gap-2 mb-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500'>
          {category?.map((x) => {
            if (x.parentCategoryId !== null)
              return (
                <Link
                  to={`/category/${x.slug}/${x.id}`}
                  key={x.id}
                  className=' flex flex-col p-2 w-1/3 text-center justify-center border items-center shadow-sm rounded-md  '
                >
                  <img
                    className=' w-[40px]'
                    src={`https://tmk-v.ru:8080/img/${x.folderImg}/${x.img}`}
                    alt={x.name}
                  />
                  <h2 className=' text-xs lg:text-sm whitespace-pre-wrap '>
                    {x.name}
                  </h2>
                </Link>
              )
          })}
        </div>
      ) : (
        <div className=' flex items-center justify-center'>
          <p className=' font-medium text-xl'>
            Подходящей категории не найдено{' '}
          </p>
        </div>
      )}
    </>
  )
}
