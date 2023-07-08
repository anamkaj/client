import { useEffect, useRef, useState } from 'react'
import {
  scrollState,
  scrollStateChange,
} from '../../../../store/NanoStore/CatalogStore/scroll.catalog'

export const usePositionScrollWindows = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollPositionStore = scrollState.get()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const position = window.scrollY
        setScrollPosition(position)
      }

      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  // присвоение позиции скрола
  const changePositionScroll = () => {
    scrollStateChange(scrollPosition)
  }

  useEffect(() => {
    if (scrollPositionStore !== undefined) {
      window.scrollTo(0, scrollPositionStore)
    } else {
      window.scrollTo(0, 0)
    }
  }, [])
  return { scrollPosition, changePositionScroll }
}
