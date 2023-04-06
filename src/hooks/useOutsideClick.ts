import { useEffect, MutableRefObject, useState } from 'react'

export const useOutsideClick = (ref: MutableRefObject<HTMLDivElement | null>) => {
  const [clickOutside, setClickOutside] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleClickOutside(event: any) {
      if (!event) return
      if (ref.current && !ref.current.contains(event.target) && !event.target.closest('#popup')) {
        setClickOutside(true)
        setTimeout(() => {
          setClickOutside(false)
        }, 100)
      }
    }
    document.addEventListener('mouseup', handleClickOutside)
    return () => {
      document.removeEventListener('mouseup', handleClickOutside)
    }
  }, [ref])
  return clickOutside
}
