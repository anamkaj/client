import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { Person } from '../../type.form'

type InputName = {
  register: UseFormRegister<Person>
  errors: FieldErrors<Person>
}

const nameReg = /^[А-ЯЁ]+$/i

export const NameInput = ({ register, errors }: InputName) => {
  return (
    <div>
      <input
        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
        placeholder='Имя'
        {...register('name', {
          required: true,
          pattern: nameReg,
          maxLength: 15,
          minLength: 3,
        })}
      />
      {errors.name?.type == 'pattern' && (
        <p className=' text-red-500 font-extralight text-sm'>
          Используйте только буквы, без пробелов
        </p>
      )}
      {errors.name?.type == 'maxLength' && (
        <p className=' text-red-500 font-extralight text-sm'>
          Превышена максимальная длина{' '}
        </p>
      )}
      {errors.name?.type == 'minLength' && (
        <p className=' text-red-500 font-extralight text-sm'>
          Слишком коротко{' '}
        </p>
      )}
    </div>
  )
}
