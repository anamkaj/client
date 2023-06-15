import React from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'

export const Contact = () => {
  return (
    <>
      <div>
        <div className='flex items-center flex-col flex-wrap '>
          {/* <div className=' flex flex-col'>
            <p className=' uppercase  text-xs'>Звонок бесплатный </p>
          </div> */}
          <div className=' flex flex-col '>
            <a
              href='tel:+79002689360'
              className='flex  items-center gap-2 text-black text-normal font-medium'
            >
              8 (861) 298-34-28
            </a>
            <a
              href='tel:+79002689360'
              className='flex items-center gap-2 text-black text-normal font-medium'
            >
              8 (900) 268-93-60
              <AiOutlineWhatsApp />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
