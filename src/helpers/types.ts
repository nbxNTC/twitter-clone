export enum LogTypeEnum {
  info = 'log',
  warning = 'warn',
  error = 'error',
}

export interface LogInterface {
  type: LogTypeEnum
  componentName: string
  functionName: string
  message: string
  stackTrace?: any
}

export interface UserInterface {
  id: string
  photoUrl: string
  name: string
  nickname: string
  createdAt: Date
}

export type PostType = 'POST' | 'REPOST' | 'QUOTE'

export interface PostInterface {
  user: UserInterface
  type: PostType
  message?: string
  post?: PostInterface
  createdAt: Date
}

export interface MenuItemInterface {
  icon?: React.ReactNode
  name: string
  onSubmit: () => void
}

export interface SessionInterface {
  user: UserInterface
}

export enum FeedTypeEnum {
  'all' = 'all',
  'following' = 'following',
}

export interface FollowingUsersInterface {
  id: string
  following: string[]
}

export interface ProfileInterface {
  user: UserInterface
  posts: PostInterface[]
  follows: number
  following: number
  wasFollowed: boolean
}
