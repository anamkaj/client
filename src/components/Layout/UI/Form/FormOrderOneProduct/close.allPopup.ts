import { useEffect } from 'react'
import { UseMutationResult } from 'react-query'
import { FormReq } from '../../../../../helpers/Model/PostServer/post.req.form'

type FormClose = {
  setFastOrderModel?: React.Dispatch<React.SetStateAction<boolean>>
  setSpecialist?: React.Dispatch<React.SetStateAction<boolean>>
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
}: FormClose) => {
  useEffect(() => {
    if (mutation.isSuccess) {
      setTimeout(() => {
        if (setFastOrderModel) {
          setFastOrderModel(false)
        } else if (setSpecialist) {
          setSpecialist(false)
        }
      }, 2000)
    }
  }, [mutation.isSuccess])
}
