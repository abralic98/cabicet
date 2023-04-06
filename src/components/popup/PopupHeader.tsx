import { Box, Cluster, Split } from '@kodiui/ui'
import React, { FC, ReactNode } from 'react'

interface Props {
  setExpand?: () => void
  setClose?: () => void
  title?: string
  headerChildren?: ReactNode
}

export const PopupHeader: FC<Props> = ({ setClose, title, headerChildren }) => {
  return (
    <Split>
      <Box color={'amber8'}>{title}</Box>
      <Cluster gap={'-xxs'}>
        {headerChildren}
        {setClose && 'closeee'}
      </Cluster>
    </Split>
  )
}
