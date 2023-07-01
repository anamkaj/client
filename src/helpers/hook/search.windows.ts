import { useState } from 'react'

export const useStateModalWindows = () => {
  const [active, setActive] = useState(false)

  return {
    active,
    setActive,
  }
}
