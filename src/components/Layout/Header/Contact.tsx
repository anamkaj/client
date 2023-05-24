import React from 'react'

export const Contact = () => {
  return (
    <div>
      <div className=''>
        <div className='flex items-center flex-col flex-wrap '>
          {/* <div className=' flex flex-col'>
            <p className=' uppercase  text-xs'>Звонок бесплатный </p>
          </div> */}
          <div className=' flex flex-col'>
            <a
              href='tel:+79002689360'
              className='flex  items-center text-black text-normal font-medium'
            >
              8 (800) 200-84-65
              <img
                src={require('../../../images/component_img/Header/ico/whatsapp.ico')}
                alt=''
                className='w-[16px] ml-2 animate-fade animate-once animate-duration-[2000ms] animate-delay-[1ms] animate-ease-in-out animate-alternate '
              />
            </a>
            <a
              href='tel:+79002689360'
              className='flex items-center text-black text-normal font-medium'
            >
              8 (900) 268-93-60
              <img
                src={require('../../../images/component_img/Header/ico/whatsapp.ico')}
                alt=''
                className='w-[16px] ml-2 animate-fade animate-once animate-duration-[2000ms] animate-delay-[1ms] animate-ease-in-out animate-alternate'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
