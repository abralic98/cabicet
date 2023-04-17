/* eslint-disable react/display-name */
import { Box, FlexBox, Stack } from '@kodiui/ui'
import React, { FC, PropsWithChildren, ReactElement, ReactNode, useEffect, useState } from 'react'
import { Button } from '../button/Button'

interface Props {
  children: ReactNode
  initial?: number
}

interface Tabs {
  Tab: ({ index, children }: Tab) => JSX.Element
}

interface Tab {
  index: number
  disabled?: boolean
  greyOut?: boolean
  name: string
  count?: number
  loading?: boolean
  children: ReactNode
  onClick?: () => void
}

export const Tabs: FC<Props> & Tabs = ({ children, initial }) => {
  const [active, setActive] = useState(initial || 0)

  // if(disabled)
  const content = (
    <Box>
      {React.Children.map(children, (child) => {
        const item = child as ReactElement<PropsWithChildren<Tab>>
        if (item?.props.index === active) return child
      })}
    </Box>
  )

  useEffect(() => {
    if (initial) setActive(initial)
  }, [initial])

  return (
    <Stack gap={'sm'}>
      <FlexBox dir={'row'} width="fit" gap="sm">
        {React.Children.map(children, (child) => {
          const item = child as ReactElement<PropsWithChildren<Tab>>
          if (item?.props?.disabled) return null
          return (
            <Button
              onClick={() => {
                if (item.props.greyOut) return
                setActive(item?.props.index)
                if (item.props.onClick) item.props.onClick()
              }}
              background={item.props.index === active ? 'blue7' : 'blue3'}
              color={item.props.index === active ? 'blackA12' : 'blackA12'}
              fontWeight="bold"
              width="full"
              opacity={item.props.greyOut ? '0.25' : '1'}
              style={{
                transition: '0.1s ease all',
                whiteSpace: 'nowrap',
              }}
            >
              <FlexBox dir="row" alignItems={'center'} gap="sm">
                {item.props.loading && 'loading'}
                {!item.props.loading && item.props.name}
              </FlexBox>
            </Button>
          )
        })}
      </FlexBox>
      {content}
    </Stack>
  )
}

Tabs.Tab = ({ children, disabled }) => {
  if (disabled) return <></>
  return <Box>{children}</Box>
}
