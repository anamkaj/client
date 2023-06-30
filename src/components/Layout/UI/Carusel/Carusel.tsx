import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import { ProductsCart } from '../../CatalogCartProduct/ProductsCart'
import { IGProduct } from '../../../../helpers/Model/GetServer/model.products'
import './slider.css'
import { useMediaQuery } from 'react-responsive'
import Carousel from 'nuka-carousel'

type CarouselsProp = {
  data: IGProduct[] | undefined
  isLoading: boolean
}

export const Carousels = ({ data, isLoading }: CarouselsProp) => {
  const [countSlide, setCountSlide] = useState(4)
  const [cellSpacing, setCellSpacing] = useState(10)
  const isMobileScreen = useMediaQuery({ query: '(max-width: 480px)' })

  const params = {
    slidesToShow: countSlide,
    autoplay: true,
    defaultControlsConfig: {
      containerClassName: 'containerSlider',
      nextButtonClassName: 'nextButtonSlider',
      prevButtonClassName: 'prevButtonSlider',
      pagingDotsClassName: 'pagingDotsSlider',
      nextButtonText: <AiOutlineDoubleRight />,
      prevButtonText: <AiOutlineDoubleLeft />,
    },
    wrapAround: true,
    disableAnimation: false,
    className: 'sliderStyle',
    cellSpacing: cellSpacing,
    speed: 1000,
  }

  useEffect(() => {
    if (isMobileScreen) {
      setCountSlide(1)
      setCellSpacing(80)
    } else {
      setCountSlide(2)
    }
  })
  return (
    <div className=' relative shadow-lg'>
      <div>
        <Carousel {...params}>
          {data?.map((x) => (
            <ProductsCart
              key={x.id}
              data={x}
              isLoading={isLoading}
              gridStore={true}
            />
          ))}
        </Carousel>
      </div>
    </div>
  )
}
