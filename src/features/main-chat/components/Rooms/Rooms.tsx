import { Box, Cluster, Stack } from '@kodiui/ui'
import { AiFillLock } from 'react-icons/ai'

import { LoaderDots } from '@/assets'
import { useAllRoomsQuery } from '@/generated/graphql'
import { graphQlClient } from '@/lib/graphqlRequest/graphQlClient'

import { CreateRoom } from './CreateRoom/CreateRoom'
import { useRoomStore } from './store/store'
import { useState } from 'react'
import { PasswordPopup } from './CreateRoom/PasswordPopup'
import { Button } from '@/components'

export const Rooms = () => {
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
      width={'1/6'}
      __minWidth={'300px'}
      height="full"
    >
      <Stack>
        <Box color={'gray12'} as={'h2'}>
          Rooms
        </Box>
        <Stack gap={'xxs'}>
          {data?.allRooms?.map((r) => {
            const hasPw = Boolean(String(r?.password)?.length > 0)

            return (
              <Box
                background={room.activeRoom === r?.id ? 'blue11' : 'blue8'}
                cursor="pointer"
                key={r?.id}
                as={'h4'}
              >
                <Cluster p={'sm'} onClick={() => handleOpenRoom(r?.id, r?.password)}>
                  <Box as={'p'} color="white">
                    # {r?.name}
                  </Box>
                  {hasPw ? <AiFillLock /> : null}
                </Cluster>
              </Box>
            )
          })}
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
        </Stack>
      </Stack>
      <CreateRoom />
      {open && <PasswordPopup id={id} pw={password} visible={open} setVisible={setOpen} />}
    </Box>
  )
}
