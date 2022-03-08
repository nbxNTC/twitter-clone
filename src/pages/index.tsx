import Head from 'next/head'
import { usePosts } from 'hooks'
import { PostsContext } from 'contexts'

import { Box } from '@mui/material'
import { Header, Sidebar, PostList, ProfileModal } from 'components'

const Home = () => {
  const { posts, fetchPosts } = usePosts()

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

          <ProfileModal />
        </Box>
      </Box>
    </PostsContext.Provider>
  )
}

export default Home
