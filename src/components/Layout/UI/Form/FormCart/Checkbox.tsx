import React from 'react'

export const Checkbox = () => {
  return (
    <>
      <div className='flex'>
        <div>
          <div className='form-check'>
            <input
              className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-500 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
              type='checkbox'
              value=''
              id='flexCheckDefault'
            />
            <label
              className='form-check-label inline-block text-gray-800 text-sm uppercase'
              htmlFor='flexCheckDefault'
            >
              Требуется Монтаж
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
