import React from 'react'
import { Link } from 'react-router-dom'
import { listMenu } from '../../../helpers/model.header'
import ShopCardHeader from './CardHeader/ShopCardHeader'

interface listMenuProps {
  propsList: listMenu[]
}

export const Header = ({ propsList }: listMenuProps) => {
  const handleClick = (stateButton: number) => {
    console.log(`click button ${stateButton}`)
  }

  return (
    <div className='w-full bg-white'>
      <div className='container mx-auto py-2'>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='flex flex-col items-center '>
            <img
              src={require('../../../images/component_img/Header/logo.png')}
              alt='text'
              className=' w-[70px] hover:animate-ping'
            />
            <p className='py-2  uppercase text-xs font-sans text-black'>
              Интернет-магазин <br></br> видеонаблюдения
            </p>
          </div>
          <div className='flex gap-2  text-white uppercase py-2 '>
            {propsList.map((menu, index) => (
              <button
                id={propsList[index].title}
                onClick={() => handleClick(propsList[index].id)}
                className=' flex items-center rounded-sm  bg-gray-100 uppercase py-1 px-4 text-slate-500 shadow-md font-light hover:text-neutral-800  hover:shadow-gray-500 hover:rounded-md '
                key={propsList[index].id}
              >
                <Link to={propsList[index].path}>{propsList[index].title}</Link>
              </button>
            ))}
          </div>
          <div className=''>
            <div>
              <span className='text-xs font-medium px-4 font-bold text-black'>
                Телефон
              </span>
            </div>
            <div className='flex flex-wrap mb-6 gap-2'>
              <a
                href='tel:+79002689360'
                className='flex items-center text-black text-lg px-4 font-medium'
              >
                8 (900) 268-93-60{' '}
                <img
                  src={require('../../../images/component_img/Header/ico/whatsapp.ico')}
                  alt=''
                  className='w-[16px] ml-2 animate-fade animate-once animate-duration-[2000ms] animate-delay-[1ms] animate-ease-in-out animate-alternate '
                />
              </a>
              <a
                href='tel:+79002689360'
                className='flex items-center text-black text-lg font-medium'
              >
                8 (800) 200-84-65{' '}
                <img
                  src={require('../../../images/component_img/Header/ico/whatsapp.ico')}
                  alt=''
                  className='w-[16px] ml-2 animate-fade animate-once animate-duration-[2000ms] animate-delay-[1ms] animate-ease-in-out animate-alternate'
                />
              </a>
            </div>
          </div>

          <ShopCardHeader />
        </div>
      </div>
    </div>
  )
}
