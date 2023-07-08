import { useRef } from 'react'

//Скрол к якорям  для карточки товара

export const useScrollToTop = () => {
  const allToScroll = useRef<any>(null)
  const scroll = () =>
    allToScroll.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  return { scroll, allToScroll }
}
