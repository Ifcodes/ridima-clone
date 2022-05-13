import React from 'react'
import AppleLogoIcon from '../../atoms/vectors/AppleLogoIcon'
import FacebookIcon from '../../atoms/vectors/FacebookIcon'
import GoogleIcon from '../../atoms/vectors/GoogleIcon'
import { AuthOptionsWrapper } from './styledOptions'

const AlternativeAuthOptions = () => {
  return (
    <AuthOptionsWrapper>
      <GoogleIcon />
      <FacebookIcon />
      <AppleLogoIcon />
    </AuthOptionsWrapper>
  )
}

export default AlternativeAuthOptions