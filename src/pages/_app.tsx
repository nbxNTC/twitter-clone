import 'assets/styles/globals.css'

import type { AppProps } from 'next/app'

import { CustomThemeProvider } from 'providers'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CustomThemeProvider>
      <Component {...pageProps} />
    </CustomThemeProvider>
  )
}

export default MyApp
