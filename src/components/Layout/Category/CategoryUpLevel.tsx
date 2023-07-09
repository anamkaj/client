import React from 'react'
import { CategoryTwo } from './CategoryTwo'
import { ICategory } from '../../../helpers/Model/GetServer/query.category.model'
import { Link } from 'react-router-dom'
import { FadeLoader } from 'react-spinners'
import { useCategoryFilter } from './hook/filter.category'

type Props = {
  category: ICategory[] | undefined
  id: string | undefined
  loadingCategory: boolean
}

export const CategoryUpLevel = ({ category, id, loadingCategory }: Props) => {
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
    <div className=' grid grid-cols-3 items-start gap-2 lg:grid-cols-4 '>
      {mainCategory?.map((e) => {
        return (
          <div
            key={e.id}
            className=' flex flex-col rounded-lg shadow-lg box-border p-2 items-center h-full '
          >
            <div className=' flex h-32 w-32 items-center '>
              <img
                className='mt-4'
                src={`https://tmk-v.ru:8080/img/${e.folderImg}/${e.img}`}
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
    </div>
  )
}
