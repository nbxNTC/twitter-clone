import { useRouter } from 'next/router'
import { useState, useContext } from 'react'
import { format } from 'date-fns'
import { PostInterface, MenuItemInterface } from 'helpers/types'
import { createRepost } from 'services/posts'
import { PostsContext } from 'contexts'

import { Avatar, Box, Typography, Link, IconButton, Tooltip } from '@mui/material'
import { CompareArrows, Create } from '@mui/icons-material'
import { MenuList, QuotedPost, CreatePostDialog } from 'components'

interface Props {
  data: PostInterface
  userThatReposted?: string
}

export const Post = (props: Props) => {
  const { data, userThatReposted } = props

  const router = useRouter()

  const { fetchPosts } = useContext(PostsContext)

  const [anchorRepost, setAnchorRepost] = useState<HTMLElement | null>(null)
  const [openCreatePost, setOpenCreatePost] = useState<boolean>(false)

  const handleOpenProfile = () => {
    router.push({ pathname: '/', query: { ...router.query, profile: data.user.id } }, `/profile/${data.user.id}`, { scroll: false })
  }

  const repostMenuList: MenuItemInterface[] = [
    {
      icon: <CompareArrows />,
      name: 'Repost',
      onSubmit: () => {
        createRepost(data)
        setAnchorRepost(null)
        fetchPosts()
      },
    },
    {
      icon: <Create />,
      name: 'Quote Post',
      onSubmit: () => {
        setOpenCreatePost(true)
        setAnchorRepost(null)
      },
    },
  ]

  const styles: MuiStyles = {
    root: {
      height: 'fit-content',
      padding: '1rem',

      border: '1px solid rgb(255,255,255,.1)',
      borderRadius: 0,

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
      width: '3.5rem',
      height: '3.5rem',
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
      {userThatReposted && <Typography sx={styles.repostUser}>{userThatReposted} reposted</Typography>}

      <Box sx={styles.content}>
        <Avatar sx={styles.avatar} alt={`Avatar of ${data.user.nickname}`} src={data.user.photoUrl} onClick={handleOpenProfile} />

        <Box>
          <Box sx={styles.header}>
            <Link sx={styles.userName} underline='hover' onClick={handleOpenProfile}>
              {data.user.name}
            </Link>
            <Typography sx={styles.userInfo}>@{data.user.nickname}</Typography>
            <Typography sx={styles.userInfo}>{format(new Date(data.createdAt), 'MMMM dd, yy')}</Typography>
          </Box>

          {data.message && <Typography>{data.message}</Typography>}
          {data.post && <QuotedPost data={data.post} />}

          <Box sx={styles.actions}>
            <Tooltip title='Repost'>
              <IconButton id='repost-button' onClick={(e) => setAnchorRepost(e.currentTarget)}>
                <CompareArrows />
              </IconButton>
            </Tooltip>

            <MenuList ariaLabel='repost-button' anchor={anchorRepost} setAnchor={setAnchorRepost} data={repostMenuList} />
            <CreatePostDialog open={openCreatePost} setOpen={setOpenCreatePost} post={data} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
