import { Box } from '@kodiui/ui'
// eslint-disable-next-line import/no-unresolved
import { BoxProps } from '@kodiui/ui/dist/components/primitives/Box/Box'
import React, { FC } from 'react'

import { LoaderDots } from '@/assets'

interface Props extends BoxProps {
  loading?: boolean
}

export const Button: FC<Props> = (props) => {
  //   return <button style={{background:'blue'}}>{children}</button>
  return (
    <Box __minHeight={'30px'} as={'button'} cursor="pointer" {...props}>
      {props.loading ? <LoaderDots /> : props.children}
    </Box>
  )
}
