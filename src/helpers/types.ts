export enum LogType {
  info = 'log',
  warning = 'warn',
  error = 'error',
}

export interface Log {
  type: LogType
  componentName: string
  functionName: string
  message: string
  stackTrace?: any
}
