import React from 'react'
import { ICategory } from '../../../helpers/Model/GetServer/query.category.model'

type Props = {
  category: ICategory[] | undefined
  id: string | undefined
}

export const Description = ({ category, id }: Props) => {
  return (
    <div className=' mt-5 mb-5'>
      <h2 className=' font-normal'>
        {category?.map((e) => {
          if (e.id == Number(id)) return e.description
        })}
      </h2>
    </div>
  )
}
