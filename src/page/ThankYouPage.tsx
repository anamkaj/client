import React, { useEffect } from 'react'

import { FcOk } from 'react-icons/fc'

export const ThankYouPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className=' mx-auto container'>
      <div className=' mt-8 flex flex-col items-center gap-4 bg-gradient-to-r from-gray-50 to-gray-50 shadow-md rounded-lg'>
        <FcOk className=' w-[200px] h-[200px] mt-10' />
        <div>
          <p className=' font-bold text-3xl'>Спасибо за заявку! </p>
        </div>
        <div className=' text-center'>
          <h2 className=' font-thin text-2xl'>
            Ценим ваше время, поэтому работает качественно и быстро.
          </h2>
          <h2 className=' font-semibold text-2xl mt-[40px] mb-[100px]'>
            Спасибо, что выбрали именно нас.
          </h2>
        </div>
      </div>
    </div>
  )
}
