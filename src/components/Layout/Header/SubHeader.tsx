import React, { useState, useEffect } from 'react'
import { Search } from '../Search/Search'
import ShopCardHeader from './CardHeader/ShopCardHeader'
import { BsList } from 'react-icons/bs'
import { useStateModalWindows } from '../../../helpers/hook/search.windows'
import { ListMenu } from '../MainPage/ListMenu/ListMenu'
import { Menu } from '../MainPage/ListMenu/Mobile/Menu'
import { useCatalogState } from './hook/state.menu'

export const SubHeader = () => {
  const { active, setActive } = useStateModalWindows()
  const [catalog, setCatalog] = useState(false)
  const [mobileCatalog, setMobileCatalog] = useState(false)
  const { isMobileScreen, stateBackground } = useCatalogState({
    setActive,
    setCatalog,
    setMobileCatalog,
  })

  const closeMenuWindows = () => {
    setCatalog(false)
    setMobileCatalog(false)
  }

  return (
    <div className=' mt-8 flex gap-2 items-end '>
      {/* кнопки каталога мобильная версия  */}

      {isMobileScreen ? (
        <>
          <BsList
            className=' h-8 w-8 cursor-pointer'
            onClick={() => setMobileCatalog(true)}
          />
          {mobileCatalog && (
            <Menu setActive={setActive} setMobileCatalog={setMobileCatalog} />
          )}
        </>
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

      <Search setActive={setActive} active={active} />
      <ShopCardHeader />
      {/* Темный фон для каталога */}

      <div
        hidden={stateBackground}
        onMouseEnter={() => closeMenuWindows()}
        className={
          catalog || mobileCatalog
            ? ' z-20 absolute min-h-full min-w-full top-0 left-0 bg-black opacity-10'
            : ' hidden'
        }
      ></div>
    </div>
  )
}
