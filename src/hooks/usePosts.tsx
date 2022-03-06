import { useState, useEffect, useCallback } from 'react'
import { PostInterface } from 'helpers/types'
import { getPosts } from 'services/posts'

export const usePosts = () => {
  const [posts, setPosts] = useState<PostInterface[]>([])

  const fetchPosts = useCallback(() => {
    const newPosts = getPosts()
    setPosts(newPosts || [])
  }, [])

  useEffect(() => {
    if (!posts.length) fetchPosts()
  }, [posts, fetchPosts])

  return { posts, fetchPosts }
}
