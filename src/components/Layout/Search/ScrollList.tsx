import React, { useEffect, useState } from 'react'
import { IGProduct } from '../../../helpers/Model/GetServer/model.products'
import { useValidateScroll } from './validate'
import { ICategory } from '../../../helpers/Model/GetServer/query.category.model'
import { ProductSearchList } from './ProductSearchList'
import { CategoryList } from './CategoryList'

type ScrollProp = {
  data: IGProduct[] | undefined
  active: boolean
  input: string | undefined
  isError: boolean
  category: ICategory[] | undefined
}

export const ScrollList = ({
  data,
  active,
  isError,
  input,
  category,
}: ScrollProp) => {
  const [hidden, setHidden] = useState(true)
  useValidateScroll({ data, input, setHidden, active })

  return (
    <div hidden={hidden}>
      <div
        className={
          'absolute w-[88vh] overflow-auto  bg-white p-4 mt-2 rounded-xl '
        }
      >
        <ul className=' flex flex-col'>
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
        </ul>
      </div>
    </div>
  )
}
