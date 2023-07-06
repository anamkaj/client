import React from 'react'
import { IGProduct } from '../../../../../helpers/Model/GetServer/model.products'
import { motion } from 'framer-motion'
import { variants, variantsTableParams } from '../../../UI/animation/category'

type PropParamProduct = {
  product: IGProduct[]
}

export const TableParamsProduct = ({ product }: PropParamProduct) => {
  return (
    <table className='min-w-full text-left text-sm font-light mt-4 '>
      <motion.tbody initial='hidden' animate='visible' variants={variants}>
        {product[0].paramsProduct.map((x, index) => {
          return (
            <motion.tr
              custom={index}
              variants={variantsTableParams}
              key={index}
              className=' hover:bg-gray-100 '
            >
              <th className=' text-sm font-light  border-b border-neutral-300 items-center whitespace-nowrap mobile:whitespace-normal'>
                {Object.keys(x)}
              </th>
              <td className=' text-sm font-light border-b border-neutral-300 mobile:whitespace-normal '>
                {Object.values(x)}
              </td>
            </motion.tr>
          )
        })}
      </motion.tbody>
    </table>
  )
}
