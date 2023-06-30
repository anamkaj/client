import React from 'react'

export const BannerMain = () => {
  const imgBanner = 'https://tmk-v.ru:8080/img/mainPage/4334.jpg'
  return (
    <>
      {/* <div
        style={{
          backgroundImage: `url(${imgBanner})`,
        }}
        className='w-full bg-cover bg-no-repeat bg-center rounded-lg hidden xl:block'
      >
      
      </div> */}
      <div className=' hidden xl:w-[310px] xl:block'></div>
      <div>
        <img src={imgBanner} className='' alt='Монтаж видеонаблюдения в Краснодаре' />
      </div>
    </>
  )
}
