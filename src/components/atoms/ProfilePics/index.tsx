import React, { ReactNode } from 'react'
import { ProfilePicsWrapper } from './profilepicsStyles'

type ProfilePicsProps = {
  width?: string,
  height?: string,
  imgUrl?: string,
}
const ProfilePics = ({
  width,
  height,
  imgUrl,
}: ProfilePicsProps) => {
  return (
    <ProfilePicsWrapper
      width={width}
      height={height}
    >
      <img src={imgUrl} alt='' />
    </ProfilePicsWrapper>
  )
}

export default ProfilePics