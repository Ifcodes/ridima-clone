import { entity } from "simpler-state";

export const user = entity({
  profileImage: '',
  userName: 'Toyosil',
})

export const setUser = (userDetails: {
  profileImage: string,
  userName: string,
}) => {
  user.set(userDetails)
}