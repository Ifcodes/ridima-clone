import { entity } from "simpler-state";

export const logoutState = entity(false)

export const setLogout = (state: boolean) => {
  logoutState.set(state)
}