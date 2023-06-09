import React from 'react'
import { BannerMain } from '../components/Layout/MainPage/Banner/BannerMain'
import { Carousel } from '../components/Layout/MainPage/Carousels/Carousel'
import { BrandBanner } from '../components/Layout/MainPage/BrandBanner/BrandBanner'
import { ReviewsCarousel } from '../components/Layout/MainPage/ReviewsCarousel/ReviewsCarousel'
import { Advantages } from '../components/Layout/MainPage/SEO/Advantages'
import { Services } from '../components/Layout/MainPage/Services/Services'
import { ExtraBenefit } from '../components/Layout/MainPage/ExtraBenefit/ExtraBenefit'
import { Helmet } from 'react-helmet-async'
import { Head } from '../components/Layout/Head/Head'

export const MainPage = () => {
  return (
    <div className='container mx-auto p-2'>
      <Head title='Интернет магазин видеонаблюдения г.Краснодар' />
      <div className=' flex mt-4 lg:mt-0'>
        <BannerMain />
      </div>
      <>
        <ExtraBenefit />
      </>
      <>
        <Carousel />
      </>
      <>
        <BrandBanner />
      </>
      <>
        <Services />
      </>
      <>
        <ReviewsCarousel />
      </>
      <>
        <Advantages />
      </>
    </div>
  )
}
