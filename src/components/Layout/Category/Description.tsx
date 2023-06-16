import React from 'react'
import { ICategory } from '../../../helpers/Model/GetServer/query.category.model'
import ReactMarkdown from 'react-markdown'
import { divide } from 'lodash'

type Props = {
  category: ICategory[] | undefined
  id: string | undefined
}

export const Description = ({ category, id }: Props) => {
  return (
    <div className=' mt-5 mb-8'>
      <h2 className=' font-normal'>
        {category?.map((e) => {
          if (e.id == Number(id))
            return (
              <div>
                <ReactMarkdown>{e.description}</ReactMarkdown>
              </div>
            )
        })}
      </h2>
    </div>
  )
}
