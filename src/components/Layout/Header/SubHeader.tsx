import React, { useState, useEffect } from 'react'
import { Search } from '../Search/Search'
import ShopCardHeader from './CardHeader/ShopCardHeader'
import { useLocation } from 'react-router-dom'
import { BsList } from 'react-icons/bs'
import { useMediaQuery } from 'react-responsive'
import { useStateModalWindows } from '../../../helpers/hook/search.windows'
import { ListMenu } from '../MainPage/ListMenu'

export const SubHeader = () => {
  const location = useLocation()
  const { active, setActive } = useStateModalWindows()
  const [catalog, setCatalog] = useState(false)
  const url = location.pathname
  const isMobileScreen = useMediaQuery({ query: '(max-width: 480px)' })
  const isMidScreen = useMediaQuery({ query: '(max-width: 1024px)' })

  useEffect(() => {
    setActive(false)
    if (url === '/' && !isMidScreen) {
      return setCatalog(true)
    } else {
      setCatalog(false)
    }
    if (url !== '/') return setCatalog(false)
  }, [location.key])

  return (
    <>
      <div className=' mt-2 flex gap-2 items-end '>
        {/* кнопки каталога мобильная версия  */}

        {isMobileScreen ? (
          <div className=' flex gap-4 cursor-pointer '>
            <BsList className=' h-8 w-8' onClick={() => setCatalog(true)} />
          </div>
        ) : (
          <div className=' w-1/5 relative'>
            <button
              onMouseEnter={() => setCatalog(true)}
              className={
                catalog
                  ? ' z-30 uppercase relative rounded-t-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555]  py-2 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50 focus:outline-none w-full'
                  : ' z-30 uppercase relative rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555]  py-2 text-base font-medium text-white transition duration-200 hover:shadow-[#6025F5]/50 focus:outline-none w-full'
              }
            >
              Каталог
            </button>

            {/* каталог товаров */}
            {catalog && <ListMenu />}
          </div>
        )}

        <Search setActive={setActive} active={active} catalog={catalog} />
        <ShopCardHeader />
        {/* Темный фон для каталога */}
        <div
          hidden={url === '/' && !isMidScreen}
          onMouseEnter={() => setCatalog(false)}
          className={
            catalog
              ? 'z-20 absolute min-h-full min-w-full top-0 left-0 bg-black opacity-10 '
              : 'hidden'
          }
        ></div>
      </div>
    </>
  )
}
