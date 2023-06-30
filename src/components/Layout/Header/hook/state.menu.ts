import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useLocation } from 'react-router-dom'

type CatalogProps = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  setCatalog: React.Dispatch<React.SetStateAction<boolean>>
  setMobileCatalog: React.Dispatch<React.SetStateAction<boolean>>
}

export const useCatalogState = ({
  setActive,
  setCatalog,
  setMobileCatalog,
}: CatalogProps) => {
  const location = useLocation()
  const url = location.pathname
  const mainPage = url === '/'
  const isMobileScreen = useMediaQuery({ query: '(max-width: 480px)' })
  const isMidScreen = useMediaQuery({ query: '(max-width: 1024px)' })

  useEffect(() => {
    setActive(false)
    if (mainPage && !isMidScreen) {
      return setCatalog(true)
    } else {
      setCatalog(false)
    }
    if (!mainPage) {
      setCatalog(false)
      setMobileCatalog(false)
    }
  }, [location.key])

  return { mainPage, isMobileScreen, isMidScreen }
}
