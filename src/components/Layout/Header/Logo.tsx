import React from 'react'
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to ={"/"}>
      <div className=' flex flex-col lg:flex-row gap-4 items-center justify-center'>
        <img
          src={require('../../../images/component_img/Header/logo.png')}
          alt='text'
          className=' w-[100px] '
        />
        <p className=' mt-0 uppercase font-sans text-black text-xs lg:text-sm lg:break-words '>
          Интернет-магазин Безопасности
        </p>
      </div>
    </Link>
  )
}
