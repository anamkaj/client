import React from 'react'
import { useForm } from 'react-hook-form'
import { Person } from '../type.form'
import { useFormHeaderBtn } from './form.btn.header.query.hook'
import { useClosePopupAll } from '../FormOrderOneProduct/close.allPopup'
import { NameInput } from '../InputForm/Input/NameInput'
import { PhoneInput } from '../InputForm/Input/PhoneInput'
import { EmailInput } from '../InputForm/Input/EmailInput'
import { AgreementForm } from '../AgreementForm'
import { useGoalYandexMetrika } from '../../../../../helpers/hook/goal.metrika'

type PropForm = {
  setSpecialist?: React.Dispatch<React.SetStateAction<boolean>>
}
// Форма запроса выезда специалиста , кнопка в хедере "Заказать обратный звонок"

export const FormHeaderBtn = ({ setSpecialist }: PropForm) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Person>()

  const { onSubmitFormContact, mutation } = useFormHeaderBtn()
  const { sendGoal } = useGoalYandexMetrika({ isValid, reset })

  // Автозакрытие всех popup через 2 сек
  useClosePopupAll({
    mutation,
    setSpecialist,
  })

  return (
    <div className=' mt-4 w-[350px] lg:w-[400px]'>
      <div>
        <form onSubmit={handleSubmit(onSubmitFormContact)}>
          <div className=' flex flex-col gap-2'>
            <NameInput register={register} errors={errors} />
            <PhoneInput register={register} errors={errors} />
            <EmailInput register={register} errors={errors} />
            <button
              disabled={mutation.isSuccess}
              onClick={() => sendGoal('Event_22')}
              className=' w-full border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
            >
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

      <div>
        <AgreementForm />
      </div>
    </div>
  )
}
