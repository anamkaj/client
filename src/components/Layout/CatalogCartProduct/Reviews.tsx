import React from 'react'
import { IGProduct } from '../../../helpers/Model/GetServer/model.products'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { useScrollToTop } from '../SingleCart/hook/scroll.elem'

interface IProductProps {
  data: IGProduct
  URL: string
}

export const Reviews = ({ data, URL }: IProductProps) => {
  return (
    <div>
      {data.countReviews !== 0 ? (
        <Link
          to={URL}
          className=' flex text-sm font-light  underline hover:no-underline '
        >
          <span className=' mr-2 '>
            <HiOutlineChatBubbleBottomCenterText className=' w-5 h-5' />
          </span>
          {data.countReviews} Отзыва{' '}
        </Link>
      ) : (
        <span className='text-sm font-light '>Отзывов пока нет</span>
      )}
    </div>
  )
}
