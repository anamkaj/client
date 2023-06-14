import React from 'react'

export const BrandBanner = () => {
  return (
    <div>
      <div className=' mt-10 mb-2 '>
        <h2 className='font-bold text-2xl text-slate-600 uppercase'>
          {' '}
          Топовые бренды{' '}
        </h2>
      </div>
      <div className=' grid grid-cols-6 items-center gap-2 '>
        <div className='p-4'>
          <img
            src={`https://46.19.67.106:8080/img/brand_banner/7381.600.jpg`}
            alt=''
          />
        </div>
        <div className=' p-4'>
          <img
            src={`https://46.19.67.106:8080/img/brand_banner/Dahuog.png`}
            alt=''
          />
        </div>
        <div className=' p-4'>
          <img
            src={`https://46.19.67.106:8080/img/brand_banner/polivision.png`}
            alt=''
          />
        </div>
        <div className=' p-4'>
          <img
            src={`https://46.19.67.106:8080/img/brand_banner/trasit.jpg`}
            alt=''
          />
        </div>
        <div className=' p-4'>
          <img
            src={`https://46.19.67.106:8080/img/brand_banner/slinex.png`}
            alt=''
          />
        </div>
        <div className=' p-4'>
          <img
            src={`https://46.19.67.106:8080/img/brand_banner/Seagate.png`}
            alt=''
          />
        </div>
      </div>
    </div>
  )
}
