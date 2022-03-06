import { createContext } from 'react'
import { SessionInterface } from 'helpers/types'

interface SessionContextInterface {
  session?: SessionInterface
}

export const SessionContext = createContext<SessionContextInterface>({} as SessionContextInterface)
