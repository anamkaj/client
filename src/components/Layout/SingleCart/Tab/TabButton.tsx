import React from 'react'
import { HiChevronRight } from 'react-icons/hi2'
import { Scrollchor } from 'react-scrollchor'

type IProps = {
  setActiveTab: React.Dispatch<React.SetStateAction<number>>
}

export const CharacteristicsBtn = ({ setActiveTab }: IProps) => {
  return (
    <div>
      <Scrollchor to={''}>
        <button
          className={
            ' text-gray-600 border-t-2  text-sm font-bold p-4 rounded-l-lg bg-white shadow-indigo-100 shadow-md hover:shadow-indigo-300 hover:scale-101 duration-900'
          }
          onClick={() => setActiveTab(2)}
        >
          Все характеристики
        </button>
      </Scrollchor>
    </div>
  )
}

export const ServicesBtn = ({ setActiveTab }: IProps) => {
  return (
    <div>
      <Scrollchor to={''}>
        <button
          className={
            ' text-gray-600 border-t-2  text-sm font-bold p-4  bg-white shadow-indigo-100 shadow-md hover:shadow-indigo-300 hover:scale-101 duration-800 '
          }
          onClick={() => setActiveTab(4)}
        >
          Все услуги
        </button>
      </Scrollchor>
    </div>
  )
}

export const ReviewsBtn = ({ setActiveTab }: IProps) => {
  return (
    <div>
      <Scrollchor to={''}>
        <button
          className={
            ' text-gray-600 border-t-2 text-sm font-bold p-4 rounded-r-lg bg-white shadow-indigo-100 shadow-md hover:shadow-indigo-300 hover:scale-101 duration-800 '
          }
          onClick={() => setActiveTab(3)}
        >
          Отзывы
        </button>
      </Scrollchor>
    </div>
  )
}

export const DescriptionBtn = ({ setActiveTab }: IProps) => {
  return (
    <div>
      <Scrollchor to={''}>
        <button
          className={
            ' text-gray-600 border-t-2 text-sm font-bold p-4  bg-white shadow-indigo-100 shadow-md hover:shadow-indigo-300 hover:scale-101 duration-800 '
          }
          onClick={() => setActiveTab(1)}
        >
          Описание товара
        </button>
      </Scrollchor>
    </div>
  )
}
