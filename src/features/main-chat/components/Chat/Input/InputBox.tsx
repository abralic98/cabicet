import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import { Input } from '@/components'
import { CreateMessageMutationVariables, useCreateMessageMutation } from '@/generated/graphql'
import { queryClient } from '@/lib'
import { graphQlClient } from '@/lib/graphqlRequest/graphQlClient'
import { useRoomStore } from '../../Rooms/store/store'

export const InputBox = () => {
  const form = useForm<CreateMessageMutationVariables>()
  const createMsg = useCreateMessageMutation(graphQlClient)

  const room = useRoomStore()

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
      await createMsg.mutateAsync({
        message: data?.message,
        userId: String(token),
        roomId: room.activeRoom || '',
      })
      form.reset()
      queryClient.refetchQueries(['getMessages', { roomId: room.activeRoom }])
    } catch {
      toast.error('Not authorized')
    }
  }
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        <Input
          disabled={!room.activeRoom}
          placeholder="Type your message here"
          height={'12'}
          name="message"
        />
      </form>
    </FormProvider>
  )
}
