import React, { useRef } from 'react'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import { ProductsCart } from '../../CatalogCartProduct/ProductsCart'
import { IGProduct } from '../../../../helpers/Model/GetServer/model.products'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type CarouselsProp = {
  data: IGProduct[] | undefined
  isLoading: boolean
}

export const Carousels = ({ data, isLoading }: CarouselsProp) => {
  const slider = useRef<Slider>(null)

  const settings = {
    className: '',
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          className: ' m-10',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className=' relative shadow-lg'>
      <div className=' z-10 absolute pointer-events-none top-[140px] w-full'>
        <div className=' flex justify-between  text-slate-500'>
          <div>
            <button
              className='rounded-full p-2 bg-slate-200 opacity-70 pointer-events-auto'
              onClick={() => slider.current?.slickNext()}
            >
              <AiOutlineDoubleLeft className=' w-10 h-10  hover:translate-x-[-8px]' />
            </button>
          </div>
          <div>
            <button
              className='rounded-full p-2 bg-slate-200 opacity-70 pointer-events-auto'
              onClick={() => slider.current?.slickPrev()}
            >
              <AiOutlineDoubleRight className='w-10 h-10 hover:translate-x-[8px]' />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Slider ref={slider} {...settings}>
          {data?.map((x) => (
            <ProductsCart
              key={x.id}
              data={x}
              isLoading={isLoading}
              gridStore={true}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}
