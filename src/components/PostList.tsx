import { PostInterface } from 'helpers/types'

import { SxProps, Box } from '@mui/material'
import { Post } from 'components'

interface Props {
  data: PostInterface[]
}

export const PostList = (props: Props) => {
  const { data } = props

  const styles = {
    box: {
      display: 'flex',
      flexDirection: 'column',
    } as SxProps,
  }

  return (
    <Box sx={styles.box}>
      {data.map((item, index) => (
        <Post data={item} key={new Date().toString() + index} />
      ))}
    </Box>
  )
}
