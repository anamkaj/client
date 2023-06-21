import * as React from 'react'
import { Checkbox } from './Checkbox'
import { useForm } from 'react-hook-form'
import { IFormCartPage, Person } from '../type.form'
import { NameInput } from '../InputForm/Input/NameInput'
import { PhoneInput } from '../InputForm/Input/PhoneInput'
import { useFormCartPage } from '../hook/form.cart.page'
import { EmailInput } from '../InputForm/Input/EmailInput'

export const FormCart = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Person>()
  const { onSubmitOrderCart, mutation } = useFormCartPage()

  return (
    <div className=' flex flex-col bg-white shadow-md p-4 md:mt-0'>
      <div>
        <h2 className='uppercase text-black font-bold mb-5'>
          Контакты для связи
        </h2>
        <p className=' font-thind '>Укажите Ваши контактные данные</p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmitOrderCart)}
          className='relative  mt-8 space-y-4'
        >
          <div className='relative'>
            <label className='absolute px-2 ml-2 -mt-3 font-light text-gray-600 bg-white text-sm'>
              Обязательное поле <span className={'text-sm'}>*</span>
            </label>
            <NameInput register={register} errors={errors} />
          </div>
          <div className='relative'>
            <label className='absolute px-2 ml-2 -mt-3 font-light text-gray-600 bg-white text-sm'>
              Email
            </label>
            <EmailInput register={register} errors={errors} />
          </div>
          <div className='relative'>
            <label className='absolute px-2 ml-2 -mt-3 font-light text-gray-600 bg-white text-sm'>
              Обязательное поле <span className={'text-sm'}>*</span>
            </label>
            <PhoneInput register={register} errors={errors} />
          </div>

          <div>
            <Checkbox register={register} errors={errors} />
          </div>

          <button className=' w-full border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'>
            Отправить
          </button>

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
        </form>
      </div>
    </div>
  )
}
