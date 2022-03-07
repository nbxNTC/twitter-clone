import { LogTypeEnum, PostInterface, FeedTypeEnum, FollowsType } from 'helpers/types'
import { printLog, getSession } from 'helpers/utils'
import { postsMock, followsMock } from 'helpers/mocks'

export const getPosts = (feedType?: FeedTypeEnum) => {
  try {
    const localPosts = localStorage.getItem('posts')
    if (!localPosts) localStorage.setItem('posts', JSON.stringify(postsMock))
    const posts = (localPosts ? JSON.parse(localPosts) : postsMock) as PostInterface[]

    const localFollows = localStorage.getItem('follows')
    if (!localFollows) localStorage.setItem('follows', JSON.stringify(followsMock))
    const follows = (localFollows ? JSON.parse(localFollows) : followsMock) as FollowsType

    return feedType === FeedTypeEnum.FOLLOWING ? posts.filter((item) => follows.includes(item.user.nickname)) : posts
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
