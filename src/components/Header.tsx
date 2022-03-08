import { useRouter } from 'next/router'
import { useState, useContext } from 'react'
import { MenuItemInterface, FeedTypeEnum } from 'helpers/types'
import { MenuList } from 'components'
import { PostsContext } from 'contexts'

import { Box, Typography, IconButton, Tooltip } from '@mui/material'
import { Feed, ChevronLeft } from '@mui/icons-material'

interface Props {
  title: string
  hasBackButton?: boolean
  hasFeed?: boolean
}

export const Header = (props: Props) => {
  const { title, hasBackButton, hasFeed } = props

  const router = useRouter()

  const { fetchPosts } = useContext(PostsContext)

  const [anchorFeed, setAnchorFeed] = useState<HTMLElement | null>(null)

  const feedMenuList: MenuItemInterface[] = [
    {
      name: 'All posts',
      onSubmit: () => {
        setAnchorFeed(null)
        router.push('/')
        fetchPosts()
      },
    },
    {
      name: 'Following posts',
      onSubmit: () => {
        setAnchorFeed(null)
        router.push({ pathname: '/', query: { feedType: FeedTypeEnum.following } }, '/feed/following')
        fetchPosts(FeedTypeEnum.following)
      },
    },
  ]

  const styles: MuiStyles = {
    root: {
      padding: '1rem',

      border: '1px solid rgb(255,255,255,.1)',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    titleBox: {
      display: 'flex',
      alignItems: 'center',
    },
    backButton: {
      marginRight: '1rem',
    },
  }

  return (
    <Box sx={styles.root}>
      <Box sx={styles.titleBox}>
        {hasBackButton && (
          <IconButton sx={styles.backButton} onClick={() => router.back()} size='small'>
            <ChevronLeft />
          </IconButton>
        )}
        <Typography>{title}</Typography>
      </Box>

      {hasFeed && (
        <Tooltip title='Feed type'>
          <IconButton id='feed-button' onClick={(e) => setAnchorFeed(e.currentTarget)} size='small'>
            <Feed />
          </IconButton>
        </Tooltip>
      )}

      <MenuList ariaLabel='feed-button' anchor={anchorFeed} setAnchor={setAnchorFeed} data={feedMenuList} />
    </Box>
  )
}
