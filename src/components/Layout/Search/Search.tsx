import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useSearch } from '../Header/hook/get.search.product'
import { ScrollList } from './ScrollList'
import { MdClear } from 'react-icons/md'

type InputProp = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  active: boolean
}

export const Search = ({ setActive, active }: InputProp) => {
  const [input, setInput] = useState<string>()
  const { product, isError, category } = useSearch(input)
  return (
    <div className=' text-lg bg-transparent w-[150vh]  lg:w-10/12 text-gray-800 mt-8'>
      <div
        onClick={() => setActive(true)}
        className={
          !active
            ? ' flex items-center justify-end border-b border-slate-200 hover:border-slate-400 hover:border-b-1'
            : ' flex items-center justify-end '
        }
      >
        <input
          value={input || ''}
          onChange={(e) => setInput(e.target.value)}
          className=' z-10 relative  bg-white w-full rounded-lg border-none py-2 mr-3 px-2 leading-tight focus:outline-none '
          type='text'
          maxLength={30}
          minLength={5}
          placeholder={!active ? 'Поиск по товарам' : 'Введите запрос'}
        />

        <div className=' absolute mr-8 '>
          <div className=' flex gap-4'>
            {active && (
              <MdClear
                onClick={() => setInput('')}
                className=' cursor-pointer h-5 w-5 '
              />
            )}
            <BsSearch type='submit' className=' cursor-pointer h-5 w-5 ' />
          </div>
        </div>
      </div>
      <ScrollList
        isError={isError}
        data={product}
        category={category}
        active={active}
        input={input}
      />
    </div>
  )
}
