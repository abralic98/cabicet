import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import '@kodiui/ui/style.css'
import '@/styles/global.css'
import { queryClient } from '@/lib'
import { darkTheme } from '@/styles/contract.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={darkTheme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Toaster />
      </QueryClientProvider>
    </div>
  )
}
