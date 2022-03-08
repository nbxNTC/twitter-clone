import { useRouter } from 'next/router'
import { useState, useEffect, useCallback } from 'react'
import { ProfileInterface } from 'helpers/types'
import { getProfile } from 'services/profiles'

export const useProfile = () => {
  const router = useRouter()
  const { profile: userId } = router.query

  const [profile, setProfile] = useState<ProfileInterface | undefined>()

  const fetchProfile = useCallback((userId: string) => {
    const newProfile = getProfile(userId)
    setProfile(newProfile)
  }, [])

  useEffect(() => {
    if (userId) fetchProfile(String(userId))
  }, [userId, fetchProfile])

  return { userId, profile, setProfile }
}
