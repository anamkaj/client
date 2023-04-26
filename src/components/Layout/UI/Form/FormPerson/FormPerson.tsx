import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Person } from '../type.form'
import { NameInput } from './Input/NameInput'
import { PhoneInput } from './Input/PhoneInput'
import { EmailInput } from './Input/EmailInput'
import { IGProduct } from '../../../../../helpers/model/model.products'
import { useFormRequest } from '../hook/form.query.hook'

type PropForm = {
  status: boolean
  product: IGProduct[]
}

export const FormPerson = ({ status, product }: PropForm) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Person>()

  const price = Math.round(product[0].price / (product[0].discount * 0.11))
  const { mutation, onSubmit } = useFormRequest({ product, reset, price })

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
        {mutation.data?.data === true ? (
          <p>Форма успешно отправленна </p>
        ) : (
          <p>Ошибка отправки формы </p>
        )}
      </form>
    </div>
  )
}
