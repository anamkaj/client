import React, { useState } from 'react'
import { useForm, useController } from 'react-hook-form'
import { Person } from '../type.form'
import { IGProduct } from '../../../../../helpers/Model/GetServer/model.products'
import { useFormRequest } from '../hook/form.person.query.hook'
import { AllInput } from '../InputForm/AllInput'
import { useClosePopupAll } from './close.allPopup'

type PropForm = {
  status?: boolean
  product?: IGProduct[]
  setFastOrderModel?: React.Dispatch<React.SetStateAction<boolean>>
  price?: number
  setSpecialist?: React.Dispatch<React.SetStateAction<boolean>>
  specialist?: boolean
}

export const FormPerson = ({
  status,
  product,
  setFastOrderModel,
  setSpecialist,
  price,
  specialist,
}: PropForm) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    
  } = useForm<Person>()

  //Отправка форм обратной связи на сервер
  const { mutation, onSubmitFastOrder } = useFormRequest({ product, price })
  
  // Автозакрытие всех popup через 2 сек
  useClosePopupAll({
    mutation,
    setFastOrderModel,
    setSpecialist,
    reset,
  })

  return (
    <div className='  mt-4'>
      <AllInput
        handleSubmit={handleSubmit}
        onSubmit={onSubmitFastOrder}
        register={register}
        errors={errors}
        status={status}
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
