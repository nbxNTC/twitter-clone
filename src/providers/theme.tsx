import React from 'react'
import { SxProps, Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export const CustomThemeProvider: React.FC = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#1d9bf0' },
      secondary: { main: '#ffffff' },
      background: { default: '#15202B' },
    },
    components: {
      MuiList: {
        styleOverrides: {
          root: {
            '&.MuiMenu-list': {
              backgroundColor: '#172430',
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: 'rgba(255,255,255,.4)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,.1)',
            },
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: 'white',
            cursor: 'pointer',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#ffffff',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            padding: '.6rem 1.3rem',
            borderRadius: '50rem',
            color: 'white',
            textTransform: 'inherit',
          },
        },
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              '&:hover': {
                backgroundColor: '#1678bb',
              },
            },
          },
          {
            props: { variant: 'text' },
            style: {
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,.1)',
              },
            },
          },
        ],
      },
    },
  })

  const styles = {
    container: {
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default,
    } as SxProps,
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} sx={styles.container}>
        {children}
      </Container>
    </ThemeProvider>
  )
}
