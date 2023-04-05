import { ErrorMessage } from '@hookform/error-message'
import { Box, Stack } from '@kodiui/ui'
import React, { FC, InputHTMLAttributes } from 'react'
import { RegisterOptions, useFormContext } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  registerOptions?: RegisterOptions
}
export const Input: FC<Props> = (props) => {
  const form = useFormContext()
  const {
    formState: { errors },
  } = form

  return (
    <>
      <Stack gap={'--xxs'}>
        <Box color={'black'} as={'p'}>
          {props.label}
        </Box>
        <Box {...form.register(props.name, props.registerOptions)} {...props} as={'input'} />
      </Stack>
      <ErrorMessage
        errors={errors}
        name={props.name}
        render={({ message }) => <p color={'red'}>{message}</p>}
      />
    </>
  )
}
