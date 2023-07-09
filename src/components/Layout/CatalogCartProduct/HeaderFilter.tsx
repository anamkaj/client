import React, { useState, useEffect } from 'react'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { BsFillGrid3X2GapFill } from 'react-icons/bs'
import { selectValue } from './helper/filter.header'
import { HiAdjustmentsVertical } from 'react-icons/hi2'
import { changeGrid } from '../../../store/NanoStore/CatalogStore/grid.store'
import { useFilterChange } from './hook/header.filter'
import { BiFilterAlt } from 'react-icons/bi'

type FilterProp = {
  isMobileScreen: boolean
}

export const HeaderFilter = ({ isMobileScreen }: FilterProp) => {
  const { handleChange, select } = useFilterChange()

  return (
    <div className='flex justify-between p-2'>
      <div className=' flex gap-4'>
        {!isMobileScreen && <HiAdjustmentsVertical className=' w-7 h-7' />}

        <select
          value={select}
          onChange={(e) => handleChange(e.target.value)}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
        + focus:ring-blue-500 focus:border-gray-500 block w-[200px] p-1 font-light to-blue-400 outline-none mb-2'
        >
          {selectValue.map((item) => {
            return (
              <option key={item.id} value={item.sort}>
                {item.name}
              </option>
            )
          })}
        </select>
      </div>
      {isMobileScreen && <BiFilterAlt className=' w-7 h-7 cursor-pointer' />}
      {!isMobileScreen && (
        <div className='flex gap-3'>
          <button onClick={() => changeGrid(true)}>
            <BsFillGrid3X3GapFill className='h-5 w-5' />
          </button>
          <button onClick={() => changeGrid(false)}>
            <BsFillGrid3X2GapFill className='h-5 w-5 ' />
          </button>
        </div>
      )}
    </div>
  )
}
