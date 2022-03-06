import type { NextPage } from 'next'
import Head from 'next/head'
import { usePosts } from 'hooks'
import { PostsContext } from 'contexts'

import { Container, Box } from '@mui/material'
import { Header, Sidebar, PostList } from 'components'

const Home: NextPage = () => {
  const { posts, fetchPosts } = usePosts()

  const styles: MuiStyles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
    },
    content: {
      width: '36rem',
    },
  }

  return (
    <PostsContext.Provider value={{ fetchPosts }}>
      <Container sx={styles.container}>
        <Head>
          <title>Home / Posterr</title>
        </Head>

        <Sidebar />

        <Box sx={styles.content}>
          <Header title='Home' hasFeed />
          <PostList data={posts} />
        </Box>
      </Container>
    </PostsContext.Provider>
  )
}

export default Home
