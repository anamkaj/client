import React, { useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { Person } from '../../type.form'

type CheckBox = {
  register: UseFormRegister<Person>
  errors: FieldErrors<Person>
}

export const CheckBox = ({ register, errors }: CheckBox) => {
  return (
    <div>
      <div className='relative flex flex-col items-center rounded-[20px] w-max-content mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500  p-5 pb-8 transition duration-200 linear'>
        <div className='flex gap-4'>
          <div className='mt-3 flex items-center gap-3'>
            <input
              type='checkbox'
              defaultValue={'Обьект в черте города'}
              className='relative h-5 w-10 appearance-none rounded-[20px] bg-[#e0e5f2] outline-none transition duration-[0.5s] 
                    before:absolute before:top-[50%] before:h-4 before:w-4 before:translate-x-[2px] before:translate-y-[-50%] before:rounded-[20px]
                    before:bg-white before:shadow-[0_2px_5px_rgba(0,_0,_0,_.2)] before:transition before:content-[""]
                    checked:before:translate-x-[22px] hover:cursor-pointer checked:bg-slate-500 dark:checked:bg-brand-400'
              {...register('objectCity')}
            />
            <label
              htmlFor='checkbox1'
              className='text-base font-medium text-black'
            >
              Обьект в черте города ?
            </label>
          </div>
          <div className='mt-3 flex items-center gap-3'>
            <input
              type='checkbox'
              defaultValue={'Присутствует интернет'}
              className='relative h-5 w-10 appearance-none rounded-[20px] bg-[#e0e5f2] outline-none transition duration-[0.5s] 
                    before:absolute before:top-[50%] before:h-4 before:w-4 before:translate-x-[2px] before:translate-y-[-50%] before:rounded-[20px]
                    before:bg-white before:shadow-[0_2px_5px_rgba(0,_0,_0,_.2)] before:transition before:content-[""]
                    checked:before:translate-x-[22px] hover:cursor-pointer checked:bg-slate-500 dark:checked:bg-brand-400'
              {...register('internetTrue')}
            />
            <label
              htmlFor='checkbox1'
              className='text-base font-medium text-black'
            >
              Присутствует интернет ?
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
