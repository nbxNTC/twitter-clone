import React from 'react'
import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { palette } from './palette'
import { components } from './components'

export const CustomThemeProvider: React.FC = ({ children }) => {
  const theme = createTheme({
    palette,
    components,
  })

  const styles: MuiStyles = {
    container: {
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default,
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.container}>{children}</Box>
    </ThemeProvider>
  )
}
