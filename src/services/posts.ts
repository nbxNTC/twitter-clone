import { LogTypeEnum, PostInterface } from 'helpers/types'
import { printLog } from 'helpers/utils'
import { postsMock } from 'helpers/mocks'

export const getPosts = () => {
  try {
    // Here we communicate to api
    const posts = postsMock
    return posts as PostInterface[]
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
