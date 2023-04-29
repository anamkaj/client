import React from 'react'
import { FormPerson } from '../../Form/FormPerson/FormPerson'


type PropPopup = {
  setSpecialist: React.Dispatch<React.SetStateAction<boolean>>
  specialist: boolean
}

export const SpecialistCall = ({ setSpecialist, specialist }: PropPopup) => {
  return (
    <div>
      <FormPerson setSpecialist={setSpecialist} specialist={specialist} />
    </div>
  )
}
