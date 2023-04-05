import { Box } from '@kodiui/ui'

import { InputBox } from './Input/InputBox'
import { Messages } from './messages/Messages'

export const Chat = () => {
  return (
    <Box
      display={'flex'}
      flexDirection="column"
      justifyContent={'space-between'}
      width={'2/3'}
      height={'full'}
      p={'2xl'}
      background="blue10"
    >
      <Messages />
      <InputBox />
    </Box>
  )
}
