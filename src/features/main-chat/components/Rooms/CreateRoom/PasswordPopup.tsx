import { Input, Popup } from '@/components'
import { Cluster, FlexBox } from '@kodiui/ui'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { AiFillLock } from 'react-icons/ai'
import { useRoomStore } from '../store/store'

interface Props {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  pw: string
  id: string
}
export const PasswordPopup: FC<Props> = ({ visible, setVisible, pw, id }) => {
  const form = useForm<{ password: string }>()

  const room = useRoomStore()

  const submit = () => {
    console.log('pwww', pw)

    if (pw == form.getValues('password')) {
      room.setActiveRoom(id)
      setVisible(false)
    } else {
      toast.error('Wrong Password')
      setVisible(false)
    }
  }

  return (
    <Popup headerChildren visible={visible} setVisible={setVisible}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(submit)}>
          <FlexBox
            p={'lg'}
            alignItems={'center'}
            justifyContent="center"
            width={'fit'}
            height="fit"
            background={'blue9'}
            flexDirection="column"
          >
            <Cluster>
              Locked
              <AiFillLock />
            </Cluster>
            <Input
              background={'blackA9'}
              color="white"
              label="Password"
              height={'12'}
              name="password"
            />
          </FlexBox>
        </form>
      </FormProvider>
    </Popup>
  )
}
