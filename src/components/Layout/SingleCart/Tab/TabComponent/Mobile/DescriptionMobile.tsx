import React, { useState } from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { BsXLg } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'

type DescriptionProp = {
  description: string[]
}

export const DescriptionMobile = ({ description }: DescriptionProp) => {
  const [fullDescription, setFullDescription] = useState(false)

  const lengthDescription = (description: string[]) => {
    if (description.length > 4) {
      return description.slice(0, 3)
    }
  }

  return (
    <div className=' relative'>
      <div className=' tracking-normal antialiased '>
        {lengthDescription(description)?.map((x) => {
          return <p className=' font-normal text-sm '>{x + '.'}</p>
        })}
      </div>
      <br />
      <div className=' flex justify-end mt-0'>
        <button
          className=' flex items-center gap-2 text-sm font-semibold text-slate-500 mt-[-10px]'
          onClick={() => setFullDescription(true)}
        >
          Полное описание
          <BsChevronRight className=' h-4 w-4' />
        </button>
      </div>

      {/* Окно полного описания */}

      {fullDescription && (
        <div className='fixed bg-white top-0 left-0 h-[100%] w-[100%] overflow-scroll p-4'>
          <div className='flex justify-between items-center mt-2 mb-2 w-full'>
            <BsArrowLeftCircle
              className=' w-5 h-5'
              onClick={() => setFullDescription(false)}
            />
            <span className=' text-lg font-semibold'>О товаре</span>
            <BsXLg
              className=' w-5 h-5'
              onClick={() => setFullDescription(false)}
            />
          </div>
          <hr className=' mb-2 border border-slate-400' />
          <div>
            {description.map((x) => {
              return <p className=' font-normal'>{x + '.'}</p>
            })}
          </div>
        </div>
      )}
    </div>
  )
}
