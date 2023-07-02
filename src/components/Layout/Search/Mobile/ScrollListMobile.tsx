import React, { useEffect, useState } from 'react'
import { useValidateScroll } from '../validate'
import { IGProduct } from '../../../../helpers/Model/GetServer/model.products'
import { ICategory } from '../../../../helpers/Model/GetServer/query.category.model'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { ProductSearchList } from '../ProductSearchList'
import { CategoryList } from '../CategoryList'
import { useLocation } from 'react-router-dom'

type ScrollProp = {
  data: IGProduct[] | undefined
  active: boolean
  input: string | undefined
  isError: boolean
  category: ICategory[] | undefined
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const ScrollListMobile = ({
  data,
  active,
  isError,
  input,
  category,
  setActive,
}: ScrollProp) => {
  const location = useLocation()
  const [hiddenScroll, setHiddenScroll] = useState(true)
  useValidateScroll({ data, input, setHiddenScroll, active })

  const closeModal = () => {
    setHiddenScroll(true)
    setActive(false)
  }

  useEffect(() => {
    setHiddenScroll(true)
    setActive(false)
  }, [location.key])

  return (
    <div hidden={hiddenScroll}>
      <div className='absolute z-10 flex flex-col gap-4 p-2 bg-white rounded-b-xl left-0 top-14 '>
        {/* кнопка возврата на страницу */}
        <div onClick={() => closeModal()} className=' flex items-center gap-2'>
          <span>
            <BsArrowLeftCircle className=' w-5 h-5 text-slate-500' />
          </span>
          <span>Назад</span>
        </div>
        <div className=' flex flex-col'>
          {!isError ? (
            <div>
              <ProductSearchList data={data} />
              <span className=' font-extralight text-xs'> Группы товаров </span>
              <CategoryList category={category} />
            </div>
          ) : (
            <div className=' flex items-center justify-center'>
              <p className=' font-medium text-2xl'>Товар не найден </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
