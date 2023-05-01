import React from 'react'
import { UseFormRegister, FieldErrors, UseFormReset } from 'react-hook-form'
import { SendReviews } from '../../../../../../helpers/Model/PostServer/post.req.reviews'

type TextArea = {
  register: UseFormRegister<SendReviews>
  errors: FieldErrors<SendReviews>
  reset: UseFormReset<SendReviews>
}
// Валидация комментария 
export const TextArea = ({ register, errors, reset }: TextArea) => {
  const nameReg = /^(?!.*(?:http(s)?:\/\/|[=><&+*#$@])|.*\.(?:png|jpe?g|gif))/
  return (
    <>
      <div className='w-full md:w-full px-3 mb-2 mt-2'>
        <textarea
          className='bg-gray-100 rounded border border-gray-300 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 
              focus:outline-none focus:bg-white'
          {...register('text', {
            required: true,
            pattern: nameReg,
            maxLength: 350,
            minLength: 10,
          })}
          placeholder='Написать комментарий ... '
        ></textarea>
        {errors.text?.type == 'minLength' && (
          <p className=' text-red-500 font-extralight text-sm'>
            Отзыв должен состаять минимум из 10 символов
          </p>
        )}
        {errors.text?.type == 'maxLength' && (
          <p className=' text-red-500 font-extralight text-sm'>
            Максимальная длинна отзыва 350 символов
          </p>
        )}
        {errors.text?.type == 'pattern' && (
          <p className=' text-red-500 font-extralight text-sm'>
            Не используйте спец. символы!
          </p>
        )}
      </div>
    </>
  )
}
