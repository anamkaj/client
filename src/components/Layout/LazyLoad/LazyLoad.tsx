import React from 'react'
import { FadeLoader } from 'react-spinners'
import { BeatLoader } from 'react-spinners'

export const LazyLoad = () => {
  return (
    <div className=' container mx-auto '>
      <div className=' mt-60 flex justify-center items-center'>
        <FadeLoader color='#757575' />
      </div>
    </div>
  )
}

export const MiniSpinner = () => {
  return (
    <div className=' flex justify-start items-center w-1/12 '>
      <BeatLoader color='#757575' size={8} />
    </div>
  )
}
