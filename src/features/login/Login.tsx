import { Box, FlexBox, Stack } from '@kodiui/ui'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button, Input } from '@/components'
import {
  CreateAccountMutationVariables,
  useCreateAccountMutation,
  useLoginUserMutation,
} from '@/generated/graphql'
import { graphQlClient } from '@/lib/graphqlRequest/graphQlClient'

export const Login = () => {
  const form = useForm<CreateAccountMutationVariables>()
  const router = useRouter()
  const [register, setRegister] = useState(false)
  const createAccount = useCreateAccountMutation(graphQlClient)
  const login = useLoginUserMutation(graphQlClient)

  const submit = async (data: CreateAccountMutationVariables) => {
    if (register) {
      try {
        await createAccount.mutateAsync(data)
        toast.success('Successfully Created Account')
        setRegister(!register)
      } catch {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        toast.error(String(createAccount.error?.response?.errors[0]?.message))
      }
    } else {
      try {
        const res = await login.mutateAsync({ password: data.password, username: data.username })
        toast.success('Successfully Logged')
        localStorage.setItem('chaby-token', String(res.loginUser?.id))
        router.push('/')
      } catch {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        toast.error(String(login.error?.response?.errors[0]?.message))
      }
    }
  }

  return (
    <Box width={'screen'} height={'screen'}>
      <FlexBox height={'full'} justifyContent={'center'} alignItems="center">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(submit)}>
            <Box p={'lg'} background="blue8">
              <Stack gap={'sm'}>
                <Input label="Username" name="username" />
                {register && <Input label="Email" name="email" />}
                <Input label="Password" name="password" />
                <Button loading={createAccount.isLoading} background={'blue2'} color="black">
                  {register ? 'Register' : 'Login'}
                </Button>

                <Box
                  onClick={() => setRegister(!register)}
                  cursor="pointer"
                  color={'black'}
                  as={'p'}
                >
                  {register ? 'Login?' : 'Register?'}
                </Box>
              </Stack>
            </Box>
          </form>
        </FormProvider>
      </FlexBox>
    </Box>
  )
}
