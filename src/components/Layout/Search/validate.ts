import { useEffect } from 'react'
import { IGProduct } from '../../../helpers/Model/GetServer/model.products'


interface ValidateScroll extends CheckProps {
  setHidden: React.Dispatch<React.SetStateAction<boolean>>
  active: boolean
}

interface CheckProps {
  data: IGProduct[] | undefined
  input: string | undefined
}
// Проверка инпута при вводе
export const validate = (s: string) => {
  const checkInputReg = /[#$&+=@"'()|.?><%$*!:;`~]/g
  if (s.match(checkInputReg) == null) return true
}

//
export const useValidateScroll = ({
  data,
  input,
  setHidden,
  active,
}: ValidateScroll) => {
  const checkInput = ({ data, input }: CheckProps) => {
    if (input?.length === 0 || data?.length == 0 || input === undefined)
      return true
  }

  useEffect(() => {
    if (checkInput({ data, input }) || !active) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  }, [input, active, data])
}
