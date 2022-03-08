import { useRouter } from 'next/router'
import { useState, useEffect, useCallback, useContext } from 'react'
import { PostInterface, FeedTypeEnum } from 'helpers/types'
import { getPosts } from 'services/posts'
import { SessionContext } from 'contexts'

export const usePosts = () => {
  const router = useRouter()
  const { feedType } = router.query

  const { session } = useContext(SessionContext)

  const [posts, setPosts] = useState<PostInterface[]>([])

  const fetchPosts = useCallback(
    (feedType?: FeedTypeEnum) => {
      const newPosts = getPosts(session?.user.id, feedType)
      setPosts(newPosts || [])
    },
    [session?.user.id],
  )

  useEffect(() => {
    if (session?.user.id) fetchPosts(feedType as FeedTypeEnum)
  }, [fetchPosts, feedType, session])

  return { posts, fetchPosts }
}
