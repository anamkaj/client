import React, { useState, useEffect } from 'react'
import { Search } from '../Search/Search'
import ShopCardHeader from './CardHeader/ShopCardHeader'
import { useLocation } from 'react-router-dom'
import { useGetNullCategory } from './hook/get.category.null'
import { CatalogMenu } from './CatalogMenu'

export const SubHeader = () => {
  const location = useLocation()
  const [active, setActive] = useState(false)
  const [catalog, setCatalog] = useState(false)
  const { data } = useGetNullCategory()

  useEffect(() => {
    setActive(false)
    setCatalog(false)
  }, [location.key])

  return (
    <div>
      <div className=' grid grid-cols-[1fr_minmax(0px,1000px)_1fr] items-end gap-4'>
        <button
          disabled={active}
          onMouseEnter={() => setCatalog(true)}
          className=' z-10 uppercase  rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555]  py-2 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50 focus:outline-none'
        >
          Каталог
        </button>

        {catalog && (
          <CatalogMenu setCatalog={setCatalog} catalog={catalog} data={data} />
        )}

        {active && (
          <div
            onMouseEnter={active ? () => setCatalog(false) : Boolean}
            onClick={() => setActive(false)}
            className='fixed top-0 opacity-30 left-0 min-h-full min-w-full bg-gray-800'
          ></div>
        )}
        <Search setActive={setActive} active={active} />
        <ShopCardHeader />
      </div>
    </div>
  )
}
