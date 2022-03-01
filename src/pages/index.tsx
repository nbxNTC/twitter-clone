import type { NextPage } from 'next'
import Head from 'next/head'

import { Typography } from '@mui/material'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Typography variant='h3' component='h3'>
        Home
      </Typography>
    </div>
  )
}

export default Home
