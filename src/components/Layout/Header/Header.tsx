import React, { useState, useEffect } from 'react'
import { Menu } from './Menu'
import { Contact } from './Contact'
import { Logo } from './Logo'
import { SubHeader } from './SubHeader'
import { Model } from '../UI/Model/Model'
import { SpecialistCall } from '../UI/Poupup/CallingSpecialist/SpecialistCall'
import { FormPerson } from '../UI/Form/FormPerson/FormPerson'
import { FormHeaderBtn } from '../UI/Form/FormHeaderBtn/FormHeaderBtn'


export const Header = () => {
  const [installation, setInstallation] = useState(false)
  const [callback, setCallback] = useState(false)
  const titlePopup = 'Монтаж и Установка'
  const titlePopup2 = 'Заказать обратный звонок'

 
  return (
    <>
      <div className=' bg-white'>
        <div className='container mx-auto py-2'>
          <div className=' flex justify-centre gap-4 items-center '>
            <div>
              <Logo />
            </div>
            <div className=' p-2 '>
              <p className=' font-semibold'>
                ПЕРСОНАЛЬНОЕ СОПРОВОЖДЕНИЕ НА КАЖДОМ ЭТАПЕ ЗАКАЗА!
              </p>
            </div>
            <div>
              <Menu
                setInstallation={setInstallation}
                setCallback={setCallback}
              />
            </div>
            <div></div>
            <Contact />
          </div>
          <SubHeader />
        </div>
      </div>
      <div className=' flex items-center justify-center'>
        <div hidden={!installation}>
          <Model
            active={installation}
            setActive={setInstallation}
            titleModel={titlePopup}
          >
            {
              <SpecialistCall
                specialist={installation}
                setSpecialist={setInstallation}
              />
            }
          </Model>
        </div>
        <div hidden={!callback}>
          <Model
            active={callback}
            setActive={setCallback}
            titleModel={titlePopup2}
          >
            <FormHeaderBtn />
          </Model>
        </div>
      </div>
    </>
  )
}
