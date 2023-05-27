import React, { useState } from 'react'
import { ICategory } from '../../../helpers/Model/GetServer/query.category.model'
import { Link } from 'react-router-dom'

type CatalogProp = {
  catalog: boolean
  data: ICategory[] | undefined
  setCatalog: React.Dispatch<React.SetStateAction<boolean>>
}

export const CatalogMenu = ({ catalog, data, setCatalog }: CatalogProp) => {
  const nullCategory = data?.filter((e) => e.parentCategoryId == null)

  return (
    <>
      <div
        onMouseEnter={() => setCatalog(false)}
        className='fixed min-h-full min-w-full top-0 left-0'
      ></div>

      <div className=' fixed' hidden={!catalog}>
        <div className='  fixed bg-slate-50 opacity-100 shadow-lg rounded-sm p-4 w-[40vh]'>
          <ul className=' flex flex-col items-start mb-2  '>
            {nullCategory?.map((x) => {
              return (
                <li
                  key={x.id}
                  className=' font-light text-sx hover:font-normal hover:bg-white cursor-pointer w-full p-1  '
                >
                  <Link to={`/category/${x?.slug}/${x?.id}`}>{x.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
