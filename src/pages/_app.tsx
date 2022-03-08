import 'assets/styles/globals.css'
import 'helpers/globalTypes'

import type { AppProps } from 'next/app'

import { CustomThemeProvider, CustomSessionProvider } from 'providers'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CustomSessionProvider>
      <CustomThemeProvider>
        <Component {...pageProps} />
      </CustomThemeProvider>
    </CustomSessionProvider>
  )
}

export default MyApp
