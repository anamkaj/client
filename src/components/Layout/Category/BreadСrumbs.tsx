import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useCramsArray } from './hook/crumb.Array'

type CrumbsProp = {
  id: number | undefined
}

export const BreadCrumbs = ({ id }: CrumbsProp) => {
  const { linkCrumb } = useCramsArray(id)

  return (
    <>
      <div>
        <span>
          {' '}
          {id &&
            linkCrumb
              .sort((a, b) => a.id - b.id)
              .map((d) => {
                return (
                  <Link
                    state={{ id: d.id, slug: d.slug }}
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
