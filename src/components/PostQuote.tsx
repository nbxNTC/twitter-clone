import router from 'next/router'
import { format } from 'date-fns'
import { PostInterface } from 'helpers/types'

import { Avatar, Box, Typography, Link } from '@mui/material'

interface Props {
  data: PostInterface
}

export const PostQuote = (props: Props) => {
  const { data } = props

  const styles: MuiStyles = {
    root: {
      width: '100%',
      height: 'fit-content',
      padding: '1rem',
      margin: '1rem 0 .5rem',

      border: '1px solid rgb(255,255,255,.1)',
      borderRadius: 6,

      display: 'flex',
      flexDirection: 'column',

      '&:hover': {
        backgroundColor: 'rgb(255,255,255,.1)',
      },
    },
    content: {
      display: 'flex',
    },
    avatar: {
      width: '1.5rem',
      height: '1.5rem',
      marginRight: '1rem',
      cursor: 'pointer',
    },
    username: {
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
  }

  return (
    <Box sx={styles.root}>
      <Box sx={styles.content}>
        <Box>
          <Box sx={styles.header}>
            <Avatar
              sx={styles.avatar}
              alt={`Avatar of ${data.user.nickname}`}
              src={data.user.photoUrl}
              onClick={() => router.push(`/profile/${data.user.nickname}`)}
            />
            <Link sx={styles.username} underline='hover' onClick={() => router.push(`/profile/${data.user.nickname}`)}>
              {data.user.name}
            </Link>
            <Typography sx={styles.userInfo}>@{data.user.nickname}</Typography>
            <Typography sx={styles.userInfo}>{format(new Date(data.createdAt), 'MMMM dd, yy')}</Typography>
          </Box>

          {data.message && <Typography>{data.message}</Typography>}
        </Box>
      </Box>
    </Box>
  )
}
