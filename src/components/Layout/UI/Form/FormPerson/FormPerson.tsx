import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Person } from '../type.form'
import { NameInput } from './Input/NameInput'
import { PhoneInput } from './Input/PhoneInput'
import { EmailInput } from './Input/EmailInput'

type PropForm = {
  status: boolean
}

export const FormPerson = ({ status }: PropForm) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Person>()

  const onSubmit: SubmitHandler<Person> = (data: Person) => {
    console.log(data)
    reset()
  }

  return (
    <div className='  mt-4'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=' flex flex-col gap-2'>
          <NameInput register={register} errors={errors} />
          <PhoneInput register={register} errors={errors} />
          {!status && <EmailInput register={register} errors={errors} />}
          <button className=' w-full border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'>
            Отправить
          </button>
        </div>
        {isSubmitSuccessful && <p>Форма успешно отправленна </p>}
      </form>
    </div>
  )
}
