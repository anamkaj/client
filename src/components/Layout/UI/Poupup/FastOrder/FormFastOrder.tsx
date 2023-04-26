import React, { useState } from 'react'
import { FormPerson } from '../../Form/FormPerson/FormPerson'
import { IGProduct } from '../../../../../helpers/model/model.products'

type PropProduct = {
  product: IGProduct[]
}

export const FormFastOrder = ({ product }: PropProduct) => {
  const [status, setStatus] = useState(true)

  return (
    <>
      <div className=' mb-4'>
        <p className=' font-bold text-center text-xl mt-4'>Данные покупателя</p>
        <div className=' flex justify-between items-center mt-4 gap-4'>
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
        <FormPerson status={status} product={product} />
      </div>
    </>
  )
}
