import React, { useRef, useEffect, useState } from 'react'
import Carousel from 'nuka-carousel'
import './slider.css'
import { useMediaQuery } from 'react-responsive'

export const BrandBanner = () => {
  const imgPopularBrand = [
    '7381.600.jpg',
    'Dahuog.png',
    'polivision.png',
    'trasit.jpg',
    'slinex.png',
    'Seagate.png',
  ]
  const [countSlide, setCountSlide] = useState(4)
  const isMobileScreen = useMediaQuery({ query: '(max-width: 480px)' })

  const params = {
    slidesToShow: countSlide,
    autoplay: true,
    defaultControlsConfig: {
      nextButtonClassName: 'nextButtonClassName',
      prevButtonClassName: 'prevButtonClassName',
      pagingDotsClassName: 'pagingDotsClassName',
    },
    wrapAround: true,
    speed: 4000,
  }
  useEffect(() => {
    if (isMobileScreen) {
      setCountSlide(3)
    }
  })

  return (
    <div>
      <div className=' mt-10 mb-2 '>
        <h2 className='font-bold text-xl lg:text-2xl text-slate-600 uppercase'>
          Топовые бренды{' '}
        </h2>
      </div>
      <Carousel {...params}>
        {imgPopularBrand.map((x) => {
          return (
            <div className='p-4 w-[30vw] lg:w-[15vw] '>
              <img
                src={`https://tmk-v.ru:8080/img/brand_banner/${x}`}
                alt='brandCCTV'
              />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
