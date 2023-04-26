import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { Person } from '../../type.form'

type InputName = {
  register: UseFormRegister<Person>
  errors: FieldErrors<Person>
}

const mobilePhoneRegexp = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/

export const PhoneInput = ({ register, errors }: InputName) => {
  return (
    <div>
      <input
        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
        {...register('phone', {
          required: true,
          pattern: mobilePhoneRegexp,
        })}
        placeholder='Телефон'
        type='number'
      />
      {errors.phone?.type == 'pattern' && (
        <p className=' text-red-500 font-extralight text-sm'>
          Проверьте правильность ввода номера
        </p>
      )}
    </div>
  )
}
