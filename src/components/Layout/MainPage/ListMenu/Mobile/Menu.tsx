import React from 'react'
import { ListMenu } from '../ListMenu'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { item } from '../../../UI/animation/category'
import { BsList } from 'react-icons/bs'
import { MobileShopCart } from '../../../Header/CardHeader/Mobile/MobileShopCart'

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
    <div className='z-40 absolute top-0 left-0 w-[80vw] bg-slate-50 '>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={item}
        exit={{ opacity: 0, scale: 0.95 }}
      >
        <div className=' p-2 flex gap-2 items-center mt-4 '>
          <BsArrowLeftCircle
            onClick={() => closeCatalog()}
            className=' w-5 h-5 '
          />
          <span>Назад</span>
        </div>
        <div className=' bg-slate-50 flex justify-between items-center mb-2 '>
          <div className=' mt-4 p-2 flex items-center justify-between'>
            <div className=' flex items-center gap-2'>
              <BsList className=' w-5 h-5' />
              <h2 className=' font-semibold text-lg'>Каталог</h2>
            </div>
          </div>
          <MobileShopCart />
        </div>

        <ListMenu />
      </motion.div>
    </div>
  )
}
