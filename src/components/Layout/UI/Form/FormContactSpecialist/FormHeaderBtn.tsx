import React from 'react'
import { useForm } from 'react-hook-form'
import { Person } from '../type.form'
import { useFormHeaderBtn } from './form.btn.header.query.hook'
import { useClosePopupAll } from '../FormOrderOneProduct/close.allPopup'
import { NameInput } from '../InputForm/Input/NameInput'
import { PhoneInput } from '../InputForm/Input/PhoneInput'
import { EmailInput } from '../InputForm/Input/EmailInput'

type PropForm = {
  setSpecialist?: React.Dispatch<React.SetStateAction<boolean>>
  
}

export const FormHeaderBtn = ({ setSpecialist }: PropForm) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Person>()

  const { onSubmitFormContact, mutation } = useFormHeaderBtn()

  // Автозакрытие всех popup через 2 сек
  useClosePopupAll({
    mutation,
    setSpecialist,
    reset,
  })

  return (
    <div className='  mt-4'>
      <div>
        <form onSubmit={handleSubmit(onSubmitFormContact)}>
          <div className=' flex flex-col gap-2'>
            <NameInput register={register} errors={errors} />
            <PhoneInput register={register} errors={errors} />
            <EmailInput register={register} errors={errors} />
            <button className=' w-full border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'>
              Отправить
            </button>
          </div>
        </form>
      </div>
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
