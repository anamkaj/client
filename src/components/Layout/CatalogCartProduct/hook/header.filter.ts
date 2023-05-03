import React, { useState, useEffect } from 'react'
import { selectValue } from '../helper/filter.header'
import { useStore } from '@nanostores/react'
import {
  changeFilterHeader,
  headerFilter,
} from '../../../../store/NanoStore/CatalogStore/header.filter.state'

export const useFilterChange = () => {
  const [select, setSelect] = useState(selectValue[0].sort)
  const filterName = useStore(headerFilter)

  const handleChange = (event: string) => {
    setSelect(event)
    changeFilterHeader(event)
  }

  useEffect(() => {
    if (filterName !== '') setSelect(filterName)
  }, [])

  return { handleChange, select }
}
