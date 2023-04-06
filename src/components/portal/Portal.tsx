/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC, ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  children: ReactNode
  querySelector: string
}

export const Portal: FC<Props> = ({ children, querySelector }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return mounted ? createPortal(children, document.querySelector(querySelector)!) : null
}
