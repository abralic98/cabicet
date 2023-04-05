import { Html, Head, Main, NextScript } from 'next/document'

import { darkTheme } from '@/styles/contract.css'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={darkTheme}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
