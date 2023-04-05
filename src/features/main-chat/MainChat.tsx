import { Cluster } from '@kodiui/ui'

import { Chat } from './components/Chat/Chat'
import { Rooms } from './components/Rooms/Rooms'
import { UserList } from './components/UserList/UserList'

export const MainChat = () => {
  return (
    <Cluster gap={0} height={'screen'}>
      <Rooms />
      <Chat />
      <UserList />
    </Cluster>
  )
}
