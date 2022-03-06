import { LogTypeEnum, PostInterface } from 'helpers/types'
import { printLog, getSession } from 'helpers/utils'
import { postsMock } from 'helpers/mocks'

export const getPosts = () => {
  try {
    const localPosts = localStorage.getItem('posts')
    if (localPosts) return JSON.parse(localPosts) as PostInterface[]

    localStorage.setItem('posts', JSON.stringify(postsMock))
    return postsMock as PostInterface[]
  } catch (error) {
    printLog({
      type: LogTypeEnum.error,
      componentName: 'services/posts',
      functionName: 'getPosts',
      message: 'An error occurred when trying to get posts',
      stackTrace: error,
    })
  }
}

export const createPost = (message: string, post?: PostInterface) => {
  try {
    const session = getSession()

    if (!session)
      return printLog({
        type: LogTypeEnum.error,
        componentName: 'services/posts',
        functionName: 'createPost',
        message: 'Session not found',
      })

    const newPost: PostInterface = {
      message,
      user: session.user,
      type: post ? 'QUOTE' : 'POST',
      post,
      createdAt: new Date(),
    }

    const localPosts = localStorage.getItem('posts')
    const posts: PostInterface[] = localPosts ? JSON.parse(localPosts) : []

    posts.push(newPost)

    localStorage.setItem('posts', JSON.stringify(posts))
  } catch (error) {
    printLog({
      type: LogTypeEnum.error,
      componentName: 'services/posts',
      functionName: 'createPost',
      message: 'An error occurred when trying to create a post',
      stackTrace: error,
    })
  }
}

export const createRepost = (post: PostInterface) => {
  try {
    const session = getSession()

    if (!session)
      return printLog({
        type: LogTypeEnum.error,
        componentName: 'services/posts',
        functionName: 'createRepost',
        message: 'Session not found',
      })

    const newPost: PostInterface = {
      user: session.user,
      type: 'REPOST',
      post,
      createdAt: new Date(),
    }

    const localPosts = localStorage.getItem('posts')
    const posts: PostInterface[] = localPosts ? JSON.parse(localPosts) : []

    posts.push(newPost)

    localStorage.setItem('posts', JSON.stringify(posts))
  } catch (error) {
    printLog({
      type: LogTypeEnum.error,
      componentName: 'services/posts',
      functionName: 'createRepost',
      message: 'An error occurred when trying to create a repost',
      stackTrace: error,
    })
  }
}
