import { Box, Cluster, FlexBox, Split, Stack } from '@kodiui/ui'

import { LoaderDots } from '@/assets'
import { useAllUsersQuery } from '@/generated/graphql'
import { graphQlClient } from '@/lib/graphqlRequest/graphQlClient'
import { useAuth } from '@/features/auth'
import { useThemeStore } from '@/styles/useThemeStore'
import { MdDarkMode, MdOutlineDarkMode, MdLogout } from 'react-icons/md'

export const UserList = () => {
  const { data } = useAllUsersQuery(graphQlClient)
  const theme = useThemeStore()
  const { logout, getUser } = useAuth()
  const users = data?.allUsers?.map((u) => {
    const you = u?.id === getUser()
    return (
      <Cluster key={u?.id}>
        <Box __width={'10px'} __height={'10px'} borderRadius={'xxl'} background={'green10'} />
        <Box color={you ? 'green10' : 'gray12'} fontWeight={you ? 'bold' : 'lighter'}>
          {u?.username}
        </Box>
      </Cluster>
    )
  })
  if (!users) return <LoaderDots color="white" />
  return (
    <FlexBox
      flexDirection={'column'}
      justifyContent="space-between"
      p={'2xl'}
      width={'1/6'}
      height={'full'}
      background="gray5"
      padding={'lg'}
    >
      <Stack>
        <Split>
          <Box cursor="pointer" onClick={() => theme.toggleTheme()}>
            {theme.theme === 'light' ? (
              <MdOutlineDarkMode fontSize={30} />
            ) : (
              <MdDarkMode fontSize={30} />
            )}
          </Box>

          <Box cursor="pointer" onClick={logout}>
            <MdLogout color={theme.theme === 'dark' ? 'white' : 'black'} fontSize={30} />
          </Box>
        </Split>
        <Box color={'gray12'} as={'h2'}>
          Members
        </Box>
        {users}
      </Stack>
    </FlexBox>
  )
}
