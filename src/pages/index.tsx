import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { usePosts } from 'hooks'
import { PostsContext } from 'contexts'
import { FeedTypeEnum } from 'helpers/types'

import { Box } from '@mui/material'
import { Header, Sidebar, PostList } from 'components'

interface Props {
  feedType?: FeedTypeEnum
}

const Home = (props: Props) => {
  const { feedType } = props

  const { posts, fetchPosts } = usePosts(feedType)

  const styles: MuiStyles = {
    root: {
      display: 'flex',
    },
    sidebar: {
      width: '33vw',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    content: {
      width: '33vw',
    },
  }

  return (
    <PostsContext.Provider value={{ fetchPosts }}>
      <Box sx={styles.root}>
        <Head>
          <title>Home / Posterr</title>
        </Head>

        <Box sx={styles.sidebar}>
          <Sidebar />
        </Box>

        <Box sx={styles.content}>
          <Header title='Home' hasFeed />
          <PostList data={posts} />
        </Box>
      </Box>
    </PostsContext.Provider>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const props = {}
  if (query.feedType) Object.assign(props, { feedType: query.feedType })
  return { props }
}
