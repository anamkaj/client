import React, { useState, useEffect } from 'react'

import { useStore } from '@nanostores/react'
import { catStore } from '../../../store/NanoStore/CategoryStore/category.store'
import { Link } from 'react-router-dom'
import { catCrams } from './helper/crumb.Array'

type TProp = {
  id: number | undefined
}

export const BreadCrumbs = ({ id }: TProp) => {
  const catObj = useStore(catStore)

  return (
    <>
      <div>
        <span>
          {' '}
          {id &&
            catCrams(catObj, id)
              .sort((a, b) => a.id - b.id)
              .map((d) => {
                return (
                  <Link
                    to={`/category/${d.slug}/${d.id}`}
                    className=' font-medium text-sm text-gray-500 hover:text-gray-800 hover:underline'
                    key={d.id}
                  >
                    {d.name + ' / '}
                  </Link>
                )
              })}
        </span>
      </div>
    </>
  )
}
