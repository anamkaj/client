import React, { useEffect, useRef, useState } from 'react'
import { useReviewsCarousel } from '../hook/get.popular.product'
import { ReviewsStar } from '../../SingleCart/Tab/TabComponent/TabReviews/ReviewsStar'
import { TitleProductCarousel } from './TitleProductCarousel'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import Carousel from 'nuka-carousel'
import { useMediaQuery } from 'react-responsive'
import { LazyLoad } from '../../LazyLoad/LazyLoad'
import './sliderReviews.css'

export const ReviewsCarousel = () => {
  const { data, isLoading } = useReviewsCarousel()
  const [countSlide, setCountSlide] = useState(4)
  const [cellSpacing, setCellSpacing] = useState(10)
  const isMobileScreen = useMediaQuery({ query: '(max-width: 480px)' })

  const params = {
    slidesToShow: countSlide,
    autoplay: true,
    defaultControlsConfig: {
      containerClassName: 'containerSliderReviews',
      nextButtonClassName: 'nextButtonSliderReviews',
      prevButtonClassName: 'prevButtonSliderReviews',
      pagingDotsClassName: 'pagingDotsSliderReviews',
      nextButtonText: <AiOutlineDoubleRight />,
      prevButtonText: <AiOutlineDoubleLeft />,
    },
    wrapAround: true,
    // className: 'sliderStyle',
    cellSpacing: cellSpacing,
    speed: 1000,
  }
  useEffect(() => {
    if (isMobileScreen) {
      setCountSlide(1)
      setCellSpacing(80)
    } else {
      setCountSlide(3)
    }
  })

  if (isLoading) {
    return <LazyLoad />
  }

  return (
    <div className=' relative'>
      <div className=' mt-10 mb-2 '>
        <h2 className='font-bold text-xl lg:text-2xl text-slate-600 uppercase'>
          Отзывы
        </h2>
      </div>

      <Carousel {...params}>
        {data?.map((x) => {
          return (
            <div key={x.id}>
              <div className=' border p-4 shadow-lg rounded-lg mb-10 m-3 h-[260px] w-[65vw] md:w-[30vw] lg:w-[30vw] xl:w-[20vw] 2xl:w-full '>
                <div className=' font-extralight text-xs text-slate-400'>
                  {x.createdAt.toString().slice(0, 10)}
                </div>
                <TitleProductCarousel key={x.id} id={x.productId} />
                <div className=' mb-4'>
                  <ReviewsStar rating={x.rating} like={x.like} />
                </div>
                <p className=' font-thin'>
                  {x.text.length > 100 ? x.text.slice(0, 100) + '...' : x.text}
                </p>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
