import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import { Input } from '@/components'
import { CreateMessageMutationVariables, useCreateMessageMutation } from '@/generated/graphql'
import { queryClient } from '@/lib'
import { graphQlClient } from '@/lib/graphqlRequest/graphQlClient'

export const InputBox = () => {
  const form = useForm<CreateMessageMutationVariables>()
  const createMsg = useCreateMessageMutation(graphQlClient)

  const submit = async (
    data: CreateMessageMutationVariables,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    const token = localStorage.getItem('chaby-token')
    if (!token) {
      toast.error('Not authorized')
    }
    try {
      await createMsg.mutateAsync({ message: data?.message, userId: String(token) })
      queryClient.refetchQueries(['getMessages'])
    } catch {
      toast.error('Not authorized')
    }
  }
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        <Input height={'12'} name="message" />
      </form>
    </FormProvider>
  )
}
