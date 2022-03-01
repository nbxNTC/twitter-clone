import { useState, useEffect, useCallback } from 'react'
import { PostInterface } from 'helpers/types'
import { getPosts } from 'services/posts'

export const usePosts = () => {
  const [posts, setPosts] = useState<PostInterface[]>([])

  const fetchData = useCallback(() => {
    const newPosts = getPosts()
    setPosts(newPosts || [])
  }, [])

  useEffect(() => {
    if (!posts.length) fetchData()
  }, [posts, fetchData])

  return { posts }
}
