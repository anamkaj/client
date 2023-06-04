import React from 'react'

export const BannerMain = () => {
  const imgBanner = 'http://localhost:4000/img/banner/4334.jpg'
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imgBanner})`,
        }}
        className=' bg-cover bg-no-repeat bg-center rounded-lg '
      ></div>
      {/* <div className=' bg-slate-100'>
        <div className=' grid grid-cols-2 '>
          <div>
            <div className=' h-[150px]'></div>
            <div>
              <h1 className=' p-4 text-4xl font-bold tracking-normal uppercase text-blue-800'>
                Системы видеонаблюдения{' '}
              </h1>
            </div>
          </div>
          <div>
            <img src='http://localhost:4000/img/banner/test.jpg' alt='' />
          </div>
        </div>
      </div> */}
    </>
  )
}
