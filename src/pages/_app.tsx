import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import '@kodiui/ui/style.css'
import '@/styles/global.css'
import { queryClient } from '@/lib'
import { useTheme } from '@/hooks'

export default function App({ Component, pageProps }: AppProps) {
  const theme = useTheme()
  return (
    <div className={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Component {...pageProps} />
        <Toaster />
      </QueryClientProvider>
    </div>
  )
}
