import React from 'react'
import { IGProduct } from '../../../../helpers/Model/GetServer/model.products'

type IProductProps = {
  data: IGProduct
}

export const ShortCharacteristics = ({ data }: IProductProps) => {
  const paramShort =
    data.shortParam.length > 9 ? data.shortParam.slice(0, 9) : data.shortParam
  return (
    <div className=' ml-4'>
      <ul>
        {paramShort.map((e, i) => {
          return (
            <li key={i}>
              <span className=' font-sens text-sm text-gray-400'>
                {Object.keys(e)}
              </span>
              <span className=' font-sens text-sm text-gray-400'>{' : '}</span>
              <span className=' font-light text-sm '>
                {Object.values(e).toString().length > 30
                  ? Object.values(e).toString().slice(0, 30) + '...'
                  : Object.values(e)}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
