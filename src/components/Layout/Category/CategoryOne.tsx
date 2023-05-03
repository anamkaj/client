import React, { useState, useEffect, useRef } from 'react'
import { ICategory } from '../../../helpers/Model/GetServer/query.category.model'
import { Link } from 'react-router-dom'
import { CategoryTwo } from './CategoryTwo'
import { catStore } from '../../../store/NanoStore/CategoryStore/category.store'
import { useStore } from '@nanostores/react'
import { FadeLoader } from 'react-spinners'

type Props = {
  category: ICategory[] | undefined
  id: string | undefined
  loadingCategory: boolean
}

export const CategoryOne = ({ category, id, loadingCategory }: Props) => {
  const storeCat = useStore(catStore)
  const mainCategory = storeCat.filter((x) => x.parentCategoryId == Number(id))

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
    <>
      {mainCategory?.map((e) => {
        return (
          <div
            key={e.id}
            className=' flex flex-col  max-w-sm rounded-lg  shadow-lg  box-border w-64 h-164 p-2 items-center '
          >
            <div className=' flex h-32 w-32 items-center '>
              <img
                className='mt-4 '
                src={`http://localhost:4000/img/${e.folderImg}/${e.img}`}
                alt={''}
              />
            </div>
            <button className=' mt-5'>
              <Link
                to={`/category/${e.slug}/${e.id}`}
                className=' mb-2 text-center inline-block rounded bg-neutral-50 px-6 pt-2.5 pb-2 text-sm font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)]'
              >
                {e.name}
              </Link>
            </button>

            <CategoryTwo
              category={category}
              id={e.id}
              loadingCategory={loadingCategory}
            />
          </div>
        )
      })}
    </>
  )
}
