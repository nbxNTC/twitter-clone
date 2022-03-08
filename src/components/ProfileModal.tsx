import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { useProfile } from 'hooks'

import { Dialog, DialogTitle, DialogContent, Avatar, Typography, IconButton, Box } from '@mui/material'
import { PostList } from 'components'
import { ChevronLeft } from '@mui/icons-material'

export const ProfileModal = () => {
  const router = useRouter()

  const { userId, profile } = useProfile()

  const [open, setOpen] = useState<boolean>(false)

  const handleClose = () => {
    setOpen(false)
    router.back()
  }

  useEffect(() => {
    setOpen(Boolean(userId))
  }, [userId])

  const styles: MuiStyles = {
    avatar: {
      width: '6rem',
      height: '6rem',
      marginBottom: '1rem',
    },
    userName: {
      fontWeight: '500',
    },
    userInfo: {
      color: 'rgb(136, 153, 166)',
    },
    joinedAt: {
      color: 'rgb(136, 153, 166)',
      marginTop: '1rem',
    },
    feedTitle: {
      margin: '1.5rem 0 .5rem',
    },
    flex: {
      display: 'flex',
    },
    metricsBox: {
      marginTop: '.5rem',
      display: 'flex',
    },
    metricsValue: {
      marginRight: '.3rem',
    },
    metricsTitle: {
      marginRight: '1.5rem',
      color: 'rgb(136, 153, 166)',
    },
  }

  if (!profile) return null

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <IconButton onClick={handleClose}>
          <ChevronLeft />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Avatar sx={styles.avatar} alt={`Avatar`} src={profile.user.photoUrl} />
        <Typography sx={styles.userName} variant='h5' component='h5'>
          {profile.user.name}
        </Typography>
        <Typography sx={styles.userInfo}>@{profile.user.nickname}</Typography>
        <Typography sx={styles.joinedAt}>Joined {format(new Date(String(profile.user.createdAt)), 'MMMM dd, yy')}</Typography>

        <Box sx={styles.metricsBox}>
          <Box sx={styles.flex}>
            <Typography sx={styles.metricsValue}>{profile.following}</Typography>
            <Typography sx={styles.metricsTitle}>Following</Typography>
          </Box>

          <Box sx={styles.flex}>
            <Typography sx={styles.metricsValue}>{profile.follows}</Typography>
            <Typography sx={styles.metricsTitle}>Followers</Typography>
          </Box>
        </Box>

        <Typography sx={styles.feedTitle} variant='h6' component='h6'>
          Posts
        </Typography>
        <PostList data={profile.posts} />
      </DialogContent>
    </Dialog>
  )
}
