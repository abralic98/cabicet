import { Box, Cluster, Stack } from '@kodiui/ui'

import { LoaderDots } from '@/assets'
import { useGetMessagesQuery } from '@/generated/graphql'
import { graphQlClient } from '@/lib/graphqlRequest/graphQlClient'
import { useRoomStore } from '../../Rooms/store/store'

export const Messages = () => {
  const room = useRoomStore()
  const { data, isFetching } = useGetMessagesQuery(graphQlClient, { roomId: room.activeRoom || '' })
  const messages = data?.getMessages?.map((m) => {
    return (
      <Cluster key={m?.id}>
        <Box borderRadius="xxl" width={'16'} height="16" background={'green8'} />
        <Box as={'h4'}>{m?.user?.username}:</Box>
        <Box fontWeight={'bolder'} as={'h3'}>
          {m?.message}
        </Box>
      </Cluster>
    )
  })

  if (isFetching && !messages) return <LoaderDots />
  if (!room.activeRoom) {
    return <Box>Select Chat Room To send messages</Box>
  }
  return <Stack>{messages}</Stack>
}
