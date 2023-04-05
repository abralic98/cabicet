import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

import '@kodiui/ui/style.css'
import { queryClient } from '@/lib'
import { lightTheme } from '@/styles/contract.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={lightTheme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  )
}
