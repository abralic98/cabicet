import { Box, Cluster } from '@kodiui/ui'
import { LoaderDots } from '@/assets'
import { useGetMessagesQuery } from '@/generated/graphql'
import { graphQlClient } from '@/lib/graphqlRequest/graphQlClient'

export const Messages = () => {
  const { data, isFetching } = useGetMessagesQuery(graphQlClient)
  const messages = data?.getMessages.map((m) => {
    return (
      <Cluster key={m.id}>
        <Box borderRadius="xxl" width={'16'} height="16" background={'green8'}  />
        <Box as={'h4'}>{m?.user?.username}</Box>
        <Box fontWeight={'bolder'} as={'h3'}>
          {m.message}
        </Box>
      </Cluster>
    )
  })

  if (isFetching) return <LoaderDots />
  return <Box>{messages}</Box>
}
