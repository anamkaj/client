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
        className='fixed min-h-full min-w-full top-0 left-0 bg-black opacity-5'
      ></div>
      <div className=' absolute lg:fixed' hidden={!catalog}>
        <div className=' absolute lg:fixed'>
          <ListMenu />
        </div>
      </div>
    </>
  )
}
