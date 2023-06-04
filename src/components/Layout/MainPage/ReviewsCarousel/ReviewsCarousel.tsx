import React, { useRef } from 'react'
import { useReviewsCarousel } from '../hook/get.popular.product'
import { ReviewsStar } from '../../SingleCart/Tab/TabComponent/TabReviews/ReviewsStar'
import { TitleProductCarousel } from './TitleProductCarousel'
import Slider from 'react-slick'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'

export const ReviewsCarousel = () => {
  const { data, isLoading } = useReviewsCarousel()
  const slider = useRef<Slider>(null)

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          className: ' m-1 ',
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          className: ' m-12',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          className: ' m-18',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          className: ' m-10',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          className: ' m-10',
        },
      },
    ],
  }

  return (
    <div className=' relative'>
      <div className=' mt-10 mb-2 '>
        <h2 className='font-bold text-2xl text-slate-600 uppercase'>Отзывы</h2>
      </div>
      <div className=' z-10 absolute pointer-events-none  top-[150px] w-full'>
        <div className=' flex justify-between  text-slate-500'>
          <div>
            <button
              className='rounded-full p-2 bg-slate-200 opacity-70 pointer-events-auto'
              onClick={() => slider.current?.slickNext()}
            >
              <AiOutlineDoubleLeft className=' w-8 h-8  hover:translate-x-[-8px]' />
            </button>
          </div>
          <div>
            <button
              className='rounded-full p-2 bg-slate-200 opacity-70 pointer-events-auto'
              onClick={() => slider.current?.slickPrev()}
            >
              <AiOutlineDoubleRight className=' w-8 h-8  hover:translate-x-[8px]' />
            </button>
          </div>
        </div>
      </div>
      <Slider ref={slider} {...settings}>
        {data?.map((x) => {
          return (
            <div key={x.id}>
              <div className=' border p-4 shadow-lg rounded-lg mb-10 m-3 h-[260px]'>
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
      </Slider>
    </div>
  )
}
