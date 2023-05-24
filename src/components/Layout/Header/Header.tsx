import React from 'react'
import { Menu } from './Menu'
import { Contact } from './Contact'
import { Logo } from './Logo'
import { SubHeader } from './SubHeader'

export const Header = () => {
  return (
    <div className=' bg-white'>
      <div className='container mx-auto py-2'>
        <div className=' grid grid-cols-5 gap-4 items-center '>
          <div className='col-span-1'>
            <Logo />
          </div>
          <div className='col-span-3'>
            <Menu />
          </div>

          <div className=' col-span-1'>
            <Contact />
          </div>
        </div>
        <SubHeader />
      </div>
    </div>
  )
}
