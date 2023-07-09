import React from 'react'
import { ICategory } from '../../../helpers/Model/GetServer/query.category.model'
import ReactMarkdown from 'react-markdown'

type Props = {
  category: ICategory[] | undefined
  id: string | undefined
}

export const Description = ({ category, id }: Props) => {
  return (
    <div className=' mt-5 mb-8 p-2'>
      <h2 className=' font-normal text-xs lg:text-sm'>
        {category?.map((e) => {
          if (e.id == Number(id))
            return (
              <div key={e.id}>
                <ReactMarkdown>{e.description}</ReactMarkdown>
              </div>
            )
        })}
      </h2>
    </div>
  )
}
