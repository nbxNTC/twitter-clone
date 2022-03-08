import { ThemeOptions } from '@mui/material'
import { palette } from './palette'

export const components: ThemeOptions['components'] = {
  MuiDivider: {
    styleOverrides: {
      root: {
        width: '100%',
        height: '.08rem',
        margin: '1rem 0',
        borderRadius: '50rem',
        backgroundColor: 'rgb(255,255,255,.2)',
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        backgroundColor: palette?.background?.default,
        backgroundImage: 'inherit',
        borderRadius: 20,
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        '&.MuiMenu-list': {
          backgroundColor: palette?.background?.paper,
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
        overflowWrap: 'anywhere',
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
}
