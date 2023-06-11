import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

type ChildrenProps = {
  children: React.ReactNode
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  active: boolean
  titleModel: string
}

export const Model = ({
  children,
  setActive,
  active,
  titleModel,
}: ChildrenProps) => {
  return (
    <div className=' container '>
      <div className='flex justify-center '>
        {/* Черный фон  */}

        <div
          onClick={() => setActive(false)}
          hidden={!active}
          className='fixed top-0 left-0 z-10 opacity-30  min-h-screen min-w-full bg-gray-800 '
        ></div>
        {/* Окно с контентом  */}
        <div className='  flex items-center justify-center'>
          <div
            onClick={(e) => e.stopPropagation()}
            className={'bg-white fixed top-[20%] left-auto z-20 p-4 rounded-xl'}
            hidden={!active}
          >
            <div className='flex justify-between items-center border-b border-gray-200 py-3'>
              <div>
                <p className='text-xl font-bold text-gray-800'>{titleModel}</p>
              </div>

              <button onClick={() => setActive(() => false)}>
                <span>
                  <AiFillCloseCircle className='h-6 w-6 ' />
                </span>
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
