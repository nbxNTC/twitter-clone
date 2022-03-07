import { useState, useEffect, useCallback } from 'react'
import { PostInterface, FeedTypeEnum } from 'helpers/types'
import { getPosts } from 'services/posts'

export const usePosts = (feedType?: FeedTypeEnum) => {
  const [posts, setPosts] = useState<PostInterface[]>([])

  const fetchPosts = useCallback((feedType?: FeedTypeEnum) => {
    const newPosts = getPosts(feedType as FeedTypeEnum)
    setPosts(newPosts || [])
  }, [])

  useEffect(() => {
    if (!posts.length) fetchPosts(feedType)
  }, [posts, fetchPosts, feedType])

  return { posts, fetchPosts }
}
