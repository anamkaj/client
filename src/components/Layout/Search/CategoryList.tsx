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
        <div className='  grid grid-cols-3 grid-rows-2 gap-2 mb-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500'>
          {category?.map((x) => {
            return (
              <Link
                to={`/category/${x.slug}/${x.id}`}
                key={x.id}
                className=' flex flex-col justify-center border items-center shadow-sm rounded-md '
              >
                <img
                  className=' w-[40px]'
                  src={`http://localhost:4000/img/${x.folderImg}/${x.img}`}
                  alt={x.name}
                />
                <h2 className=' text-sm whitespace-pre-wrap '>{x.name}</h2>
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
