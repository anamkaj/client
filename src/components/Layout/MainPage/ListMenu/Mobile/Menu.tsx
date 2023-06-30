import React from 'react'
import { ListMenu } from '../ListMenu'
import { BsArrowLeftCircle } from 'react-icons/bs'
import ShopCardHeader from '../../../Header/CardHeader/ShopCardHeader'

type PropMobileMenu = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  setMobileCatalog: React.Dispatch<React.SetStateAction<boolean>>
}

export const Menu = ({ setActive, setMobileCatalog }: PropMobileMenu) => {
  const closeCatalog = () => {
    setMobileCatalog(false)
    setActive(false)
  }

  return (
    <div className=' absolute min-h-screen top-0 left-0 w-full bg-slate-50'>
      <div className=' mt-4 p-2 flex items-center justify-between'>
        <h2 className=' font-semibold text-lg'>Каталог</h2>

        <ShopCardHeader />
      </div>
      <div className=' p-2 flex gap-2 items-center mt-4 '>
        <BsArrowLeftCircle
          onClick={() => closeCatalog()}
          className=' w-5 h-5 '
        />
        <span>Назад</span>
      </div>
      <ListMenu />
    </div>
  )
}
