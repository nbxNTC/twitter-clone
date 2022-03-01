import router from 'next/router'

import { Box, Button, SxProps } from '@mui/material'
import { Home, PersonOutline } from '@mui/icons-material'

export const Sidebar = () => {
  const styles = {
    box: {
      width: '20rem',
      padding: '0 2rem',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',

      '& > *': {
        marginBottom: '.5rem',
      },
    } as SxProps,
    logo: {
      marginBottom: '1rem',
    } as SxProps,
    action: {
      marginTop: '1rem',
    } as SxProps,
  }

  const menuItems = [
    { name: 'Home', url: '/', icon: <Home /> },
    { name: 'Profile', url: '/profile', icon: <PersonOutline /> },
  ]

  return (
    <Box sx={styles.box}>
      <Button sx={styles.logo} size='large' onClick={() => router.push('/')}>
        Posterr
      </Button>

      {menuItems.map((item, index) => (
        <Button startIcon={item.icon} size='large' onClick={() => router.push(item.url)} key={new Date().toString() + index}>
          {item.name}
        </Button>
      ))}

      <Button sx={styles.action} fullWidth size='large' variant='contained'>
        Post
      </Button>
    </Box>
  )
}
