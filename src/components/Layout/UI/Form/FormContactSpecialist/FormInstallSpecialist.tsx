import React from 'react'
import { useForm } from 'react-hook-form'
import { useClosePopupAll } from '../FormOrderOneProduct/close.allPopup'
import { CheckBox } from '../InputForm/CheckBox/CheckBox'
import { EmailInput } from '../InputForm/Input/EmailInput'
import { NameInput } from '../InputForm/Input/NameInput'
import { PhoneInput } from '../InputForm/Input/PhoneInput'
import { Person } from '../type.form'
import { useFormHeaderBtn } from './form.btn.header.query.hook'
import { AgreementForm } from '../AgreementForm'
import { useGoalYandexMetrika } from '../../../../../helpers/hook/goal.metrika'

type PropForm = {
  setSpecialist?: React.Dispatch<React.SetStateAction<boolean>>
}

// Форма запроса выезда специалиста , кнопка в хедере "Монтаж и Установка"

export const FormInstallSpecialist = ({ setSpecialist }: PropForm) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Person>()

  const { onSubmitFormContact, mutation } = useFormHeaderBtn()
  // Отправка достижения цели в Яндекс метрику
  const { sendGoal } = useGoalYandexMetrika({ isValid, reset })

  // Автозакрытие всех popup через 2 сек
  useClosePopupAll({
    mutation,
    setSpecialist,
  })
  // Форма Монтаж и установка

  return (
    <div className=' mt-4 w-[350px] lg:w-[400px]'>
      <>
        <form onSubmit={handleSubmit(onSubmitFormContact)}>
          <div className=' flex flex-col gap-2'>
            <CheckBox register={register} errors={errors} />
            <NameInput register={register} errors={errors} />
            <PhoneInput register={register} errors={errors} />
            <EmailInput register={register} errors={errors} />
            <button
              disabled={mutation.isSuccess}
              onClick={() => sendGoal('Event_23')}
              className=' w-full border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
            >
              Отправить
            </button>
          </div>
        </form>
      </>
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

      <div>
        <AgreementForm />
      </div>
    </div>
  )
}
