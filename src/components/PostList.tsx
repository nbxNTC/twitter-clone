import { PostInterface } from 'helpers/types'

import { Box } from '@mui/material'
import { Post } from 'components'

interface Props {
  data: PostInterface[]
}

export const PostList = (props: Props) => {
  const { data } = props

  const styles: MuiStyles = {
    box: {
      display: 'flex',
      flexDirection: 'column',
    },
  }

  return (
    <Box sx={styles.box}>
      {data
        .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
        .map((item, index) => (
          <Post data={item} key={new Date().toString() + index} />
        ))}
    </Box>
  )
}
