import { Room } from '@/generated/graphql'
import { Box, Cluster } from '@kodiui/ui'
import React, { FC } from 'react'
import { AiFillLock } from 'react-icons/ai'
import { useRoomStore } from '../store/store'

interface Props {
  r: Room | null
  handleOpenRoom: (id?: string, pw?: string | null) => void
}
export const SingleRoom: FC<Props> = ({ r, handleOpenRoom }) => {
  const room = useRoomStore()
  if (!r) return null

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
}
