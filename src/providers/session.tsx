import { ReactNode, useState, useEffect } from 'react'
import { SessionInterface } from 'helpers/types'
import { getSession } from 'helpers/utils'
import { seedDatabase } from 'helpers/seed'
import { sessionMock } from 'helpers/mocks'
import { SessionContext } from 'contexts'

interface Props {
  children: ReactNode
}

export const CustomSessionProvider = (props: Props) => {
  const { children } = props

  const [session, setSession] = useState<SessionInterface | undefined>()

  useEffect(() => {
    if (!session) {
      const localSession = getSession()
      setSession(localSession ? localSession : sessionMock)
      if (!localSession) seedDatabase()
    }
  }, [session])

  return <SessionContext.Provider value={{ session }}>{children}</SessionContext.Provider>
}
