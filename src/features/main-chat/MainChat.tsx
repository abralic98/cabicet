import { Box } from '@kodiui/ui'

import { useAllUsersQuery } from '@/generated/graphql'
import { graphQlClient } from '@/lib/graphqlRequest/graphQlClient'

export const MainChat = () => {
  const { data, isFetching } = useAllUsersQuery(graphQlClient)

  return (
    <>
      <Box as={'h1'}>{isFetching ? 'fecase' : 'nefecase'}</Box>
      {data?.allUsers?.map((u, i) => {
        return <h1 key={i}>{u?.username}</h1>
      })}
    </>
  )
}
