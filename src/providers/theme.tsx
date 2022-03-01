import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export const CustomThemeProvider: React.FC = ({ children }) => {
  const theme = createTheme({})

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
