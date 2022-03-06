import { createContext } from 'react'

interface PostsContextInterface {
  fetchPosts: () => void
}

export const PostsContext = createContext<PostsContextInterface>({} as PostsContextInterface)
