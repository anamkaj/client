import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { Person } from '../../type.form'

type InputName = {
  register: UseFormRegister<Person>
  errors: FieldErrors<Person>
}
const emailReg = /^\S+@\S+\.\S+$/

export const EmailInput = ({ register, errors }: InputName) => {
  return (
    <div>
      <input
        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
        placeholder='Почта'
        {...register('email', {
          required: false,
          pattern: emailReg,
        })}
      />
      {errors.email?.type == 'pattern' && (
        <p className=' text-red-500 font-extralight text-sm'>
          Проверьте адрес электронной почты
        </p>
      )}
    </div>
  )
}
