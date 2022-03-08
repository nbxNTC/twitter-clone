import { LogTypeEnum, UserInterface, PostInterface, FollowingUsersInterface, ProfileInterface } from 'helpers/types'
import { printLog } from 'helpers/utils'

export const getProfile = (userId: string) => {
  try {
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

    return {
      user,
      posts: userPosts,
      follows,
      following,
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
