import { useState } from 'react'
import { MenuItemInterface } from 'helpers/types'
import { MenuList } from 'components'

import { Box, SxProps, Typography, IconButton, Tooltip } from '@mui/material'
import { Feed } from '@mui/icons-material'

interface Props {
  title: string
  hasFeed?: boolean
}

export const Header = (props: Props) => {
  const { title, hasFeed } = props

  const [anchorFeed, setAnchorFeed] = useState<HTMLElement | null>(null)

  const feedMenuList: MenuItemInterface[] = [
    { name: 'All posts', onSubmit: () => {} },
    { name: 'Following posts', onSubmit: () => {} },
  ]

  const styles = {
    root: {
      padding: '1rem',

      border: '1px solid rgb(255,255,255,.1)',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    } as SxProps,
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
