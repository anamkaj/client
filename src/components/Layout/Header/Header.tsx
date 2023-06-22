import React, { useState, useEffect } from 'react'
import { Menu } from './Menu'
import { Contact } from './Contact'
import { Logo } from './Logo'
import { SubHeader } from './SubHeader'
import { Model } from '../UI/Model/Model'
import { FormHeaderBtn } from '../UI/Form/FormContactSpecialist/FormHeaderBtn'
import { FormInstallSpecialist } from '../UI/Form/FormContactSpecialist/FormInstallSpecialist'

export const Header = () => {
  // Монтаж и Установка - кнопка
  const [installation, setInstallation] = useState(false)
  // Заказать обратный звонок - кнопка
  const [callback, setCallback] = useState(false)
  const titlePopup = 'Монтаж и Установка'
  const titlePopup2 = 'Заказать обратный звонок'

  return (
    <>
      <div className=' bg-white'>
        <div className='container mx-auto py-2'>
          <div className=' flex flex-col justify-around gap-4 items-center lg:flex-row  '>
            <div>
              <Logo />
            </div>
            <div className=' p-2 hidden xl:block '>
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
            <Contact />
          </div>
          <SubHeader />
        </div>
      </div>
      <div className=' flex items-center justify-center'>
        {/* Выезд специалиста */}
        <div hidden={!installation}>
          <Model
            active={installation}
            setActive={setInstallation}
            titleModel={titlePopup}
          >
            {<FormInstallSpecialist setSpecialist={setInstallation} />}
          </Model>
        </div>
        <div hidden={!callback}>
          <Model
            active={callback}
            setActive={setCallback}
            titleModel={titlePopup2}
          >
            <FormHeaderBtn setSpecialist={setCallback} />
          </Model>
        </div>
      </div>
    </>
  )
}
