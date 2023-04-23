import React, { Dispatch, SetStateAction } from 'react'



type Prop = {
  checkLength: boolean
  nextPage: () => void
}

export const Pagination = ({ checkLength, nextPage }: Prop) => {
  return (
    <div className=' flex items-center justify-center'>
      {checkLength && (
        <button
          onClick={() => nextPage()}
          className='w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
        >
          Показать ещё
        </button>
      )}
    </div>
  )
}
