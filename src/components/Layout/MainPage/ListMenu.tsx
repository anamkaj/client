import React from 'react'
import { useGetNullCategory } from '../Header/hook/get.category.null'
import { Link } from 'react-router-dom'

export const ListMenu = () => {
  const { data } = useGetNullCategory()
  const nullCategory = data?.filter((e) => e.parentCategoryId == null)
  return (
    <div className=' absolute z-30 w-full'>
      <div className=' bg-slate-50 opacity-100 shadow-lg p-2 lg:p-4 rounded-b-xl   hover:shadow-2xl'>
        <ul className=' flex flex-col items-start mb-2 '>
          {nullCategory?.map((x) => {
            return (
              <li
                key={x.id}
                className=' font-light text-xs lg:text-sm hover:font-normal hover:bg-white cursor-pointer w-full p-1  '
              >
                <Link to={`/category/${x?.slug}/${x?.id}`}>{x.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
