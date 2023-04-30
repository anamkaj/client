import React from 'react'
import { IGProduct } from '../../../../helpers/model/model.products'

type PropParamProduct = {
  product: IGProduct[]
}

export const TableParamsProduct = ({ product }: PropParamProduct) => {
  return (
    <div>
      <div className=''>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full text-left text-sm font-light mt-4 '>
                <tbody>
                  <>
                    {product[0].paramsProduct.map((x, index) => {
                      return (
                        <tr key={index} className=' hover:bg-gray-100 '>
                          <th className=' text-sm font-light  border-b border-neutral-300 items-center whitespace-nowrap px-6  '>
                            {Object.keys(x)}
                          </th>
                          <td className=' text-sm font-light border-b border-neutral-300 px-6  '>
                            {Object.values(x)}
                          </td>
                        </tr>
                      )
                    })}
                  </>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
