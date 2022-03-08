import { LogTypeEnum, PostInterface, FeedTypeEnum, FollowingUsersInterface } from 'helpers/types'
import { printLog, getSession } from 'helpers/utils'

export const getPosts = (userId?: string, feedType?: FeedTypeEnum) => {
  try {
    if (!userId) return []

    const localPosts = localStorage.getItem('posts')
    const posts = JSON.parse(String(localPosts)) as PostInterface[]
    if (!posts) return []

    const localFollowingUsers = localStorage.getItem('followingUsers')
    const followingUsers = JSON.parse(String(localFollowingUsers)) as FollowingUsersInterface[]

    const following = followingUsers.find((item) => item.id === userId)

    return feedType === FeedTypeEnum.following ? posts.filter((item) => following?.following.includes(item.user.id)) : posts
  } catch (error) {
    printLog({
      type: LogTypeEnum.error,
      componentName: 'services/posts',
      functionName: 'getPosts',
      message: 'An error occurred when trying to get posts',
      stackTrace: error,
    })
    return []
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
