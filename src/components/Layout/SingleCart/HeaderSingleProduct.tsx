import React from 'react'
import { BsStar } from 'react-icons/bs'
import { BsStarFill } from 'react-icons/bs'
import { Scrollchor } from 'react-scrollchor'
import { IGProduct } from '../../../helpers/model/model.products'
import { BsChatDots } from 'react-icons/bs'

type Props = {
  setActiveTab: React.Dispatch<React.SetStateAction<number>>
  product: IGProduct[]
}

export const HeaderSingleProduct = ({ setActiveTab, product }: Props) => {
  return (
    <div>
      <div className={'flex gap-x-6 items-center mt-5'}>
        <div className='flex items-center '>
          {[...Array(product[0].rating)].map((x, index) => {
            return (
              <BsStarFill className='h-4 w-4 text-amber-400 ' key={index} />
            )
          })}
          <div>
            <p className=' ml-2 text-sm font-bold text-gray-500 '>
              {product[0].rating}
            </p>
          </div>

          <Scrollchor to={''}>
            <button
              className=' flex items-center gap-2  font-light hover:underline ml-6 text-gray-500 text-sm'
              onClick={() => setActiveTab(3)}
            >
              <span>
                <BsChatDots />
              </span>
              {product[0].countReviews} Отзыва(ов)
            </button>
          </Scrollchor>
        </div>
        <p className=' text-gray-600 text-sm font-bold'>
          <span className='font-light '>Код товара:</span> {product[0].article}
        </p>
      </div>
    </div>
  )
}
