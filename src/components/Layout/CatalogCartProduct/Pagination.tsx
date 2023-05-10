import React, { Dispatch, SetStateAction } from 'react'
import { changePageCount } from '../../../store/NanoStore/CatalogStore/header.filter.state'

type Prop = {
  checkLength: boolean
  nextPage: () => void
}

export const Pagination = ({ checkLength, nextPage }: Prop) => {
  const handleChange = () => {
    changePageCount()
    // nextPage()
  }
  return (
    <div className=' flex items-center justify-center'>
      {checkLength && (
        <button
          onClick={() => handleChange()}
          className='w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
        >
          Показать ещё
        </button>
      )}
    </div>
  )
}
