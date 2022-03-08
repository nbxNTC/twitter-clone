import { LogInterface, SessionInterface } from 'helpers/types'

export const printLog = async ({ type, componentName, functionName, message, stackTrace }: LogInterface) => {
  const currentDate = new Date().toISOString()

  const formattedStackTrace = stackTrace ? JSON.stringify(stackTrace) : 'Not found'

  const content = `[strider-front-assessment] [Type: ${type}] [Component: ${componentName}] [Function: ${functionName}] [Date: ${currentDate}] [Message: ${message}] [Error: ${formattedStackTrace}]`

  return console[type](content)
}

export const getSession = () => {
  const localSession = localStorage.getItem('session')
  if (!localSession) return
  return JSON.parse(localSession) as SessionInterface
}
