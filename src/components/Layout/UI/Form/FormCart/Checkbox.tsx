import React from 'react'
import { IFormCartPage } from '../type.form'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

type CheckBoxProp = {
  register: UseFormRegister<IFormCartPage>
  errors: FieldErrors<IFormCartPage>
}

export const Checkbox = ({ register, errors }: CheckBoxProp) => {
  return (
    <>
      <div className='mt-3 flex items-center gap-3'>
        <input
          type='checkbox'
          defaultValue={'Требуется монтаж'}
          className='relative h-5 w-10 appearance-none rounded-[20px] bg-[#e0e5f2] outline-none transition duration-[0.5s] 
                    before:absolute before:top-[50%] before:h-4 before:w-4 before:translate-x-[2px] before:translate-y-[-50%] before:rounded-[20px]
                    before:bg-white before:shadow-[0_2px_5px_rgba(0,_0,_0,_.2)] before:transition before:content-[""]
                    checked:before:translate-x-[22px] hover:cursor-pointer checked:bg-slate-500 dark:checked:bg-brand-400'
          {...register('objectCity')}
        />
        <label htmlFor='checkbox1' className='text-base font-medium text-black'>
          Требуется монтаж ?
        </label>
      </div>
    </>
  )
}
