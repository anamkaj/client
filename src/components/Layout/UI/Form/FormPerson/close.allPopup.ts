import { useEffect } from 'react'
import { UseFormReset } from 'react-hook-form'
import {  UseMutationResult } from 'react-query'
import { Person } from '../type.form'
import { FormReq } from '../../../../../services/POST/FORM/models/post.req.form'

type FormClose = {
  setFastOrderModel?: React.Dispatch<React.SetStateAction<boolean>>
  setSpecialist?: React.Dispatch<React.SetStateAction<boolean>>
  reset: UseFormReset<Person>
  mutation: UseMutationResult<
    { data: any; status: number },
    unknown,
    FormReq,
    unknown
  >
}

export const useClosePopupAll = ({
  mutation,
  setFastOrderModel,
  setSpecialist,
  reset,
}: FormClose) => {
  useEffect(() => {
    if (mutation.isSuccess) {
      setTimeout(() => {
        if (setFastOrderModel) {
          setFastOrderModel(false)
          reset()
        } else if (setSpecialist) {
          setSpecialist(false)
          reset()
        }
      }, 2000)
    }
  }, [mutation.isSuccess])
}
