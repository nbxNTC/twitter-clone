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
  photoUrl: string
  name: string
  nickname: string
}

export type PostType = 'POST' | 'REPOST'

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
