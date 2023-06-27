import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useSearch } from '../Header/hook/get.search.product'
import { ScrollList } from './ScrollList'
import { MdClear } from 'react-icons/md'
import { SearchMobile } from './Mobile/SearchMobile'
import { useMediaQuery } from 'react-responsive'

type InputProp = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  active: boolean
  catalog: boolean
}

export const Search = ({ setActive, active, catalog }: InputProp) => {
  const [input, setInput] = useState<string>()
  const { product, isError, category } = useSearch(input)
  const isMobileScreen = useMediaQuery({ query: '(max-width: 480px)' })

  return (
    <>
      {isMobileScreen ? (
        <SearchMobile
          setInput={setInput}
          isError={isError}
          data={product}
          category={category}
          input={input}
        />
      ) : (
        <div className=' relative w-[70%]'>
          <div className=' flex items-center '>
            <input
              value={input || ''}
              onClick={() => setActive(true)}
              onChange={(e) => setInput(e.target.value)}
              className=' bg-white rounded-lg border-2 border-slate-50 hover:border-slate-300 py-2 px-2 leading-tight focus:outline-none font-thin w-full text-lg z-20 '
              type='text'
              maxLength={30}
              minLength={5}
              placeholder={!active ? 'Поиск по товарам' : 'Введите запрос'}
            />
            <div className='relative ' hidden={isMobileScreen}>
              <div className='z-20 absolute right-8 top-[-10px] '>
                {active && (
                  <MdClear
                    onClick={() => setInput('')}
                    className=' cursor-pointer h-5 w-5 '
                  />
                )}
                {!active && (
                  <BsSearch
                    type='submit'
                    className=' cursor-pointer h-5 w-5 '
                  />
                )}
              </div>
            </div>
          </div>

          <ScrollList
            setActive={setActive}
            isError={isError}
            data={product}
            category={category}
            active={active}
            input={input}
          />
        </div>
      )}
      {/* Темный фон для поиска */}
      {active && (
        <div
          onClick={() => setActive(false)}
          className='z-10 fixed top-0 opacity-30 left-0 min-h-full min-w-full bg-gray-800'
        ></div>
      )}
    </>
  )
}
