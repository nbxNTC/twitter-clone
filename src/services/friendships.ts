import { LogTypeEnum, FollowingUsersInterface } from 'helpers/types'
import { printLog, getSession } from 'helpers/utils'

export const createFriendship = (userId: string) => {
  try {
    const localSession = getSession()
    if (!localSession) return

    const localFollowingUsers = localStorage.getItem('followingUsers')
    const followingUsers = JSON.parse(String(localFollowingUsers)) as FollowingUsersInterface[]
    const following = followingUsers.find((item) => item.id === localSession.user.id)
    following?.following.push(userId)

    localStorage.setItem('followingUsers', JSON.stringify(followingUsers))
    return true
  } catch (error) {
    printLog({
      type: LogTypeEnum.error,
      componentName: 'services/friendships',
      functionName: 'createFriendship',
      message: 'An error occurred when trying to create a friendship',
      stackTrace: error,
    })
  }
}

export const deleteFriendship = (userId: string) => {
  try {
    const localSession = getSession()
    if (!localSession) return

    const localFollowingUsers = localStorage.getItem('followingUsers')
    const followingUsers = JSON.parse(String(localFollowingUsers)) as FollowingUsersInterface[]
    const following = followingUsers.find((item) => item.id === localSession.user.id)
    if (following) following.following = following.following.filter((item) => item !== userId)

    localStorage.setItem('followingUsers', JSON.stringify(followingUsers))
    return true
  } catch (error) {
    printLog({
      type: LogTypeEnum.error,
      componentName: 'services/friendships',
      functionName: 'deleteFriendship',
      message: 'An error occurred when trying to delete a friendship',
      stackTrace: error,
    })
  }
}
