import { useLocation, useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import {
  scrollState,
  scrollStateChange,
} from '../../../../store/NanoStore/CatalogStore/scroll.catalog'

type ParamScroll = {
  scroll: number
  pathname: string
}

export const usePositionScrollWindows = () => {
  const location = useLocation()
  const [scrollPosition, setScrollPosition] = useState<ParamScroll>()
  const scrollPositionStore = scrollState.get()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const position = window.scrollY
        setScrollPosition((prev) => ({
          ...prev,
          scroll: position,
          pathname: location.pathname,
        }))
      }

      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  // присвоение позиции скрола
  const changePositionScroll = () => {
    if (scrollPosition) scrollStateChange(scrollPosition)
  }
  // скпрл к месту клика , если из карточки товара был переход в другую группу , тогда скрол премешает в начало страницы

  useEffect(() => {
    if (
      scrollPositionStore !== undefined &&
      scrollPositionStore.pathname == location.pathname
    ) {
      window.scrollTo(0, scrollPositionStore.scroll)
    } else {
      window.scrollTo(0, 0)
    }
  }, [])

  return { scrollPosition, changePositionScroll }
}
