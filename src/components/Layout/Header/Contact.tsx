import React from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'

export const Contact = () => {
  return (
    <>
      <div>
        <div className='flex items-center mobile:flex-wrap '>
          {/* <div className=' flex flex-col'>
            <p className=' uppercase  text-xs'>Звонок бесплатный </p>
          </div> */}
          <div className=' flex gap-4 lg:flex-col lg:gap-0'>
            <div>
              <a
                href='tel:+79002689360'
                className='flex  items-center gap-2 text-black text-normal font-medium xl:whitespace-nowrap'
              >
                8 (861) 298-34-28
              </a>
            </div>
            <div>
              <a
                href='tel:+79002689360'
                className='flex items-center gap-2 text-black text-normal font-medium xl:whitespace-nowrap'
              >
                8 (900) 268-93-60
                <AiOutlineWhatsApp className=' text-green-500 h-5 w-5' />
                <span className='font-thin lg:hidden'> Звонок бесплатный!</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
