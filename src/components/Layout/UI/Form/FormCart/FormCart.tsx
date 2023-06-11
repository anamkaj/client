import * as React from 'react'
import { Checkbox } from './Checkbox'
import { useForm } from 'react-hook-form'
import { IFormCartPage } from '../type.form'
import { NameInput } from '../InputForm/Input/NameInput'
import { SurnameInput } from '../InputForm/Input/SurnameInput'
import { PhoneInput } from '../InputForm/Input/PhoneInput'
import { useClosePopupAll } from '../FormPerson/close.allPopup'
import { useFormCartPage } from '../hook/form.cart.page'

export const FormCart = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormCartPage>()
  const { onSubmitOrderCart } = useFormCartPage()

  return (
    <div className=' flex flex-col bg-white md:mt-0'>
      <div>
        <h2 className='uppercase text-black font-bold mb-5'>
          Контакты для связи
        </h2>
        <p>Укажите Ваши контактные данные</p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmitOrderCart)}
          className='relative  mt-6 space-y-4'
        >
          <div className='relative'>
            <label className='absolute px-2 ml-2 -mt-3 font-light text-gray-600 bg-white'>
              Имя <span className={'text-sm'}>*</span>
            </label>
            <NameInput register={register} errors={errors} />
          </div>
          <div className='relative'>
            <label className='absolute px-2 ml-2 -mt-3 font-light text-gray-600 bg-white'>
              Фамилия
            </label>
            <SurnameInput register={register} errors={errors} />
          </div>
          <div className='relative'>
            <label className='absolute px-2 ml-2 -mt-3 font-light text-gray-600 bg-white'>
              Телефон <span className={'text-sm'}>*</span>
            </label>
            <PhoneInput register={register} errors={errors} />
          </div>

          <div>
            <Checkbox />
          </div>
        </form>
      </div>
    </div>
  )
}
