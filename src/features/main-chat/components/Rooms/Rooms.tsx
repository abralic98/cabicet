import { Box, Cluster, Stack } from '@kodiui/ui'

import { LoaderDots } from '@/assets'
import { useAllRoomsQuery } from '@/generated/graphql'
import { graphQlClient } from '@/lib/graphqlRequest/graphQlClient'

import { CreateRoom } from './CreateRoom/CreateRoom'
import { useRoomStore } from './store/store'
import { FC, useState } from 'react'
import { PasswordPopup } from './CreateRoom/PasswordPopup'
import { Button } from '@/components'
import { SingleRoom } from './SingleRoom/SingleRoom'

interface Props {
  type: 'Public' | 'Private'
}
export const Rooms: FC<Props> = ({ type }) => {
  const { data, isFetching } = useAllRoomsQuery(graphQlClient)
  const [open, setOpen] = useState(false)
  const [password, setPassword] = useState('')
  const [id, setId] = useState('')
  const room = useRoomStore()

  const handleOpenRoom = (id?: string, pw?: string | null) => {
    setPassword(pw || '')
    setId(id || '')

    if (!id) return
    if (pw) {
      setOpen(true)
      return
    } else {
      room.setActiveRoom(id)
    }
  }

  if (isFetching && !data) return <LoaderDots />
  return (
    <Box
      display={'flex'}
      flexDirection="column"
      justifyContent={'space-between'}
      p={'2xl'}
      background={'gray5'}
      __minWidth={'300px'}
      height="fit"
    >
      <Stack>
        <Box style={{ overflow: 'auto' }}>
          <Stack>
            <Cluster
              position={'sticky'}
              top={0}
              background={'gray5'}
              paddingBottom="sm"
              color={'gray12'}
            >
              <Box as={'h2'}>Rooms</Box>

              <Button
                background={'blue8'}
                color="gray12"
                fontWeight={'bold'}
                margin="auto"
                width={'52'}
                onClick={() => room.setActiveRoom(undefined)}
              >
                Leave Rooms
              </Button>
            </Cluster>
            <Stack gap={'xxs'}>
              {type === 'Public'
                ? data?.allRooms?.map((r) => {
                    return <SingleRoom key={r?.id} r={r} handleOpenRoom={handleOpenRoom} />
                  })
                : 'No rooms'}
            </Stack>
          </Stack>
        </Box>
        <CreateRoom />
      </Stack>
      {open && <PasswordPopup id={id} pw={password} visible={open} setVisible={setOpen} />}
    </Box>
  )
}
