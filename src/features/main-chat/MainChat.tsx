import { Tabs } from '@/components'
import { Box, Cluster } from '@kodiui/ui'

import { Chat } from './components/Chat/Chat'
import { Rooms } from './components/Rooms/Rooms'
import { UserList } from './components/UserList/UserList'

export const MainChat = () => {
  return (
    <Cluster gap={0} height={'screen'}>
      <Box background={'gray5'} width={'1/6'} height="full" p={'sm'}>
        <Tabs initial={0}>
          <Tabs.Tab index={0} name="Public">
            <Rooms type="Public" />
          </Tabs.Tab>
          <Tabs.Tab index={1} name="Private">
            <Rooms type="Private" />
          </Tabs.Tab>
        </Tabs>
      </Box>
      <Chat />
      <UserList />
    </Cluster>
  )
}
