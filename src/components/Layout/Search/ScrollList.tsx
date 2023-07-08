import React, { useEffect, useState } from 'react'
import { IGProduct } from '../../../helpers/Model/GetServer/model.products'
import { useValidateScroll } from './validate'
import { ICategory } from '../../../helpers/Model/GetServer/query.category.model'
import { ProductSearchList } from './ProductSearchList'
import { CategoryList } from './CategoryList'
import { BsArrowLeftCircle } from 'react-icons/bs'

type ScrollProp = {
  data: IGProduct[] | undefined
  active: boolean
  input: string | undefined
  isError: boolean
  category: ICategory[] | undefined
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const ScrollList = ({
  data,
  active,
  isError,
  input,
  category,
  setActive,
}: ScrollProp) => {
  const [hiddenScroll, setHiddenScroll] = useState(true)
  useValidateScroll({ data, input, setHiddenScroll, active })

  return (
    <div hidden={hiddenScroll}>
      <div className='absolute z-20 flex bg-white p-2 rounded-b-xl  mt-1 w-full'>
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
