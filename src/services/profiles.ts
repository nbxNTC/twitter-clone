import { LogTypeEnum, UserInterface, PostInterface, FollowingUsersInterface, ProfileInterface } from 'helpers/types'
import { printLog, getSession } from 'helpers/utils'

export const getProfile = (userId: string) => {
  try {
    const localSession = getSession()
    if (!localSession) return

    const localUsers = localStorage.getItem('users')
    const users = JSON.parse(String(localUsers)) as UserInterface[]
    const user = users.find((item) => item.id === userId)

    const localPosts = localStorage.getItem('posts')
    const posts = JSON.parse(String(localPosts)) as PostInterface[]
    const userPosts = posts.filter((item) => item.user.id === userId)

    const localFollowingUsers = localStorage.getItem('followingUsers')
    const followingUsers = JSON.parse(String(localFollowingUsers)) as FollowingUsersInterface[]
    const follows = followingUsers.filter((item) => item.following.includes(userId)).length || 0
    const following = followingUsers.find((item) => item.id === userId)?.following.length || 0

    const wasFollowed = Boolean(followingUsers.find((item) => item.id === localSession.user.id)?.following.includes(userId))

    return {
      user,
      posts: userPosts,
      follows,
      following,
      wasFollowed,
    } as ProfileInterface
  } catch (error) {
    printLog({
      type: LogTypeEnum.error,
      componentName: 'services/profiles',
      functionName: 'getProfile',
      message: 'An error occurred when trying to get profile',
      stackTrace: error,
    })
  }
}
