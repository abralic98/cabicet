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
        <Box borderRadius="xxl" width={'8'} height="8" background={'green8'} />
        <Box as={'h4'} color="blue9">
          {m?.user?.username}:
        </Box>
        <Box fontWeight={'bolder'} color="yellow11" as={'h3'}>
          {m?.message}
        </Box>
      </Cluster>
    )
  })

  if (isFetching && !messages) return <LoaderDots />
  if (!room.activeRoom) {
    return <Box color={'black'}>Select Chat Room To send messages</Box>
  }
  return <Stack>{messages}</Stack>
}
