import { SxProps } from '@mui/material'

declare global {
  interface MuiStyles {
    [key: string]: SxProps
  }
}
