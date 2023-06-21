import React from 'react'
import { IGProduct } from '../../../../../helpers/Model/GetServer/model.products'
import { motion } from 'framer-motion'
import {
  variants,
  variants1,
  variantsTableParams,
} from '../../../UI/animation/category'

type PropParamProduct = {
  product: IGProduct[]
}

export const TableParamsProduct = ({ product }: PropParamProduct) => {
  return (
    <div>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table className='min-w-full text-left text-sm font-light mt-4 '>
              <motion.tbody
                initial='hidden'
                animate='visible'
                variants={variants}
              >
                {product[0].paramsProduct.map((x, index) => {
                  return (
                    <motion.tr
                      custom={index}
                      variants={variantsTableParams}
                      key={index}
                      className=' hover:bg-gray-100 '
                    >
                      <th className=' text-sm font-light  border-b border-neutral-300 items-center whitespace-nowrap px-6  '>
                        {Object.keys(x)}
                      </th>
                      <td className=' text-sm font-light border-b border-neutral-300 px-6  '>
                        {Object.values(x)}
                      </td>
                    </motion.tr>
                  )
                })}
              </motion.tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
