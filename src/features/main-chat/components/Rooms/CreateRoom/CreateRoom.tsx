import { Box, Stack } from '@kodiui/ui'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button, Input } from '@/components'
import { CreateRoomMutationVariables, useCreateRoomMutation } from '@/generated/graphql'
import { queryClient } from '@/lib'
import { graphQlClient } from '@/lib/graphqlRequest/graphQlClient'

export const CreateRoom = () => {
  const form = useForm<CreateRoomMutationVariables>()
  const createRoom = useCreateRoomMutation(graphQlClient)

  const submit = async (data: CreateRoomMutationVariables) => {
    try {
      const res = await createRoom.mutateAsync(data)
      toast.success(`Successfully Created ${res.createRoom?.name}`)
      queryClient.refetchQueries(['allRooms'])
      form.reset()
    } catch {
      toast.error('Something Went Wrong')
    }
  }

  return (
    <Box p={'xl'} background="red7">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(submit)}>
          <Stack>
            <Stack gap={'xxs'}>
              <Input label="Room Name" name="name" />
              <Input label="Password" placeholder="optional" name="password" />
            </Stack>
            <Button width={'full'} height={'12'}>
              Create New Room
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </Box>
  )
}
