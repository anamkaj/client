import React from 'react'

export const Logo = () => {
  return (
    <>
      <div className='  flex gap-4 items-center  '>
        <img
          src={require('../../../images/component_img/Header/logo.png')}
          alt='text'
          className=' w-[100px] '
        />
        <p className=' mt-2 uppercase text-sm font-sans text-black'>
          Интернет-магазин <br></br> Безопасности
        </p>
      </div>
    </>
  )
}
