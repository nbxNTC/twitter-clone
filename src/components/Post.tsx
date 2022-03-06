import router from 'next/router'
import { useState } from 'react'
import { format } from 'date-fns'
import { PostInterface, MenuItemInterface } from 'helpers/types'
import { createRepost } from 'services/posts'

import { Avatar, Box, Typography, Link, IconButton, Tooltip } from '@mui/material'
import { CompareArrows, Create } from '@mui/icons-material'
import { MenuList } from 'components'

interface Props {
  data: PostInterface
}

export const Post = (props: Props) => {
  const { data } = props

  const post = !data.post || (data.post && data.message) ? data : data.post

  const [anchorRepost, setAnchorRepost] = useState<HTMLElement | null>(null)

  const repostMenuList: MenuItemInterface[] = [
    {
      icon: <CompareArrows />,
      name: 'Repost',
      onSubmit: () => {
        createRepost(data)
        setAnchorRepost(null)
      },
    },
    { icon: <Create />, name: 'Quote Post', onSubmit: () => {} },
  ]

  const styles: MuiStyles = {
    root: {
      height: 'fit-content',
      padding: '1rem',
      margin: data.type === 'POST' ? '0' : '1rem 0 .5rem',

      border: '1px solid rgb(255,255,255,.1)',
      borderRadius: data.type === 'POST' ? 0 : 6,

      display: 'flex',
      flexDirection: 'column',

      '&:hover': {
        backgroundColor: 'rgb(255,255,255,.1)',
      },
    },
    repostUser: {
      color: 'rgb(136, 153, 166)',
      marginBottom: '1rem',
    },
    content: {
      display: 'flex',
    },
    avatar: {
      width: data.type === 'POST' ? '3.5rem' : '1.5rem',
      height: data.type === 'POST' ? '3.5rem' : '1.5rem',
      marginRight: '1rem',
      cursor: 'pointer',
    },
    userName: {
      fontWeight: '500',
    },
    header: {
      marginBottom: '.2rem',

      display: 'flex',
      alignItems: 'center',

      '& > *:not(:last-child)': {
        marginRight: '.5rem',
      },
    },
    userInfo: {
      color: 'rgb(136, 153, 166)',
    },
    actions: {
      display: 'flex',
      alignItems: 'center',

      '& > *:not(:last-child)': {
        marginRight: '.5rem',
      },
    },
  }

  return (
    <Box sx={styles.root}>
      {data.type === 'POST' && data.post && !data.message && <Typography sx={styles.repostUser}>{data.user.name} reposted</Typography>}

      <Box sx={styles.content}>
        {data.type === 'POST' && (
          <Avatar
            sx={styles.avatar}
            alt={`Avatar of ${post.user.nickname}`}
            src={post.user.photoUrl}
            onClick={() => router.push(`/profile/${post.user.nickname}`)}
          />
        )}

        <Box>
          <Box sx={styles.header}>
            {data.type === 'REPOST' && (
              <Avatar
                sx={styles.avatar}
                alt={`Avatar of ${post.user.nickname}`}
                src={post.user.photoUrl}
                onClick={() => router.push(`/profile/${post.user.nickname}`)}
              />
            )}
            <Link sx={styles.userName} underline='hover' onClick={() => router.push(`/profile/${post.user.nickname}`)}>
              {post.user.name}
            </Link>
            <Typography sx={styles.userInfo}>@{post.user.nickname}</Typography>
            <Typography sx={styles.userInfo}>{format(new Date(post.createdAt), 'MMMM dd, yy')}</Typography>
          </Box>

          {post.message && <Typography>{post.message}</Typography>}
          {post.post && <Post data={post.post} />}

          {post.type === 'POST' && (
            <Box sx={styles.actions}>
              <Tooltip title='Repost'>
                <IconButton id='repost-button' onClick={(e) => setAnchorRepost(e.currentTarget)}>
                  <CompareArrows />
                </IconButton>
              </Tooltip>

              <MenuList ariaLabel='repost-button' anchor={anchorRepost} setAnchor={setAnchorRepost} data={repostMenuList} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}
