import React, { useState } from 'react'
import { FormPerson } from '../../Form/FormPerson/FormPerson'

export const FormFastOrder = () => {
  const [status, setStatus] = useState(true)

  return (
    <>
      <div className=' w-full'>
        <p className=' font-bold text-center text-xl'>Данные покупателя</p>
        <div className=' flex justify-between items-center'>
          <label className='flex items-center justify-between gap-2'>
            <input
              onClick={() => setStatus(true)}
              defaultChecked
              name='radio-1'
              type='radio'
              defaultValue='Физическое Лицо'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 '
            />
            Физическое Лицо
          </label>
          <label className='flex items-center justify-between gap-2'>
            <input
              onClick={() => setStatus(false)}
              name='radio-1'
              type='radio'
              defaultValue='Юридическое Лицо'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 '
            />
            Юридическое Лицо
          </label>
        </div>
        <FormPerson status={status} />
      </div>
    </>
  )
}
