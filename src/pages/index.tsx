import type { NextPage } from 'next'
import Head from 'next/head'
import { usePosts } from 'hooks'

import { SxProps, Container, Box } from '@mui/material'
import { Header, Sidebar, PostList } from 'components'

const Home: NextPage = () => {
  const { posts } = usePosts()

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
    } as SxProps,
    content: {
      width: '36rem',
    } as SxProps,
  }

  return (
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
  )
}

export default Home
