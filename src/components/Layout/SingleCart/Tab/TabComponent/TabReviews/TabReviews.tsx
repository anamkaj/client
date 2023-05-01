import React from 'react'

import { useParams } from 'react-router-dom'
import { LazyLoad } from '../../../../LazyLoad/LazyLoad'
import { useReviews } from '../../../hook/get.reviwes.product'
import { BsHeart, BsStarFill, BsStar } from 'react-icons/bs'
import { BsHeartFill } from 'react-icons/bs'

// Рендеринг комментариев о продукте

type TabReviews = {
  id: number
}

export const TabReviews = ({ id }: TabReviews) => {
  const { data, isLoading } = useReviews(id)

  if (isLoading) {
    return <LazyLoad />
  }

  if (!data) {
    return <span> Error</span>
  }

  return (
    <div>
      <div className='flex flex-col gap-2 justify-start mr-2 mt-4'>
        {data.map((x) => {
          return (
            <div key={x.id} className=' w-1/2 rounded border px-6 py-4'>
              <div className=' flex items-center'>
                <img
                  alt='avatar'
                  width='48'
                  height='48'
                  className='rounded-full w-10 h-10 mr-4 shadow-lg mb-4  '
                  src='https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png'
                />
                <div className=' mb-5 '>
                  <h3 className=' text-purple-600 font-semibold text-lg  md:text-left '>
                    @Гость
                    {x.userId}
                  </h3>
                  <div>
                    <span className=' font-extralight text-xs'>
                      {x.createdAt.toString().slice(0, 10)}
                    </span>
                  </div>
                  <div className=' flex mt-2'>
                    {x.rating !== null
                      ? [...Array(x.rating).splice(0, 5)].map((_, index) => {
                          return (
                            <BsStarFill
                              className='h-4 w-4 text-amber-400 '
                              key={index}
                            />
                          )
                        })
                      : [...Array(5)].map((_) => {
                          return <BsStar className='h-4 w-4  ' />
                        })}
                  </div>
                </div>
              </div>
              <p className='mb-4 text-gray-600 text-lg md:text-left '>
                {x.text}
              </p>
              <div className=' flex justify-end'>
                <BsHeart />
                <BsHeartFill />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
