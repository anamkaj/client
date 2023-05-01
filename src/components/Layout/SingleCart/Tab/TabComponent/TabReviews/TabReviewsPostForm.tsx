import React from 'react'
import { BsExclamationCircle } from 'react-icons/bs'
import { useForm } from 'react-hook-form'
import { SendReviews } from '../../../../../../helpers/Model/PostServer/post.req.reviews'
import { IGProduct } from '../../../../../../helpers/Model/GetServer/model.products'
import { TextArea } from './TextArea'
import { usePostReviewsToServer } from '../../../hook/post.reviews'

// Поле добавление отзыва

type PropsReviewsComment = {
  product: IGProduct[]
}

export const TabReviewsPostForm = ({ product }: PropsReviewsComment) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SendReviews>()

  const { id } = product[0]
  const { onSubmit, mutation } = usePostReviewsToServer({ id, reset })

  return (
    <div className='flex flex-col  justify-center shadow-lg mt-5  mb-6 w-1/2'>
      <div className=' flex justify-between px-4 pt-3 pb-2 text-gray-800 text-lg'>
        <h2>Добавить комментарий</h2>
        <h2 className=' font-light text-sm'>
          {product[0].countReviews} комментариев
        </h2>
      </div>
      <div>
        <h2 className=' font-light text-lg px-4'>{product[0].title}</h2>
      </div>
      <form
        className='w-full  bg-white rounded-lg px-4 pt-2'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex flex-wrap -mx-3 mb-6'>
          <TextArea register={register} errors={errors} reset={reset} />
          <div className='w-full md:w-full flex items-start  px-3'>
            <div className='flex items-start w-1/2 text-gray-700 px-2 mr-auto'>
              <BsExclamationCircle className=' mr-2' />
              <p className=' text-xs pt-px font-extralight'>
                Нажимая кнопку «Отправить»,
                <br /> Вы соглашаетесь c условиями политики конфиденциальности.
              </p>
            </div>
            <button
              className='bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100'
              onClick={() => onSubmit}
            >
              Добавить отзыв
            </button>
          </div>
        </div>
      </form>
      <div className=' mt-2 mb-4 transition ease-in-out delay-150 '>
        {mutation.isIdle && ''}

        {mutation.data?.data == true && (
          <p className=' font-light text-sm  text-center text-green-400'>
            Форма успешно отправленна.{' '}
          </p>
        )}

        {mutation.isError && (
          <p className='  font-light text-sm  text-center text-red-500'>
            Ошибка отправки на сервер , уже чиним!{' '}
          </p>
        )}
      </div>
    </div>
  )
}
