import React from 'react'
import { useGetNullCategory } from '../Header/hook/get.category.null'
import { Link } from 'react-router-dom'

export const ListMenu = () => {
  const { data } = useGetNullCategory()
  const nullCategory = data?.filter((e) => e.parentCategoryId == null)
  return (
    <>
      <div className=' bg-slate-50 opacity-100 shadow-lg rounded-sm p-4 w-[50vh]  lg:w-[68vh] xl:w-[27vh] hover:shadow-2xl'>
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
    </>
  )
}
