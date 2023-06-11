import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { IFormCartPage } from '../../type.form'
import { nameReg } from './NameInput'

type InputSurname = {
  register: UseFormRegister<IFormCartPage>
  errors: FieldErrors<IFormCartPage>
}

export const SurnameInput = ({ register, errors }: InputSurname) => {
  return (
    <div>
      <input
        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
        placeholder='Фамилия'
        {...register('surname', {
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
