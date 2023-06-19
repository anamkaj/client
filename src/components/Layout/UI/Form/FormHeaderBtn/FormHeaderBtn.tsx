import React from 'react'

import { useForm } from 'react-hook-form'
import { Person } from '../type.form'
import { AllInput } from '../InputForm/AllInput'
import { useFormHeaderBtn } from './form.btn.header.query.hook'
import { useClosePopupAll } from '../FormPerson/close.allPopup'

type PropForm = {
  setSpecialist?: React.Dispatch<React.SetStateAction<boolean>>
  specialist?: boolean
}

export const FormHeaderBtn = ({ setSpecialist, specialist }: PropForm) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Person>()

  const { onSubmitOneProduct, mutation } = useFormHeaderBtn()

  // Автозакрытие всех popup через 2 сек
  useClosePopupAll({
    mutation,
    setSpecialist,
    reset,
  })

  return (
    <div className='  mt-4'>
      <AllInput
        handleSubmit={handleSubmit}
        onSubmit={onSubmitOneProduct}
        register={register}
        errors={errors}
        specialist={specialist}
      />
      {mutation.isIdle && ''}

      {mutation.isSuccess && (
        <p className=' font-light text-sm mt-3 text-center'>
          Форма успешно отправленна.{' '}
        </p>
      )}

      {mutation.isError && (
        <p className=' font-light text-sm mt-3 text-center'>
          Ошибка отправки на сервер , уже чиним!{' '}
        </p>
      )}

      <p className=' font-extralight text-xs break-before-all mt-4'>
        Нажимая кнопку «Отправить», я соглашаюсь на получение информации от
        <br />
        интернет-магазина и уведомлений о состоянии моих заказов,
        <br /> а также принимаю условия политики конфиденциальности <br /> и
        пользовательского соглашения .
      </p>
    </div>
  )
}
