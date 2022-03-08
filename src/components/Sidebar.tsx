import router from 'next/router'
import { useState } from 'react'

import { Box, Button } from '@mui/material'
import { Home, PersonOutline } from '@mui/icons-material'
import { CreatePostDialog } from 'components'

export const Sidebar = () => {
  const [openCreatePost, setOpenCreatePost] = useState<boolean>(false)

  const menuItems = [
    { name: 'Home', url: '/', icon: <Home /> },
    { name: 'Profile', url: '/profile', icon: <PersonOutline /> },
  ]

  const styles: MuiStyles = {
    box: {
      width: '20rem',
      padding: '0 2rem',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',

      '& > *': {
        marginBottom: '.5rem',
      },
    },
    logo: {
      marginBottom: '1rem',
    },
    action: {
      marginTop: '1rem',
    },
  }

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

      <Button sx={styles.action} fullWidth size='large' variant='contained' onClick={() => setOpenCreatePost(true)}>
        Post
      </Button>

      <CreatePostDialog open={openCreatePost} setOpen={setOpenCreatePost} />
    </Box>
  )
}
