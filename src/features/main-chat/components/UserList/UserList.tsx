import { Box, Cluster } from '@kodiui/ui'

import { LoaderDots } from '@/assets'
import { useAllUsersQuery } from '@/generated/graphql'
import { graphQlClient } from '@/lib/graphqlRequest/graphQlClient'

export const UserList = () => {
  const { data } = useAllUsersQuery(graphQlClient)
  const users = data?.allUsers?.map((u) => {
    return (
      <Cluster key={u?.id}>
        <Box __width={'10px'} __height={'10px'} borderRadius={'xxl'} background={'green5'} />
        <Box color={'black'}>{u?.username}</Box>
      </Cluster>
    )
  })
  if (!users) return <LoaderDots color="white" />
  return (
    <Box width={'1/6'} height={'full'} background="amber10" padding={'lg'}>
      {users}
    </Box>
  )
}