import { ErrorMessage } from '@hookform/error-message'
import { Box, Stack } from '@kodiui/ui'
// eslint-disable-next-line import/no-unresolved
import { BoxProps } from '@kodiui/ui/dist/components/primitives/Box/Box'
import React, { FC, InputHTMLAttributes } from 'react'
import { RegisterOptions, useFormContext } from 'react-hook-form'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color'> {
  name: string
  label?: string
  disabled?: boolean
  registerOptions?: RegisterOptions
  color?: BoxProps['color']
  background?: BoxProps['background']
}
export const Input: FC<Props> = (props) => {
  const form = useFormContext()
  const {
    formState: { errors },
  } = form

  return (
    <>
      <Stack gap={'--xxs'}>
        {props.label && (
          <Box color={props.color || 'black'} as={'p'}>
            {props.label}
          </Box>
        )}
        <Box
          {...form.register(props.name, props.registerOptions)}
          {...props}
          as={'input'}
          background={props.background}
          borderRadius="sm"
        />
      </Stack>
      <ErrorMessage
        errors={errors}
        name={props.name}
        render={({ message }) => <p color={'red'}>{message}</p>}
      />
    </>
  )
}
