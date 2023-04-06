import { CSSProperties, ReactNode } from 'react'

export type PopupPositions = 'center' | 'top'

export interface PopupProps {
  children?: ReactNode
  visible: boolean
  title?: string | null
  width?: string
  maxHeight?: CSSProperties['maxHeight']
  maxWidth?: number
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>
  setClose?: () => void
  headerChildren?: ReactNode
  blur?: string
  position?: PopupPositions
}
