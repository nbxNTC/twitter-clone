import { createContext } from 'react'
import { FeedTypeEnum } from 'helpers/types'

interface PostsContextInterface {
  fetchPosts: (feedType?: FeedTypeEnum | undefined) => void
}

export const PostsContext = createContext<PostsContextInterface>({} as PostsContextInterface)
