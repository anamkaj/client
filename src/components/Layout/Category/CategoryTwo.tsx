import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ICategory } from '../../../helpers/Model/GetServer/query.category.model'
import { FadeLoader } from 'react-spinners'
import { motion, useAnimate } from 'framer-motion'
import { variants, item, list, variants1 } from '../UI/animation/category'

type Props = {
  category: ICategory[] | undefined
  id: number | undefined
  loadingCategory: boolean
}
export const CategoryTwo = ({ category, id, loadingCategory }: Props) => {
  const subCategory = category?.filter((y) => y?.parentCategoryId == id)

  if (loadingCategory) {
    return (
      <div className=' container mx-auto '>
        <div className=' flex justify-center items-center'>
          <FadeLoader color='#757575' />
        </div>
      </div>
    )
  }

  // Получение подкатегорий

  return (
    <>
      <div className='  mt-5 flex flex-col items-center '>
        {subCategory?.map((x, i) => {
          return (
            <motion.div
              key={x?.id}
              initial='hidden'
              animate='visible'
              variants={variants}
            >
              <motion.ul
                custom={i}
                whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
                whileTap={{ scale: 0.8 }}
                variants={variants1}
              >
                <Link
                  to={`/category/${x?.slug}/${x?.id}`}
                  className=' inline-block rounded px-6 pt-2.5 pb-2 text-sm  leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)]'
                >
                  <div className=' flex items-center'>
                    <span className='  font-light'>{x?.name}</span>
                  </div>
                </Link>
              </motion.ul>
            </motion.div>
          )
        })}
      </div>
    </>
  )
}
