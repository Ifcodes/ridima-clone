import { entity } from 'simpler-state'

export const profileComplete = entity(false)

export const setProfileComplete = (val: boolean) => {
  profileComplete.set(val)
}