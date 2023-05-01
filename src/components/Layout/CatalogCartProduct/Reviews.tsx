import React from 'react'
import { IGProduct } from '../../../helpers/Model/GetServer/model.products'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'

interface IProductProps {
  data: IGProduct
}

export const Reviews = ({ data }: IProductProps) => {
  return (
    <div>
      {data.countReviews !== 0 ? (
        <a
          href='#'
          className=' flex text-sm font-light  underline hover:no-underline '
        >
          <span className=' mr-2 '>
            <HiOutlineChatBubbleBottomCenterText className=' w-5 h-5' />
          </span>
          {data.countReviews} Отзыва{' '}
        </a>
      ) : (
        <span className='text-sm font-light  underline hover:no-underline '>
          Отзывов пока нет
        </span>
      )}
    </div>
  )
}
