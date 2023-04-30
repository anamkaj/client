import React from 'react'

import { useParams } from 'react-router-dom'
import { LazyLoad } from '../../LazyLoad/LazyLoad'
import { useReviews } from '../hook/getReviws'

export const TabReviews = () => {
  const { data, isLoading } = useReviews()

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
            <>
              <div className=' flex'>
                <img
                  alt='avatar'
                  width='48'
                  height='48'
                  className='rounded-full w-10 h-10 mr-4 shadow-lg mb-4  '
                  src='https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png'
                />
                <h3 className='text-purple-600 font-semibold text-lg text-center md:text-left '>
                  @Гость
                  {x.userId}
                </h3>
              </div>
              <p className='mb-4 text-gray-600 text-lg text-center md:text-left '>
                {x.text}
              </p>
            </>
          )
        })}
      </div>
    </div>
  )
}
