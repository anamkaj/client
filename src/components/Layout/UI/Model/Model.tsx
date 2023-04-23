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
    <div>
      <div
        onClick={() => setActive(false)}
        className={
          active
            ? 'fixed top-0 opacity-20 left-0 min-h-full min-w-full bg-gray-800'
            : 'fixed top-0 opacity-0 pointer-events-none left-0 min-h-full min-w-full  bg-gray-800'
        }
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          active
            ? 'bg-white  fixed top-[30%] left-[28%] z-10 w-2/5 mx-4 p-4 rounded-xl '
            : 'bg-white opacity-0 pointer-events-none fixed top-[30%] left-[30%] z-10 w-2/5 mx-4 p-4 rounded-xl '
        }
      >
        <div className='flex justify-between items-center border-b border-gray-200 py-3'>
          <div className='flex items-center justify-center'>
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
  )
}