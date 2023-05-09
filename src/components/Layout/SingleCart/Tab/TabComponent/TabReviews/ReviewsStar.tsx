import React, { useEffect } from 'react'
import { BsStarFill, BsStar } from 'react-icons/bs'

type RatingProp = {
  rating: number
  like: number
}

export const ReviewsStar = ({ rating, like }: RatingProp) => {
  const ratingStar = Math.round(like / 3)

  return (
    <>
      <div className=' flex mt-2'>
        {like > 1
          ? [...Array(ratingStar).splice(0, 5)].map((_, index) => {
              return (
                <BsStarFill className='h-4 w-4 text-amber-400 ' key={index} />
              )
            })
          : [...Array(5)].map((_, index) => {
              return <BsStar className='h-4 w-4  ' key={index} />
            })}
      </div>
    </>
  )
}
