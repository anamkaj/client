import { useEffect } from 'react'
import { IGProduct } from '../../../helpers/Model/GetServer/model.products'

interface ValidateScroll extends CheckProps {
  setHiddenScroll: React.Dispatch<React.SetStateAction<boolean>>
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

// Проверка на длиину введенного в поиск слова
export const useValidateScroll = ({
  data,
  input,
  setHiddenScroll,
  active,
}: ValidateScroll) => {
  const checkInput = ({ data, input }: CheckProps) => {
    if (input?.length === 0 || data?.length == 0 || input === undefined)
      return true
  }

  useEffect(() => {
    if (checkInput({ data, input }) || !active) {
      setHiddenScroll(true)
    } else {
      setHiddenScroll(false)
    }
  }, [input, active, data])
}
