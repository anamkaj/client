import { useQuery } from 'react-query'
import { SearchServices } from '../../../../services/GET/get.search'
import { useEffect, useState } from 'react'
import { validate } from '../../Search/validate'

export const useSearch = (input: string | undefined) => {
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    if (input !== undefined) {
      if (validate(input!)) {
        const tr = input.trim()
        setValue(tr)
      }
    } else {
      setValue('')
    }
  }, [input])

  const { data: product, isError } = useQuery(
    ['search product', value],
    () => (value.length >= 2 ? SearchServices.productSearch(value) : []),
    {
      staleTime: 5000,
      keepPreviousData: true,
    },
  )

  const { data: category, isError: errorCategory } = useQuery(
    ['search category', value],
    () => (value.length >= 2 ? SearchServices.categorySearch(value) : []),
    {
      staleTime: 5000,
      keepPreviousData: true,
    },
  )

  return { product, isError, category, errorCategory }
}
