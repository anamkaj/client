import React, { useState } from 'react'
import { ICategory } from '../../../helpers/Model/GetServer/query.category.model'
import { ListMenu } from '../MainPage/ListMenu'

type CatalogProp = {
  catalog: boolean
  setCatalog: React.Dispatch<React.SetStateAction<boolean>>
}

export const CatalogMenu = ({ catalog, setCatalog }: CatalogProp) => {
  return (
    <>
      <div
        onMouseEnter={() => setCatalog(false)}
        className='fixed min-h-full min-w-full top-0 left-0'
      ></div>
      <div className=' fixed' hidden={!catalog}>
        <div className='fixed'>
          <ListMenu />
        </div>
      </div>
    </>
  )
}
