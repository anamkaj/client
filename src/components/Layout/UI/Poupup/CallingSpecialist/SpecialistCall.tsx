import React from 'react'
import { FormPerson } from '../../Form/FormPerson/FormPerson'
import { FormHeaderBtn } from '../../Form/FormHeaderBtn/FormHeaderBtn'

type PropPopup = {
  setSpecialist: React.Dispatch<React.SetStateAction<boolean>>
  specialist: boolean
}

export const SpecialistCall = ({ setSpecialist, specialist }: PropPopup) => {
  return (
    <div>
      <FormHeaderBtn setSpecialist={setSpecialist} specialist={specialist} />
    </div>
  )
}
