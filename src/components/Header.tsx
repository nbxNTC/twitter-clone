import router from 'next/router'
import { useState, useContext } from 'react'
import { MenuItemInterface, FeedTypeEnum } from 'helpers/types'
import { MenuList } from 'components'
import { PostsContext } from 'contexts'

import { Box, Typography, IconButton, Tooltip } from '@mui/material'
import { Feed } from '@mui/icons-material'

interface Props {
  title: string
  hasFeed?: boolean
}

export const Header = (props: Props) => {
  const { title, hasFeed } = props

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
        router.push('/', { query: { feedType: FeedTypeEnum.FOLLOWING } })
        fetchPosts(FeedTypeEnum.FOLLOWING)
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
  }

  return (
    <Box sx={styles.root}>
      <Typography>{title}</Typography>

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
